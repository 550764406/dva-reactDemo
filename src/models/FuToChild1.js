export default {
    name: 'FuToChild', //在外面调用时，需要添加该modle的那么名称
    state:{
        //存储公用的state
    },
    subscriptions:{
        //在app.start执行时，数据源可以是当前时间，websocket连接，keyboard输入，getlocation变化，history路由变化
        setup(dispach,history){

        }
    },
    effects:{
        // 处理业务逻辑
    },
    reducers:{
        //处理同步操作，唯一修改state的地方
    }
  
};
  