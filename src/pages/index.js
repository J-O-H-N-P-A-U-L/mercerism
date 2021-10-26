import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Mercerism.</p>
      <StaticImage
        alt="mercer"
        src="../images/mercerism.jpg"
      />
    </Layout>
  )
}

export default IndexPage