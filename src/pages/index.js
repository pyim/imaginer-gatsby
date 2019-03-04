import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Info from "../components/info"
import Image from "../components/image"
import SEO from "../components/seo"
import {Button} from "../components/Button"
import {FaAngellist} from "react-icons/fa"
import Education from '../components/education'

const IndexPage = () => (
  <Layout>
    <Info />
    <Link to="/images/">page images</Link>
    <Link to="/listearticles/">Nouvels articles</Link>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Bonjour <FaAngellist className="icon"/></h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Button>Lire la suite</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing">Go to testing page</Link>
    <Education />
  
  </Layout>
)

export default IndexPage
