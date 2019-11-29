import * as React from 'react'
import { HashRouter, NavLink } from 'react-router-dom'
import router from 'src/router/router'

export default function RouterRoot() {
  return (
    <HashRouter>
      <div style={{ background: '#00dcff', height: 260, width: 600 }}>
        <div style={{ marginBottom: 10 }}>
          <NavLink
            activeStyle={{ fontSize: 25, fontWeight: 'bold', color: '#fff700' }}
            style={{ color: '#09d3ac' }}
            to="/page1"
          >
            page1
          </NavLink>
          <NavLink
            activeStyle={{ fontSize: 25, fontWeight: 'bold', color: '#fff700' }}
            style={{ marginLeft: 20, color: '#09d3ac' }}
            to="/page2"
          >
            page2
          </NavLink>
        </div>

        {router}
      </div>
    </HashRouter>
  )
}
