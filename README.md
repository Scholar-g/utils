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
## 上传阿里云
uploadAliyun
## 文件流下载
dowloadFileStream
```

# 安装使用
```
## 安装依赖
npm i || yarn || cnpm utilsgrow
## 引入使用
import { randomWord, md5, sha1, jsCookie, vPinyin, getQueryString } from 'utilsgrow'
RandomWord(min, max) 生成随机长度min至max之间的随机字符串
RandomWord(min) 生成长度min的随机字符串
md5(string) 使用同md5
sha1.sha1(string) 使用同sha1
jsCookie 使用同‘js-cookie’
vPinyin.chineseToPinYin('中文') 汉字转拼音
getQueryString(name) 取名为name的路由链接参数
uploadAliyun(params: object, file: object, fileName: string) params阿里云所需参数(此参数由自定义后端接口返回)，file文件，fileName下载文件名
dowloadFileStream(downloadUrl: string, params: object, fileName?: string, timeout?: number) downloadUrl下载请求接口地址，params下载请求所需参数，fileName下载文件名，timeout超时时长
```
#更新记录
```
utilsgrow@0.5.5 增加上传阿里云、文件流下载
utilsgrow@0.5.3 增加设备信息获取、深拷贝、数组函数
utilsgrow@0.5.0 增加上传阿里云和文件流下载
utilsgrow@0.4.2 测试版本内容回退到0.4.1
utilsgrow@0.4.1 稳定可用版
utilsgrow@0.4.0
utilsgrow@0.3.0
utilsgrow@0.2.0
utilsgrow@0.0.2
utilsgrow@0.0.1
```
#issuse
```
有问题欢迎骚扰qq：762013545
```
