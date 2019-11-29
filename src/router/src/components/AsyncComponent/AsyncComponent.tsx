import * as React from 'react'

/**
 * 异步方法加载组件
 */
type loadAsync = () => Promise<{ default: React.ComponentType<any> }>

export interface IAsyncComponent {
  /**
   * 加载函数或者页面组件
   */
  load: loadAsync | React.ComponentType<any>
  /**
   * 子路由
   */
  children?: any
}

/**
 * 异步加载页面组件
 * @param {IAsyncComponent} p
 */
export default function asyncComponent(load: loadAsync | React.ComponentType<any>, children?: any) {
  const PageComponent = React.lazy(load as loadAsync)

  const AsyncComponent = () => {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <PageComponent>{children}</PageComponent>
      </React.Suspense>
    )
  }
  return AsyncComponent
}
