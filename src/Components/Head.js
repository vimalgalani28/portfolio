import { Helmet } from "react-helmet"
import React from "react"

const Head = ({ title, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Vimal Galani" />
    </Helmet>
  )
}

export default Head
