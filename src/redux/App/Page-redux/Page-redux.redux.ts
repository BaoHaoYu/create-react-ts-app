import { handleActions } from 'redux-actions'
import { meta } from 'src/store/help'
import { addReducer } from 'src/store/store'

const key = '__Demo'
const reducerKey = 'demoRedcuer' + key
const types = {
  add: 'add' + key,
  del: 'del' + key,
}

export const add = (fromMeta?: string) => {
  return {
    type: types.add,
    payload: { number: 1 },
    meta: meta('增加', fromMeta),
  }
}

/**
 * 通过redux-thunk派发action
 */
export const del = (fromMeta?: string) => (dispath: any, getState: any) => {
  dispath({
    type: types.del,
    payload: { number: 1 },
    meta: meta('减少', fromMeta),
  })
}

export interface IState {
  count: number
}

const defaultData = {
  count: 0,
}

const reducer = handleActions(
  {
    [types.add]: (state, { payload }) => {
      const s = { ...state }
      s.count = s.count + 1
      return s
    },
    [types.del]: (state, { payload }) => {
      const s = { ...state }
      s.count = s.count - 1
      return s
    },
  },
  defaultData
)

addReducer(reducerKey, reducer)
