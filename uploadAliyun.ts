/**
 *  上传阿里云函数
 *  @param {Object} params OSS所需参数
 *  @param {Object} file 文件
 *  @param {String} fileName 文件名(文件下载名)
 *  @return {String} 阿里云链接
 *  @author ss
 */
interface Params {
    key: [string,number],
    regionId: [string,number],
    accessKeyId: [string,number],
    accessKeySecret: [string,number],
    securityToken: [string,number],
    bucket: [string,number],
}

const uploadAliyun = (params: Params, file: object, fileName: string): object => {
    return new Promise(function (resolve, reject) {
        let objectName = params.key
        let OSS = require('ali-oss')
        let client = new OSS({
            region: params.regionId,
            accessKeyId: params.accessKeyId,
            accessKeySecret: params.accessKeySecret,
            stsToken: params.securityToken,
            bucket: params.bucket
        })
        client.put(objectName, file, {
            headers: { 'Content-Disposition': 'filename* = UTF-8\'\'' + encodeURIComponent(fileName) }
        }).then(reslute => {
            if (reslute.res.statusCode === 200) {
                resolve(reslute.url)
            } else {
                let errorReason = '上传阿里云失败'
                reject(errorReason)
            }
        })
    })
}

export default uploadAliyun
