import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg shadow-sm bg-white flex flex-col gap-y-2">
      <GatsbyImage
        image={project.image.gatsbyImageData}
        alt={project.title}
        className="cursor-pointer"
      />
      <div className="flex flex-col gap-y-2 px-2">
        <p className="heading5 bold">{project.title}</p>
        <p className="paragraph3">{project.shortInfo}</p>
      </div>
      <div className="px-2">
        <p className="mb-2 paragraph1 bold">Tech-Stack:</p>
        {project.technologies.map(tech => (
          <span className="mr-2 px-3 py-2 paragraph2 light bg-lightGray text-darkGray rounded inline-block mb-1 rounded-full text-center">
            {tech.content}
          </span>
        ))}
      </div>
      <div className="flex gap-x-2 px-2 mb-3">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noreferrer"
          className="bg-yellow-500 text-black px-2 py-1 text-center paragraph 1 rounded hover:bg-yellow-700 regular cursor-pointer"
        >
          Demo
        </a>
        <a
          href={project.githuLink}
          target="_blank"
          rel="noreferrer"
          className="bg-yellow-500 text-black px-2 py-1 text-center paragraph 1 rounded hover:bg-yellow-700 regular cursor-pointer"
        >
          Code
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
