'use strict';

var RandomWord = function (min, max) {
    var str = "", max = max || min, arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    max = Math.round(Math.random() * (max - min)) + min;
    for (var i = 0; i < max; i++)
        str += arr[Math.round(Math.random() * (arr.length - 1))];
    return str;
};

var index = {
    // 生成随机字符串
    randomWord: RandomWord
};

module.exports = index;
