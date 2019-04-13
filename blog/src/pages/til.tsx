import { graphql } from 'gatsby';
import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

interface TILNode {
  node: {
    excerpt: string
    fields: {
      category: string[]
    }
    frontmatter: {
      date: string
      title: string
    }
    fields: {
      slug: string
    }
  }
}

interface Props {
  data: {
    allMarkdownRemark: {
      edges: TILNode[]
    }
  }
}

export default class TIL extends React.PureComponent<Props> {
  public render() {
    const { edges } = this.props.data.allMarkdownRemark

    return (
      <Layout subject="til" subjectDisplay="Today I Learned">
        <div>
          <List>
            {edges.map((edge, index) => {
              return (
                <ListItem key={index}>
                  <ListItemTime>
                    {moment(edge.node.frontmatter.created).format(
                      "YYYY MMMM Do"
                    )}
                  </ListItemTime>
                  <ListItemTitle>
                    <ListItemCategory>
                      {edge.node.fields.category.join(" > ")}
                    </ListItemCategory>
                    {edge.node.frontmatter.title}
                  </ListItemTitle>
                  <summary>{edge.node.excerpt}</summary>
                </ListItem>
              )
            })}
          </List>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "til" } } }) {
      edges {
        node {
          fields {
            category
          }
          excerpt(pruneLength: 500)
          id
          frontmatter {
            title
            created
          }
        }
      }
    }
  }
`

const List = styled.ul`
  font-size: 0.8em;
  margin-top: 112px;
`

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 5em;
`

const ListItemTime = styled.time`
  font-size: 1em;
`

const ListItemCategory = styled.span`
  font-size: 0.5em;
  margin-right: auto;
`

const ListItemTitle = styled.h1`
  color: #222;
  display: flex;
  margin-top: 0;
  text-align: right;
`
