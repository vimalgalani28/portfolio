import React from "react"
import Header from "./Header"
import { layout } from "../styles/layout.module.css"

const Layout = ({ children }) => {
  return (
    <div className={`grid ${layout} min-h-screen`}>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Layout
