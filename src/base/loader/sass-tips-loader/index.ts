import { JSONSchema4 } from 'json-schema'
import { getOptions } from 'loader-utils'
import validateOptions from 'schema-utils'
import tipsCss from './tipsCss'

const schema: JSONSchema4 = {
  type: 'object',
  properties: {
    active: {
      type: 'boolean',
    },
  },
}

/**
 * 清除提示
 */
export default function(source: string) {
  // @ts-ignore
  const options = getOptions(this)

  validateOptions(schema, options || { active: false }, {
    name: 'sass-tips Loader',
  })

  if (process.env.NODE_ENV === 'production') {
    // source = source + `\n/* ${tipsCss} */\n`
    source = source.replace(/tipsStart(.|\n)+tipsEnd/, '')
  }

  return source
}
