/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    if (node.frontmatter.type === `til`) {
      const filePath = createFilePath({ node, getNode, basePath: `pages` })
      const slug = `/til${filePath}`
      const category = filePath.split("/").slice(1, -2)

      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })

      createNodeField({
        node,
        name: `category`,
        value: category,
      })
    }
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              type
            }
          }
        }
      }
    }
  `).then(result => {
    const { edges } = result.data.allMarkdownRemark

    edges.forEach(({ node }) => {
      console.log(node)
      const { fields, frontmatter } = node
      const { slug } = fields
      const { type } = frontmatter

      if (type === "til") {
        const component = path.resolve(`./src/templates/til.jsx`)

        createPage({
          path: slug,
          component,
          context: {
            slug: node.fields.slug,
          },
        })
      }
    })
  })
}
