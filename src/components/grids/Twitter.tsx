/* eslint-disable @next/next/no-img-element */
import React from 'react'

function Twitter() {
  return (
    <div className='h-36 shadow-lg p-4 border rounded-2xl bg-[#55ACEE10] flex flex-col justify-center '>
             <img src="/twitter.png" alt="" className='w-7 h-7 bg-[#55ACEE] p-1 rounded-lg' />
       <div className='text-xs text-gray-400'>
       @devpenzil
       </div>
        <a href="https://twitter.com/devpenzil">
        <div className='bg-[#55ACEE] w-16 h-7 rounded-full flex justify-center items-center text-xs text-white mt-2 cursor-pointer '>
            follow
        </div>
        </a>
    </div>
  )
}

export default Twitter