import React from "react"
import Head from "../Components/Head"
import Layout from "../Components/Layout"
import PageHeader from "../Components/PageHeader"

export default function Skills() {
  return (
    <>
      <Head
        title="Vimal Galani | Skills"
        description="I'm a Software development aspirant with a keen interest in
              full-stack development, DevOps and Cloud Computing"
      />
      <Layout>
        <div className="h-full">
          <div className="py-4 max-w-5xl mx-auto w-11/12 pb-5">
            <PageHeader
              title="Skills"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor rutrum eros, eget hendrerit dolor condimentum vel. Aenean ante ipsum, vulputate eu magna at, interdum scelerisque augue. Aliquam erat volutpat. Fusce nunc ante, imperdiet et justo sed, feugiat luctus felis. Cras nec augue eu metus porta malesuada. Donec vestibulum eu nunc a semper. Nulla at ultricies nulla, vel ornare erat."
            />
          </div>
        </div>
      </Layout>
    </>
  )
}
