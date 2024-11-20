import React from 'react';
import { Calendar } from 'antd';
import './Home.css';
const App = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };
  return <div className='page-home'><Calendar onPanelChange={onPanelChange} /></div>;
};
export default App;