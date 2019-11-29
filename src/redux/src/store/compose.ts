import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import log from 'src/app/util/middleware/log'

const middle = [thunk, log]
let compose1: any
// @ts-ignore
if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  // @ts-ignore
  compose1 = compose(
    applyMiddleware(...middle),
    window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
} else {
  compose1 = compose(applyMiddleware(...middle))
}

export default compose1
