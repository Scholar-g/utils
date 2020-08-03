# utils grow
不断新增工具的工具函数库

# 功能简述
```
包含以下方法
## 生成随机字符串
RandomWord
## md5加密
md5
## sha1加密
sha1
## cookie操作
jsCookie
## 获取路由参数
getQueryString
## 汉字转拼音
vPinyin
```

# 安装使用
```
## 安装依赖
npm i || yarn || cnpm utilsgrow
## 引入使用
import { randomWord, md5, sha1, jsCookie, vPinyin } from 'utilsgrow'
RandomWord(min, max) 生成随机长度min至max之间的随机字符串
RandomWord(min) 生成长度min的随机字符串
md5(string) 使用同md5
sha1(string) 使用同sha1
jsCookie 使用同‘js-cookie’
getQueryString(name) 取名为name的路由链接参数
```
