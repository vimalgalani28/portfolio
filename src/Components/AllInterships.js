import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import InternCard from "./InternCard"

const AllInterships = () => {
  const res = useStaticQuery(graphql`
    query {
      allContentfulExperience(sort: { fields: startDate, order: DESC }) {
        edges {
          node {
            id
            company
            role
            work
            startDate(formatString: "MMMM, YYYY")
            endDate(formatString: "MMMM, YYYY")
            logo {
              gatsbyImageData(width: 200, placeholder: BLURRED)
            }
            technologies {
              gatsbyImageData(height: 40, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  const edges = res.allContentfulExperience.edges
  return (
    <div>
      {edges.map(edge => (
        <div key={edge.node.id} className="mb-3">
          <InternCard experience={edge.node} />
        </div>
      ))}
    </div>
  )
}

export default AllInterships
