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

// 新增随机方法获取随机数
  randomNum(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  }
  //
  subString1(str, len) {
    let regexp = /[^\x00-\xff]/g// 正在表达式匹配中文
    // 当字符串字节长度小于指定的字节长度时
    if (str.replace(regexp, "aa").length <= len) {
      return str
    }
    // 假设指定长度内都是中文
    let m = Math.floor(len / 2)
    for (let i = m, j = str.length; i < j; i++) {
      // 当截取字符串字节长度满足指定的字节长度
      if (str.substring(0, i).replace(regexp, "aa").length >= len) {
        return str.substring(0, i)
      }
    }
    return str
  }
}
