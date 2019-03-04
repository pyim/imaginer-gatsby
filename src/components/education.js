import React from 'react'
import Img from 'gatsby-image'
import {StaticQuery, graphql} from 'gatsby'

const getEducation = graphql `
{
    file(
      relativePath :{eq:"education-1.jpg"}
    ){
      childImageSharp{
        fluid {
        ...GatsbyImageSharpFluid_tracedSVG

        }
      }
    }
  }
  `


export default function education() {
  return (
    <div>
      <StaticQuery query={getEducation} render={data => {
          console.log(data)
          return (
<div style={{maxWidth:"500px"}}>
          <Img fluid={data.file.childImageSharp.fluid} />
          </div>
          )
          
      }} />
    </div>
  )
}
