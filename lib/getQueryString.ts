/**
 * 获取路由参数
 * @param {} name 路由参数名
 */
interface Func {
    (name: string): string;
}

const getQueryString:Func = function (name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let r = window.location.href.split('?')[1].match(reg)
    if (r != null) return unescape(r[2]); return null
}

export default getQueryString
