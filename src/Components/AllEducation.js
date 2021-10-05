import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import EducationCard from "./EducationCard"

const AllEducation = () => {
  const res = useStaticQuery(graphql`
    query {
      allContentfulEducation(sort: { fields: startDate, order: DESC }) {
        edges {
          node {
            institute
            startDate(formatString: "MMMM, YYYY")
            endDate(formatString: "MMMM, YYYY")
            score
            status
            website
            logo {
              title
              gatsbyImageData(placeholder: BLURRED, width: 200)
            }
          }
        }
      }
    }
  `)

  const edges = res.allContentfulEducation.edges
  return (
    <div className="grid grid-cols-1 gap-y-3">
      {edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <EducationCard education={node} />
          </div>
        )
      })}
    </div>
  )
}

export default AllEducation
