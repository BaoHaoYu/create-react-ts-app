import { applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middle = [thunk, logger]
let compose1: any
// @ts-ignore
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  // @ts-ignore
  compose1 = compose(applyMiddleware(...middle), window.__REDUX_DEVTOOLS_EXTENSION__())
} else {
  compose1 = compose(applyMiddleware(...middle))
}

export default compose1
