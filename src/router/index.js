
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
const routeConfig = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  { path: '/home', component: Home },
  { path: '/about', component: About }
]
export default routeConfig