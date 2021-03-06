import wepy from 'wepy'

export default class wxCommon extends wepy.mixin {

  data = {
    userInfo: null,
    // url: '正式地址',
    url: 'http://localhost:3380',
    app: 'appname'
  }

  // 用户特有的请求头部token
  userRequest(url, method, data, cb) {
    const that = this
    wepy.request({
      url: that.url + url,
      method: method,
      data: data,
      header: {
        'Token': wepy.getStorageSync('token'),
        'Cookie': wepy.getStorageSync('cookie')
      }
    }).then((res) => {
      if (res.header['Set-Cookie'] != null) {
        wepy.setStorageSync('cookie', res.header['Set-Cookie'])
      }
      cb(res)
    })
  }

  // 用户统一登陆
  userLogin(cb) {
    const that = this
    that.userRequest('/wxUser/api/checkToken', 'get', {}, function (res) {
      if (res.data.code === 0) {
        // 验证成功
        cb()
      } else {
        // 验证失败
        that.reLogin(cb)
      }
    })
  }

  // 用户检测失败后重新执行login
  reLogin(cb) {
    const that = this
    wepy.login().then((res) => {
      if (res.code) {
        that.userRequest('/wxUser/api/getToken', 'post', {code: res.code, app: that.app}, function (res) {
          if (res.data.code === 0) {
            wepy.setStorageSync('token', res.data.data.token)
            cb()
          } else {
            wepy.showModal({title: res.data.message.toString()})
          }
        })
      }
    })
  }
}
