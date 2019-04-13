import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

interface Props {
  children: React.ReactNode
  subject: string;
  subjectDisplay: string;
}

export default class Layout extends React.PureComponent<Props> {
  public render() {
    const { children, subject, subjectDisplay } = this.props;

    return (
      <StaticQuery
        query={query}
        render={data => {
          const { title } = data.site.siteMetadata;

          return (
            <>
              <Header siteTitle={title} subject={subject} subjectDisplay={subjectDisplay} />
              <div
                style={{
                  margin: `0 auto`,
                  maxWidth: 960,
                  padding: `0px 1.0875rem 1.45rem`,
                  paddingTop: 0,
                }}
              >
                <main>{children}</main>
                <footer>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </footer>
              </div>
            </>
          )
        }}
      />
    )
  }
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
