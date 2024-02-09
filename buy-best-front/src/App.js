import React from 'react';
import './App.css';
import './index.css';
import ChatRight from './components/ChatRight';
import ChatLeft from './components/ChatLeft';

function App() {
  return (
    <div className="App">
      <div className="w-full h-[60px] bg-gray1 text-white p-4">
        <div className="container mx-auto flex items-center justify-between h-full">
          <div className="flex items-center">
            <div className="flex items-center">

              <span className="text-white font-inter font-semibold text-xl ml-2">BuyBest</span>
            </div>
          </div>
        </div>
       </div>
      <div className='chatbox w-full bg-gray3 '>
        <ChatLeft text="Hellos shshs"/>
        <ChatRight text="Hello"/>
      </div>

    </div>
            

   
  );
}

export default App;
