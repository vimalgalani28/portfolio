import React from "react"

const PageHeader = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center mb-6 gap-y-5">
      <div className="flex flex-col">
        <p className="heading4 bold">{title}</p>
        <p className="w-full bg-yellow-500 h-1"></p>
      </div>
      <p className="text-center paragraph1">{subTitle}</p>
    </div>
  )
}

export default PageHeader
