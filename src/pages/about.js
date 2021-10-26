import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
    return (
        <Layout pageTitle="Home Page">
          <p>Mercer.</p>
          <StaticImage
            alt="mercer"
            src="../images/mercer.jpg"
          />
        </Layout>
      )
}

export default AboutPage