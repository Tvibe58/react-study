import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFoud from '../pages/NotFoud/NotFoud'

const routeConfig = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '', component: NotFoud }
]

export default routeConfig