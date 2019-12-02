/**
 * 生成固定格式的meta
 * @param use 作用
 * @param from 来自哪里
 */
export function meta(use: string, from?: string) {
  return `use: ${use}  from: ${from}`
}
