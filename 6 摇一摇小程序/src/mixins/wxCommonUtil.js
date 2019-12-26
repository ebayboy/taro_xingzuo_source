import wepy from 'wepy'
// 用于wx中封装请求和用户日志等必使用的内容
export default class wxCommonUtil extends wepy.mixin {
// 检测手机
  checkPhone(phone) {
    // console.log(phone)
    // 手机号正则
    let phoneReg = /(^1[2|3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/
    // 电话
    if (!phoneReg.test(phone)) {
      return false
    } else {
      return true
    }
  }
}
