import React from "react"
import AllInterships from "../Components/AllInterships"
import Footer from "../Components/Footer"
import Head from "../Components/Head"
import Layout from "../Components/Layout"
import PageHeader from "../Components/PageHeader"

export default function Experience() {
  return (
    <>
      <Head
        title="Vimal Galani | Experience"
        description="I'm a Software development aspirant with a keen interest in
              full-stack development, DevOps and Cloud Computing"
      />
      <Layout>
        <div className="h-full">
          <div className="py-4 max-w-5xl mx-auto w-11/12 pb-5">
            <PageHeader
              title="Experience"
              subTitle="I have been gaining experience from all the opportunities I come across. This has helped me to grow and showcase my skills."
            />
            <AllInterships />
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  )
}
