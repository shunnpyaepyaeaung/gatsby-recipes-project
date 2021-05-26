import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/Layout"

const history = () => {
  return (
    <Layout>
      <h1>History Page</h1>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export default history
