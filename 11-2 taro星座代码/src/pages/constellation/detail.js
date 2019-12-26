import Taro, {Component} from '@tarojs/taro'
import './detail.less'
import {View, Progress} from "@tarojs/components";

export default class detail extends Component {

  state = {
    constellation: {},
    allNum: 0,
    healthNum: 0,
    loveNum: 0,
    moneyNum: 0,
    workNum: 0
  }
  config = {
    navigationBarTitleText: '详情'
  }

  componentWillMount() {
    const params = this.$router.params
    //获取所有参数
    const query = params.constellation
    //query里面是链接上带的参数
    console.log(query)
    //  在这里获得到该星座的内容
    this.getUserChoice(query)
  }

  getUserChoice(constellation) {
    Taro.request({
      url: 'https://www.uneedzf.com/wepyBook/api/getConstellation?constellation=' + constellation,
      data: {},
      header: {
        'content-type': 'application/json'
      }
    }).then((res) => {
      console.log(res.data)
      this.setState({
        constellation: res.data.data,
        allNum: res.data.data.all.slice(0, -1),
        healthNum: res.data.data.health.slice(0, -1),
        loveNum: res.data.data.love.slice(0, -1),
        moneyNum: res.data.data.money.slice(0, -1),
        workNum: res.data.data.work.slice(0, -1)
      })
    })
  }

  render() {
    return (
      <View class='page'>
        <View class='title'>
          {constellation.name}
        </View>
        <View class='date'>
          {constellation.datetime}
        </View>
        <View class='date'>
          幸运色：{constellation.color}
        </View>
        <View class='friend'>
          友好星座：{constellation.QFriend}
        </View>
        <View class='summary'>
          {constellation.summary}
        </View>
        <View class='point'>
          综合指数
          <Progress activeColor='#c69ff7' percent={allNum} showInfo active />
        </View>
        <View class='point'>
          健康指数
          <Progress  activeColor='#c4f79f' percent={healthNum} showInfo active />
        </View>
        <View class='point'>
          爱情指数
          <Progress  activeColor='#f79f9f' percent={loveNum} showInfo active />
        </View>
        <View class='point'>
          财运指数
          <Progress  activeColor='#f7f19f' percent={moneyNum} showInfo active />
        </View>
        <View class='point'>
          工作指数
          <Progress  activeColor='#9fbdf7' percent={workNum} showInfo active />
        </View>
      </View>
    )
  }
}
