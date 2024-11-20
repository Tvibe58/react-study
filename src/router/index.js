import Home from '../pages/Home/Home'
// import CreateApp from '../pages/CreateApp/CreateApp'
import Demo from '../pages/Demo/Demo'
import About from '../pages/About/About'
import Tools from '../pages/Tools/Tools'
import Box from '../pages/Box/Box'
import NotFoud from '../pages/NotFoud/NotFoud'
import {
  HomeOutlined,
  BorderOutlined,
  TableOutlined,
  TagsOutlined,
  ToolOutlined,
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
      icon: <HomeOutlined />
    }
  },
  {
    path: '/tools',
    component: Tools,
    menu: {
      isShow: true,
      name: '装货计算工具',
      icon: <ToolOutlined />
    }
  },
  // {
  //   path: '/box',
  //   component: Box,
  //   menu: {
  //     isShow: true,
  //     name: '装货计算工具2',
  //     icon: <ToolOutlined />
  //   }
  // },
  // {
  //   path: '/create',
  //   // exact: true,
  //   component: CreateApp,
  //   menu: {
  //     isShow: true,
  //     name: '创建项目',
  //     icon: <BorderOutlined />
  //   },
  //   routes: [
  //     {
  //       path: '/create/about',
  //       component: CreateApp,
  //       menu: {
  //         isShow: true,
  //         name: '创建项目',
  //         icon: <TagsOutlined />
  //       }
  //     }
  //   ]
  // },
  {
    path: '/demo',
    component: Demo,
    menu: {
      isShow: true,
      name: '示例',
      icon: <BorderOutlined />
    },
    routes: [
      {
        path: '/demo/list',
        component: Demo,
        menu: {
          isShow: true,
          name: '列表',
          icon: <TableOutlined />
        }
      }
    ]
  },
  {
    path: '/about',
    component: About,
    menu: {
      isShow: true,
      name: '关于',
      icon: <TagsOutlined />
    }
  },
  {
    path: '',
    component: Home
  },
  {
    path: '/404',
    exact: true,
    component: NotFoud
  }
]

export default routeConfig