import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export default function images({data}) {
  const images = data.allFile.edges
  return (
    <Layout>
<h1>Page image</h1>
<p>{data.allFile.edges[0].node.relativePath}</p>
{images.map(({node}) => {
    return <h3>{node.relativePath}</h3>
})}
    </Layout>
  )
}

export const query = graphql`
{
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }  
`