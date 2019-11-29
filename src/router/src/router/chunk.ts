export function Page1() {
  return import(/* webpackChunkName: "App/Page1/Page1" */ '../App/Page1/Page1')
}
export function Page2() {
  return import(/* webpackChunkName: "App/Page2/Page2" */ '../App/Page2/Page2')
}
export function Page1Child1() {
  return import(/* webpackChunkName: "App/Page1/Child1/Child1" */ '../App/Page1/Child1/Child1')
}
export function Page1Child2() {
  return import(/* webpackChunkName: "App/Page1/Child2/Child2" */ '../App/Page1/Child2/Child2')
}
export function Page2Child1() {
  return import(/* webpackChunkName: "App/Page2/Child1/Child1" */ '../App/Page2/Child1/Child1')
}
export function Page2Child1Food() {
  return import(
    /* webpackChunkName: "App/Page2/Child1/Food/Food" */ '../App/Page2/Child1/Food/Food'
  )
}
export function Page2Child2() {
  return import(/* webpackChunkName: "App/Page2/Child2/Child2" */ '../App/Page2/Child2/Child2')
}
