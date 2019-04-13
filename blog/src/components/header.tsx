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
          {`${siteTitle},`}
          </Link> 
          <Link to={`/${subject}`}>
          {` ${subjectDisplay}`}
          </Link>
        </Title>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 16px;
  left: 16px;
`;

const Title = styled.h1`
  margin-top: 0;

  a {
    color: #333;
    text-decoration: none;
    font-family: 'Amatic SC', cursive;
  }
`;
