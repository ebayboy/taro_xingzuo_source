import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import './constellation.less'

//
class Constellation extends Component {
  // 跳转页面
  onTap(name) {
    console.log(name)
    // 跳转到目的页面，打开新页面
    Taro.navigateTo({
      url: '/pages/constellation/detail?constellation=' + name
    })
  }

  render() {
    // 这里最好初始化声明为 `null`，初始化又不赋值的话
    // 小程序可能会报警为变量为 undefined
    const show = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    let status = show.map((item) => {
      let tempItem = 'http://cdn.uneedzf.com/wepyBook/constellation/' + item + '.jpg'
      return (
        <View class='item' onClick={this.onTap.bind(this, item)}>
          <View class='viewItem'>
            <Image src={tempItem} class='constellationPic' />
          </View>
          <View class='viewTitle'>{item}</View>
        </View>
      )
    })
    return (
      <View>
        {status}
      </View>
    )
  }
}
