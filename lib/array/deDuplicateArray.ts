/**
 * 根据数组中某个对象值去重
 * @param {Array} arr 数组
 * @param {String} key 对象中字段名
 * @return {Array} 去重后的数组
 * @author ss
 */
function deDuplicateArray(arr: any[], key: string): any[] {
    let res = new Map()
    return arr.filter(item => !res.has(item[key]) && res.set(item[key], 1))
}

export default deDuplicateArray
