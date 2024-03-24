/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Github() {
  return (
    <div className='h-36 shadow-lg p-4 border rounded-2xl bg-[#55ACEE10] flex flex-col justify-center '>
        <img src="/github.svg" alt="" className='w-7 h-7 bg-black p-1 rounded-lg' />
       <div className='text-xs text-gray-400 mt-1'>
       @devpenzil
       </div>
        <a href="https://twitter.com/devpenzil">
        <div className='bg-black w-16 h-7 rounded-md flex justify-center items-center text-xs text-white mt-2 cursor-pointer '>
            follow
        </div>
        </a>
    </div>
  )
}

export default Github