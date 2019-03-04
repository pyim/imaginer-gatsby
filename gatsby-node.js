const path = require('path')
exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions

    return graphql(`
        {allContentfulActualite
            {
              edges{
                node {
                  id
                  titre
                  slug
                }
              }
            }
         }
    `).then(result => {
        result.data.allContentfulActualite.edges.forEach(({node}) => {
            createPage({
            path:`listearticles/${node.slug}`,
            component: path.resolve
            (`./src/templates/actualite-template.js`),
            context:{
                id:node.id,
            },
        })
      }) 
    })
    .catch(err => console.log(err))
}

