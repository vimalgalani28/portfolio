import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const InternCard = ({ experience }) => {
  return (
    <div className="flex items-center gap-y-2 md:flex-row xs:flex-col p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 bg-white">
      <GatsbyImage
        image={experience.logo.gatsbyImageData}
        alt={experience.company}
      />
      <div id="body" className="flex flex-col ml-5 flex-1">
        <div className="flex sm:flex-row xs:flex-col xs:items-start sm:items-center justify-between">
          <p className="semi-bold">{experience.company}</p>
          <p>
            {experience.startDate} - {experience.endDate}
          </p>
        </div>
        <p className="h-px bg-gray-300 w-full mt-3 mb-3"></p>
        <p className="heading5 bold mb-2">{experience.role}</p>
        <p className="mb-3 paragraph2">{experience.work}</p>
        <p className="heading5 bold mb-1">Technologies Used:</p>
        <div>
          {experience.technologies.map((technology, index) => (
            <GatsbyImage
              image={technology.gatsbyImageData}
              alt="technology"
              className="inline-block mr-2 cursor-pointer"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default InternCard
