import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Head from "../Components/Head"
import Layout from "../Components/Layout"

export default function Home() {
  return (
    <>
      <Head
        title="Vimal Galani"
        description="I'm a Software development aspirant with a keen interest in
              full-stack development, DevOps and Cloud Computing"
      />
      <Layout>
        <div className="bg-blue-900 h-full">
          <div className="grid md:grid-cols-2 md:gap-x-16 xs:grid-cols-1 items-center text-white h-full max-w-5xl mx-auto w-11/12 pb-5">
            <div className="xs:flex xs:flex-col xs:items-center md:block">
              <StaticImage
                src="../images/Vimal-1.jpg"
                className="rounded-full md:hidden xs:block z-0 w-80"
              />
              <p className="heading2 bold md:text-left xs:text-center">
                I'm Vimal Galani
              </p>
              <p className="mb-7 heading6 md:text-left xs:text-center">
                I'm a Software development aspirant with a keen interest in
                full-stack development, DevOps and Cloud Computing
              </p>
              <div></div>
              <Link
                to="/projects"
                className="bg-yellow-500 text-black px-4 py-2 text-center paragraph 1 rounded hover:bg-yellow-700 regular"
              >
                View Projects
              </Link>
            </div>
            <div className="md:block xs:hidden">
              <StaticImage
                src="../images/Vimal-1.jpg"
                className="rounded-full  border-4 border-white"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
