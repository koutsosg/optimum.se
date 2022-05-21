
import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import "./header.css";

const Title = styled.h1`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Header = ({ siteTitle }) => {

  return (
    <header
      className="main-header"
      style={{
        background: `black`,
      }}
    >
      <div
        style={{
          maxWidth: 1480,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Title style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Title>
      </div>
     {/*  <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul> */}
    </header>
  );
};


export default Header;
