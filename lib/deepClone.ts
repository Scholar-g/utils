/**
 *
 * @desc 深度克隆数组或者对象
 * @param {Array, Object}
 * @return {Array, Object}
 */
function deepClone(val: any): any {
  let result = JSON.parse(JSON.stringify(val))
  return result
}

export default deepClone
