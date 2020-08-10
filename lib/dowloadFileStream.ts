/**
 * 请求导出文件流处理返回的文件流进行下载
 * @param {String} downloadUrl 文件导出接口地址
 * @param {Object} params 文件导出接口参数
 * @return {String} fileName 下载文件名
 * @author ss
 */
const axios = require('axios')
const instance = axios.create({
    timeout: 300000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data, headers) {
        let ret = ''
        for (let it in data) {
            if (data[it] !== null && data[it] !== undefined) {
                if (ret !== '') ret += '&'
                if (data[it] instanceof Array && !data[it][0]) data[it] = '[]'
                if (data[it] instanceof Array && data[it][0]) {
                    ret += encodeURIComponent(it) + '=' + JSON.stringify(data[it])
                } else if (data[it].constructor === Object) {
                    ret += encodeURIComponent(it) + '=' + JSON.stringify(data[it])
                } else {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it])
                }
            }
        }
        return ret
    }],
    // withCredentials: process.env.NODE_ENV === 'production'
})
const dowloadFileStream = (downloadUrl: string, params: object, fileName?: string, timeout?: number): object => {
    return new Promise(function (resolve, reject) {
        instance.post(downloadUrl, params, { responseType: 'arraybuffer', timeout }).then(res => {
            try {
                let isAttachment = decodeURI(res.headers['content-disposition'])
                if (isAttachment.indexOf('attachment') !== -1) {
                    let blob = new Blob([res.data], { type: 'application/vnd.ms-excel' })
                    let a = document.createElement('a')
                    fileName && (a.download = fileName)
                    a.href = URL.createObjectURL(blob)
                    a.click()
                    resolve('下载成功')
                } else {
                    try {
                        let blob = new Blob([new Uint16Array(res.data)])
                        let reader = new FileReader()
                        reader.readAsText(blob, 'utf-8')
                        reader.onload = function (e) {
                            // @ts-ignore: Unreachable code error
                            let resData = JSON.parse(reader.result)
                            reject(resData.message || '导出失败')
                        }
                    } catch (error) {
                        instance.post(downloadUrl, params).then(res => {
                            let message = '导出失败'
                            if (res && res.data && res.data.message) {
                                message = res.data.message
                            }
                            reject(message)
                        }).catch(err => {
                            reject(err || '请求失败')
                        })
                    }
                }
            } catch (error) {
                reject(error || '导出文件失败')
            }
        }).catch(err => {
            reject(err || '请求失败')
        })
    })
}

export default dowloadFileStream
