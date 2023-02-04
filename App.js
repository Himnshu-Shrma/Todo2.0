import './App.css';
import { useState } from 'react';
import SideNav from './SideNav';
import MainSection from './MainSection';
function App() {
  const [active,setActive]=useState("Inbox")
  return (
    <div id="main">
      <header className='App-header'> Todo List</header>
        <div >
          <div className='SideNav'>
            <SideNav change={setActive}/>
          </div>
          <div className='MainSection'>
            <MainSection active={active}/>
          </div>
        </div>
      
    </div>
  );
}

export default App;
