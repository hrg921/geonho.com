import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';


interface Props {
  siteTitle: string;
  subject: string;
  subjectDisplay: string;
}

export default class Header extends React.PureComponent<Props> {
  public render() {
    const { siteTitle, subject, subjectDisplay } = this.props;
    
    return (
      <HeaderContainer>
        <Title>
          <Link to='/'>
          {siteTitle}
          </Link>, 
          <Link to={`/${subject}`}>
          {subjectDisplay}
          </Link>
        </Title>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.header`
  position: fixed;
`;

const Title = styled.h1`
  a {
    color: #333;
    text-decoration: none;
  }
`;
