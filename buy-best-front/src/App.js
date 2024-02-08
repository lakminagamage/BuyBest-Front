import React from 'react';
import './App.css';
import './index.css';

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
      <div className='chatbox w-full h-[calc(100vh-60px)] bg-gray3 '>
        <div className='container mx-auto flex-right  '>
          <div className='flex flex-col '>
           <span className='`w-1/2 h-auto sm:w-[200px] h-[130px] bg-gray2 rounded-xl my-1 sm:my-5 py-5 text-white
        border border-black border-opacity-60 relative overflow-hidden
        transition duration-300 hover:border-red flex flex-col justify-start p-4`'>We are here to help you</span>
          </div>
        </div>
        <div className='container mx-auto flex-right  '>
          <div className='flex flex-col '>
           <span className='`w-1/2 h-auto sm:w-[200px] h-[130px] bg-gray2 rounded-xl my-1 sm:my-5 py-5 text-white
        border border-black border-opacity-60 relative overflow-hidden
        transition duration-300 hover:border-red flex justify-end p-4`'>We are here to help you</span>
          </div>
        </div>

       
      </div>

    </div>
            

   
  );
}

export default App;
