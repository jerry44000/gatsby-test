import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from '../styles/project-details.module.css'

function ProjectDetails({ data }) {
    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  
    return (
    <Layout>
        <div className={styles.details}>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className={styles.featured}>
            <GatsbyImage image={getImage(featuredImg.childImageSharp.gatsbyImageData)} alt="Projects" />
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }}/>
        </div>
    </Layout>
  )
}
export const query = graphql`
    query ProjectsPage($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                stack
                title
                featuredImg {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;

export default ProjectDetails;
