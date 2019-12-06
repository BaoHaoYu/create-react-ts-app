import * as React from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { AsyncComponent, IAsyncComponent } from 'src/components/AsyncComponent/AsyncComponent'

export interface IRouteItem extends RouteProps, IAsyncComponent {
  /**
   * 子路由数据
   */
  children?: IRouteItem[]
}

/**
 * 根据IRouteItem生成路由组件
 * @param {} p
 */
function setConfig(p: IRouteItem[]): React.ReactNodeArray {
  // 最为Route的key
  let keyIndex = 0

  // 递归遍历IRouteItem
  function _deep(deepChildren: IRouteItem[]) {
    const _list: any[] = []
    deepChildren.map((item: IRouteItem) => {
      keyIndex = keyIndex + 1
      _list.push(
        <Route
          path={item.path}
          exact={item.exact}
          sensitive={item.sensitive}
          strict={item.strict}
          location={item.location}
          render={item.render}
          key={keyIndex.toString()}
          component={item.component}
        >
          {item.load && (
            <AsyncComponent load={item.load} children={item.children && _deep(item.children)} />
          )}
        </Route>
      )
    })
    return _list
  }

  return _deep(p)
}

export default setConfig
