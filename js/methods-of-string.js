// 总结一些常用的数组方法
var testStr = "testStr";
var testStr1 = "testStr1";
var testStr2 = "testStr2";

// concat连接一个或多个字符串，返回一个新的字符串
// 不影响原字符串
var retStr = testStr.concat(testtStr1, testtStr2);

// endWith判断当前字符串是否以另外一个给定的子字符串结尾，返回布尔值
// 参数2是可选的，str的长度，默认值str.length
var boolRet = testStr.endWith("Str"); // true 

// includes判断是否包含一个字符串，返回布尔值
var boolRet1 = testStr.includes("text"); // false

// match检索返回一个字符串匹配正则表达式的结果
var msg = "For more information, see Chapter 3.4.5.1";
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);
console.log(found);

// slice提取字符串的一部分并返回一新的字符串
// str.slice(1, 4);
// str.slice(2, -1);
// str.slice(2);

// split分隔符将字符串分割成数组，返回一个数组