import React, { Component } from 'react'
import { Link } from "react-router-dom"
class searchpop extends Component {
  render() {
    return (
        <div>
      <div className="searchpoup">
      <Link to="/" onClick={this.props.onClick} >X</Link>
        <p>Search</p>
      </div>
      </div>
    )
  }
}
export default searchpop