import * as React from 'react'
import { hot } from 'react-hot-loader'
// @ts-ignore
import logo from '../logo.svg'
// @ts-ignore
import css from './App.scss'
import RouterRoot from '../router/RouterRoot'

function Main() {
  return (
    <div className={css.App}>
      <header className={css.App__header}>
        <img src={logo} className={css.App__logo} alt="logo" />
        <p>
          Edit <code>src/App/App.tsx</code> and save to reload.
        </p>
        <a
          className={css.App__link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <RouterRoot />
      </header>
    </div>
  )
}

export default hot(module)(Main)
