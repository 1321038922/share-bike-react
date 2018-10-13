// var p = /\s/;
// var str = ' ab '
// var res = p.test(str);
// console.log(res)

// var p = /\w/

// var str = ' _ '
// var res = p.test(str)

// console.log(res)

// var p = /^0/
// var s = '001100'

// var res = p.test(s)

// console.log(res)

var p = /\d{3,5}/

var s = '3306666'
var r = p.test(s)
console.log(r)


// var p = /[^123]/
// let s = '456789'
// let r = p.test(s)
// console.log(r)

// var p = /^1[3-8]\d{9}$/
// var s = '13221315555'
// var r = p.test(s)
// console.log(r)

// let p = /^\d{6}[1-2]\d{3}[0-1]\d[0-3]\d{4}[\d|X]$/;
// var s = ''
// let r = p.test(s)
// console.log(r)

// let p = /\w+@[0-9a-zA-Z]{2,}\.[a-zA-Z]{2,}$/
// let s = '1321038922@qq.com'     
// let r = p.test(s)
// console.log(r)     

// let p = /a/g;

// let s = "asdasdasd"

// var res = p.exec(s)
// console.log(res)
// var res = p.exec(s)
// console.log(res)
// var res = p.exec(s)
// console.log(res)

// var p = /[1-9]\d*/g
// var s = "var p = /[1-9]\d*/g"

// var res;
// while(res = p.exec(s)){
//   console.log(res)
// }