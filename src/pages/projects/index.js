import React from "react"
import AllProjects from "../../Components/AllProjects"
import Footer from "../../Components/Footer"
import Head from "../../Components/Head"
import Layout from "../../Components/Layout"
import PageHeader from "../../Components/PageHeader"

export default function Projects() {
  return (
    <>
      <Head
        title="Vimal Galani | Projects"
        description="I'm a Software development aspirant with a keen interest in
              full-stack development, DevOps and Cloud Computing"
      />
      <Layout>
        <div className="h-full">
          <div className="py-4 max-w-5xl mx-auto w-11/12 pb-5">
            <PageHeader
              title="Projects"
              subTitle="Outside of work, I enjoy building simple tools & products as an excuse to continue my passion in coding & learning new technology. Here are some of the projects I've launched so far."
            />
            <AllProjects />
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  )
}
