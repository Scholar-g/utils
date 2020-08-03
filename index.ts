// 生成随机字符串
import RandomWord from './lib/randomWord'
// md5加密
import md5 from './lib/md5'
// sha1加密
import sha1 from './lib/sha1'
// cookie操作
import jsCookie from './lib/jsCookie'
// 获取路由参数
import getQueryString from './lib/getQueryString'
// 汉字转拼音
import vPinyin from './lib/vPinyin'

export default {
    randomWord: RandomWord,
    md5: md5,
    sha1: sha1,
    jsCookie: jsCookie,
    getQueryString: getQueryString,
    vPinyin: vPinyin
}
