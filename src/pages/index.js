import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  console.log(data)
  const image = getImage(data.file.childImageSharp.gatsbyImageData)
  
  return (
    <Layout>
    <section className={styles.header}>
    <div>
      <h2>Gatsby</h2>
      <h3>Develop & Deploy</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, vero.</p>
      <Link className={styles.btn} to='/project'>My Portfolio Project</Link>
    </div>
    <GatsbyImage image={image} alt="Banner" />
    </section>
    </Layout>
  )
}

export const query = graphql`
query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        placeholder: BLURRED
        formats: [AUTO, WEBP]
        )
    }
  }
}`
 