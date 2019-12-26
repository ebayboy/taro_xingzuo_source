//启动一个监听在8080端口的服务
let WebSocketServer = require('ws').Server, webSocketServer = new WebSocketServer({port: 8080})
// 可以使用Hash方式进行用户的识别，端对端进行数据传输
// var HashMap = require('hashmap')
// var userConnectionMap = new HashMap()
let clients = []
let connectNum = 0

/*监听链接和消息*/
webSocketServer.on('connection', (ws) => {
  // 可以通过建立连接池来记录连接
  clients.push(ws);
  ++connectNum
  console.log('链接的数量为 : ' + connectNum)

  /*检测消息*/
  ws.on('message', (message) => {
    console.log(message)
    let objMessage = JSON.parse(message)
    console.log(objMessage.data)
    //  可以对消息进行一些处理或者转发其他客户端

  })
  // 随机时间发送消息
  setInterval(() => {
    if (connectNum !== 0) {
      setTimeout(() => {
        console.log('发送返回消息')
        // 从连接池中取得最新的连接
        clients[clients.length - 1].send(JSON.stringify({data: '来自服务器的消息'}))
      }, Math.random() * 10000 * 3)
    } else {
      console.log('无连接客户端')
    }
  }, 10000)

  /*检测关闭*/
  ws.on('close', () => {
    console.log('有连接断开')
    // 删除不需要的连接
    // clients.pop()
    connectNum--
  })
})
