# 自制不完整的脚手架

## 运行

第一步

```bash
npm install create-react-ts-app -g
```

第二步

```bash
create-react-ts-app
```

## 使用 react-router

在`src/App/App.tsx`引用`src/router/RouterRoot.tsx`组件

```tsx
import RouterRoot from 'src/router/RouterRoot'

function Main() {
  return (
    <RouterRoot />
  )
```

## 使用 redux

在`src/App/App.tsx`引用`src/store/Redux.tsx`组件

```tsx
import ReduxRoot from 'src/store/ReduxRoot'
function Main() {
  return (
    <ReduxRoot>
      <div></div>
    </ReduxRoot>
  )
```
