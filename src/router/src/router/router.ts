import * as chunk from './chunk'
import setConfig from './setConfig'

export default setConfig([
  {
    path: '/page1',
    load: chunk.Page1,
    children: [
      {
        path: '/page1/child1',
        load: chunk.Page1Child1,
      },
      {
        path: '/page1/child2',
        load: chunk.Page1Child2,
      },
    ],
  },
  {
    path: '/page2',
    load: chunk.Page2,
    children: [
      {
        path: '/page2/child1',
        load: chunk.Page2Child1,
        children: [
          {
            path: '/page2/child1/food',
            load: chunk.Page2Child1Food,
          },
        ],
      },
      {
        path: '/page2/child2',
        load: chunk.Page2Child2,
      },
    ],
  },
])
