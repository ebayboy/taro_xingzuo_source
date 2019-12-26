import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import Constellation from '../../component/constellation'
import bg from '../../public/bg.jpeg'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  render() {
    return (
      <View>
        <Image src={bg} mode='widthFix' class='bg' />
        <View class='content'>
          <View class='title'>
            今日星座运势
          </View>
          <Constellation></Constellation>
        </View>
      </View>
    )
  }
}

