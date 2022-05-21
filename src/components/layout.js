import * as React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Header from "../components/header"
import MessengerCustomerChat from "react-messenger-customer-chat"
import BackToTop from "../components/Backtotop"
import 'semantic-ui-css/semantic.min.css'
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
    return (
      <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
        {children}

        <MessengerCustomerChat pageId="2106496549385767" />  
        <BackToTop  />
      </>
    )
  }
  export default Layout