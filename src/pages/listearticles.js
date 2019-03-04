import React from 'react'
import Layout from '../components/layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
export default function listeArticles({ data }) {
  
  return (
    <Layout>
      <Link to='/'>Retour page accueil</Link>
    <h1>Bonjour</h1>
    { data.listeActualites.edges.map(({node:actualite})=> {
      return (
        <div key={actualite.id} style={{padding:'1rem', color:'#ff0000'}}>
        <Img fixed={actualite.image.fixed} />
        <h3 style={{ color: "#ff0000"}}>
         {actualite.title}
        </h3>
        <p>
          {actualite.description.description}
        </p>
        <p>
        {actualite.slug}
        </p>
        <Link to ={`/listearticles/${actualite.slug}`}><h2>
          Details 
        </h2>
        </Link>
        </div>
      )
    }) }
    </Layout>
  )
}

export const query = graphql `
{
  listeActualites : allContentfulActualite(
    limit: 3, sort: { fields: [date], order: DESC }
  ) {
    edges {
      node {
        titre
        slug
        date
        description {
          description 
        }
        image {
          fixed(width:300) {
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`