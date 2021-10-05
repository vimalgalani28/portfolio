import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ProjectCard from "./ProjectCard"

const AllProjects = () => {
  const res = useStaticQuery(graphql`
    query myquery {
      allContentfulProjects(sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            id
            title
            shortInfo
            demoLink
            githuLink
            technologies {
              content
            }
            image {
              gatsbyImageData(width: 600, placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  const projects = res.allContentfulProjects.edges
  return (
    <div className="grid gap-3 sm:grid-cols-2 xs:grid-cols-1">
      {projects.map(project => (
        <ProjectCard key={project.node.id} project={project.node} />
      ))}
    </div>
  )
}

export default AllProjects
