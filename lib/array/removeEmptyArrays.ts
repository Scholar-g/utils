/**
 * 传入两层数组[[],[开始时间, 结束时间],[]],去除数组中空数组
 * @param {Array} arr 嵌套数组
 * @return {Array} [[开始时间, 结束时间]]
 * @author ss
 */
function removeEmptyArrays(arr: []): any[] {
    let newArr = []
    if (arr && arr.length > 0) {
        newArr = arr.filter(item => {
            return JSON.stringify([]) !== '[]'
        })
    }
    return newArr
}

export default removeEmptyArrays
