
import React from "react";
import { Link } from "gatsby";
import { Button } from 'semantic-ui-react'
const Header = ({ siteTitle }) => {

  return (
    <header
      className="main-header"
    >
      <div
        
      >
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
       
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
