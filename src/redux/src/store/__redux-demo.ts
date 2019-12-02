import { fromJS, Map } from 'immutable'
import { handleActions } from 'redux-actions'
import { meta } from './help'
import { addReducer } from './store'

const key = '__Demo'
const reducerKey = 'demoRedcuer' + key
const types = {
  add: 'add' + key,
  del: 'del' + key,
}

export const add = (fromMeta?: string) => {
  return {
    type: types.add,
    payload: {},
    meta: meta('删除', fromMeta),
  }
}

/**
 * 通过redux-thunk派发action
 */
export const del = (fromMeta?: string) => (getState: any, dispath: any) => {
  dispath({
    type: types.del,
    payload: {},
    meta: meta('删除', fromMeta),
  })
}

const defaultData = fromJS({})

const reducer = handleActions(
  {
    [types.add]: (state: Map<any, any>, { payload }) => {
      return state.update('count', (v) => v + payload.number)
    },
    [types.del]: (state: Map<any, any>, { payload }) => {
      return state.update('count', (v) => v - payload.number)
    },
  },
  defaultData
)

addReducer(reducerKey, reducer)
