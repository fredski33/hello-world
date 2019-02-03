import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `teal` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact him & kick his ass!" />
    <p>Send us a message or go fuck yourself!</p>
  </div>
)