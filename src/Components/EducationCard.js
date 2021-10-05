import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const EducationCard = ({ education }) => {
  return (
    <div className="flex items-center gap-y-2 md:flex-row md:gap-x-4 xs:flex-col p-4 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 bg-white">
      <GatsbyImage
        image={education.logo.gatsbyImageData}
        alt={education.institute}
      />
      <div id="body" className="flex flex-col ml-5 flex-1">
        <div className="flex sm:flex-row xs:flex-col xs:items-start sm:items-center justify-between">
          <p className="semi-bold">{education.institute}</p>
          <p>
            {education.startDate} - {education.endDate}
          </p>
        </div>
        <p className="h-px bg-gray-300 w-full mt-3 mb-3"></p>
        <p className="heading5 bold mb-2">{education.status}</p>
        <p className="mb-5 paragraph2">{education.score}</p>
        <div>
          <a
            href={education.website}
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-500 text-black px-2 py-2 text-center paragraph 1 rounded hover:bg-yellow-700 regular"
          >
            Visit College Website
          </a>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
