import * as React from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default function(props: any) {
  return <Provider store={store}>{props.children}</Provider>
}
