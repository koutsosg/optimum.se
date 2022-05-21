import * as React from "react"

import MessengerCustomerChat from "react-messenger-customer-chat"
import BackToTop from "../components/Backtotop"

const Layout = ({ children, siteUrl }) => {
 
    return (
      <>
  
        {children}

        <MessengerCustomerChat pageId="2106496549385767" />  
        <BackToTop  />
      </>
    )
  }
  export default Layout