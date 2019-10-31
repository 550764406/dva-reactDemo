import Index from './index/index';
import DemoPage from './DemoPage/DemoPage';
import List from './List/List';
import FuToChild from './FuToChild/FuToChild';

/*按需加载
https://blog.csdn.net/mjzhang1993/article/details/79094594
*/
const routes = [
  {
    path: '/',
    component: Index,
    exact: true,
  },
  {
    path: '/demo/DemoPage',
    component: DemoPage,
    
  },
  {
    path: '/FuToChild',
    component: FuToChild,
    
  },
  {
    path: '/List',
    component: List
  }
]


export default routes;