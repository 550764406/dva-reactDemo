import dva from 'dva';
import {  hashHistory } from 'dva/router'
import './index.css';

// 1. Initialize
const app = dva({
    history: hashHistory,
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/DemoPage').default);


// 4. Router
app.router(require('./router').default);

/*
    1、新建页面
    2、在app.js里引入
    3、如果有需要新建一个modle的js文件
*/
// 5. Start
app.start('#root');
