import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFoud from '../pages/NotFoud/NotFoud'
import {
  HomeOutlined,
  TagsOutlined
} from '@ant-design/icons';

const routeConfig = [
  {
    path: '/',
    exact: true,
    component: Home,
    menu: {
      isShow: false,
    }
  },
  {
    path: '/home',
    component: Home,
    menu: {
      isShow: true,
      name: '首页',
      icon: <HomeOutlined />,
    }
  },
  {
    path: '/about',
    component: About,
    menu: {
      isShow: true,
      name: '关于',
      icon: <TagsOutlined />,
    }
  },
  {
    path: '',
    component: NotFoud
  }
]

export default routeConfig