import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

function Navbar() {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }`)
    console.log(data)

  return (
        <nav>
            <h1>{data.site.siteMetadata.title}</h1>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/project'>Portfolio Projects</Link>
            </div>

        </nav>
    )
}

export default Navbar
