import * as React from 'react'
import { NavLink } from 'react-router-dom'

export default class Page2 extends React.Component {
  public render() {
    return (
      <div style={{ background: '#00dcff', height: 260, width: 600, overflowY: 'auto' }}>
        <h2>Page2 Title</h2>

        <div style={{ marginBottom: 10 }}>
          <NavLink
            activeStyle={{ fontSize: 25, fontWeight: 'bold', color: '#fff700' }}
            style={{ color: '#bf5757' }}
            to="/page2/child1"
          >
            child1
          </NavLink>
          <NavLink
            activeStyle={{ fontSize: 25, fontWeight: 'bold', color: '#fff700' }}
            style={{ marginLeft: 20, color: '#bf5757' }}
            to="/page2/child2"
          >
            child2
          </NavLink>
        </div>

        {this.props.children}
      </div>
    )
  }
}
