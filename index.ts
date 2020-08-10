// 生成随机字符串
import randomWord from './lib/randomWord'
// md5加密
import md5 from './lib/md5'
// sha1加密
import sha1 from './lib/sha1'
// cookie操作
import jsCookie from './lib/jsCookie'
// 获取路由参数
import getQueryString from './lib/getQueryString'
// 汉字转拼音
import vPinyin from './lib/vPinyin/vPinyin'
// 深拷贝
import deepClone from './lib/deepClone'
// 设备信息
import os from './lib/deviceInfo/deviceInfo'
// 数组函数
import arrFun from './lib/array/array'
// 文件流下载
import dowloadFileStream from './lib/dowloadFileStream'
// 阿里云上传
import uploadAliyun from './lib/uploadAliyun'

export default {
    randomWord,
    md5,
    sha1,
    jsCookie,
    getQueryString,
    vPinyin,
    deepClone,
    os,
    arrFun,
    dowloadFileStream,
    uploadAliyun
}
