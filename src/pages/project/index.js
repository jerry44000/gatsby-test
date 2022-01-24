import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

function Project({ data }) {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
    
    return (
        <Layout>
        <div className={styles.portfolio}>
            <h2>Portfolio</h2>
            <h3>Projects and Websites i've created</h3>
            <div className={styles.projects}>
                {projects.map(project => (
                  <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                      <div>
                      <GatsbyImage className={styles.img} image={getImage(project.frontmatter.thumb.childImageSharp.gatsbyImageData)} alt="Banner" />
                          <h3>{ project.frontmatter.title }</h3>
                          <p>{ project.frontmatter.stack }</p>
                      </div>
                  </Link> 
                ))}
            </div>
            <p>Like what you see? Email at { contact }</p>
        </div>
        </Layout>
    )
}

// export page query

export const query = graphql`
    query ProjectPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
        frontmatter {
            title
            stack
            slug
            thumb {
            childImageSharp {
                gatsbyImageData(
                    layout: FULL_WIDTH
                    placeholder: BLURRED
                    formats: [AUTO, WEBP]
                )
            }
            }
        }
        id
        }
    }
    contact: site {
        siteMetadata {
        contact
        }
    }
    }`

export default Project
