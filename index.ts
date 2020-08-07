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
import vPinyin from './lib/turnPinyin/index'
// 上传阿里云
import uploadAliyun from './lib/uploadAliyun'
// 文件流下载
import dowloadFileStream from './lib/dowloadFileStream'
// 手机系统环境信息
import ua from './lib/deviceInfo'
// 深拷贝
import deepClone from './lib/deepClone'
// 数组函数
import arrFun from './lib/array'

export default {
    randomWord,
    md5,
    sha1,
    jsCookie,
    getQueryString,
    vPinyin,
    uploadAliyun,
    dowloadFileStream,
    ua,
    deepClone,
    arrFun
}
