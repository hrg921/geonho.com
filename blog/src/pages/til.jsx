import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export default ({ data }) => {
    const { edges } = data.allMarkdownRemark;

    return (
        <Layout subject="til" subjectDisplay="Today I Learned">
            <div>
            <ul>
                {edges.map(edge => (
                    <li>
                        <h1>{edge.node.frontmatter.title}</h1>
                        <time>{edge.node.frontmatter.created}</time>
                        <summary>{edge.node.excerpt}</summary>
                    </li>    
                ))}
            </ul>
        </div>
        </Layout>
    );
}

export const query = graphql`
query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          id
          frontmatter {
            title
            created
          }
        }
      }
    }
  }
`;
