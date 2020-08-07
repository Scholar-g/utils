/**
 *
 * @desc 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
function arrayEqual(arr1: [], arr2: []): boolean {
  let a1 = JSON.stringify(arr1.sort())
  let a2 = JSON.stringify(arr2.sort())
  return a1 === a2
}

export default arrayEqual
