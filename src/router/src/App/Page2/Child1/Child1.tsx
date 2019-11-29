import * as React from 'react'
import { NavLink } from 'react-router-dom'

export default function Child1(p: any) {
  return (
    <div>
      <h4>Page2 Child1 content</h4>

      <NavLink
        activeStyle={{ fontSize: 25, fontWeight: 'bold', color: '#fff700' }}
        style={{ color: '#bf5757' }}
        to="/page2/child1/food"
      >
        food
      </NavLink>
      {p.children}
    </div>
  )
}
