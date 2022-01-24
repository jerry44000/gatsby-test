const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve('./src/templates/project-details.js')
    const res = await graphql(`
    query Article {
        allMarkdownRemark {
          
            nodes {
              frontmatter {
                slug
              }
            }
          
        }
      }`)

    res.data.allMarkdownRemark.nodes.forEach( node => {
        createPage({
            component: projectTemplate,
            path: `/projects/${node.frontmatter.slug}`,
            context: {
                slug: node.frontmatter.slug,
            }
        })
        
    });

}



// const path = require(`path`)

// exports.createPages = async ({ graphql, actions }) => {

//   const { data } = await graphql(`
//     query Articles {
//       allMarkdownRemark {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   data.allMarkdownRemark.nodes.forEach(node => {
//     actions.createPage({
//       path: '/projects/'+ node.frontmatter.slug,
//       component: path.resolve('./src/templates/project-details.js'),
//       context: { slug: node.frontmatter.slug }
//     })
//   })

// }