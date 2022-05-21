import * as React from "react"
import MessengerCustomerChat from "react-messenger-customer-chat"

const Layout = ({ children }) => {
    return (
      <>
        {children}
        <MessengerCustomerChat pageId="2106496549385767" />  
      </>
    )
  }
  export default Layout