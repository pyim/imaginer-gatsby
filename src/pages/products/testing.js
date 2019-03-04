import React from 'react'
import Layout from "../../components/layout"
import {Link} from "gatsby"

export default function testing() {
  return (
    <Layout>
      <h1>Bonjour de la page test</h1>
      <Link to="/">Go to homepage</Link>

    </Layout>
  )
}
