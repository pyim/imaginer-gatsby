import React from 'react'
import Layout from '../components/layout'
import {graphql,Link} from 'gatsby'
import Img from 'gatsby-image'
export default function ({data}) {
    const {titre} = data.contentfulActualite;
    const {description} = data.contentfulActualite.description
    const {fluid} = data.contentfulActualite.image
    
    return (
        <Layout>
            <h1>Page d'actualité</h1>
            <Img fluid={fluid} />
            <h1>{titre}</h1>
            <p>{description}</p>
            <Link to="/listearticles/">
                <h2>retour aux produits</h2>
            </Link>

        </Layout>
    )
}

export const query = graphql`
query($id:String!){
    contentfulActualite(id: {eq: $id }) {
      titre
      description {
        description
      }
      image {
          fluid {
              ...GatsbyContentfulFluid_tracedSVG
          }
      }
    }
  }
`