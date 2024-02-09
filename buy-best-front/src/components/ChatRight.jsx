import React from 'react'

export default function ChatRight({message}) {
  return (
    <div className='container mx-auto flex justify-start'> 
          <div className='flex flex-col '>
            <span className='`w-1/2 sm:w-[300px] h-[80px] bg-green rounded-xl my-1 sm:my-5 py-5 text-white border border-black border-opacity-60 relative overflow-hidden transition duration-300 hover:border-red p-4`'>
            {message} </span>
          </div>
    </div>
  )
}
