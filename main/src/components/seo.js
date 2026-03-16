import * as React from "react"

function Seo({ description, title, children }) {
  return (
    <>
      <title>{title || "Page"}</title>
      <meta name="description" content={description || ""} />
      {children}
    </>
  )
}

export default Seo
