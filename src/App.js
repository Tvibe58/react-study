// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { Route, Link } from 'react-router-dom'
import { DatePicker, Button } from 'antd'
import './App.css';
import Home from './pages/Home/Home'
import About from './pages/About/About'

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/about">About</Link>
      <Button type="primary">Button</Button>
    </header>

    <main>
      <DatePicker />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)
export default App
