import { combineReducers, createStore } from 'redux'
import compose from './compose'

const storeObj = {}

const store = createStore(combineReducers({}), compose)

/**
 * 动态添加reducer
 * @param name reducer的键名
 * @param reducer reducer函数
 */
function addReducer(name: string, reducer: any) {
  storeObj[name] = reducer
  store.replaceReducer(combineReducers(storeObj))
}

export { addReducer }

export default store
