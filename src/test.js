
function checkContentAndSubmit (num) {
    // ...action
    console.log(num)
    return function checkContent(content) {
        // ..action
        return function submit (params) {
            // ...action 
            return '发送成功！'
        }
    }
}


// function checkContent () {
//     return submit();
// }

// // submit
// function submit () {
//     return '发送成功'
// }
let num = 1, content = '校验表单填写完整性', params = {};

checkContentAndSubmit(num)(content)(params)

// 深拷贝功能函数
/**
 * 直接赋值引用数据类型，拷贝的只是该数据在内存中的地址
 * 对象 - Array
 * 数组 - Object
 * 函数 - Function
 */

function deepClone () {

}


// call apply bind的区别


