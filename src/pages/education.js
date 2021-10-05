import React from "react"
import AllEducation from "../Components/AllEducation"
import Footer from "../Components/Footer"
import Head from "../Components/Head"
import Layout from "../Components/Layout"
import PageHeader from "../Components/PageHeader"

export default function About() {
  return (
    <>
      <Head
        title="Vimal Galani | Education"
        description="I'm a Software development aspirant with a keen interest in
              full-stack development, DevOps and Cloud Computing"
      />
      <Layout>
        <div className="h-full">
          <div className="py-4 max-w-5xl mx-auto w-11/12 pb-5">
            <PageHeader
              title="Education"
              subTitle="I have been receiving knowledge from renowned institutes throughout my career and have gained not only technical knowledge but also many life lessons from the following institutes."
            />
            <AllEducation />
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  )
}
