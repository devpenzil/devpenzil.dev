import Image from 'next/image'
import React from 'react'

function Profile() {
  return (
    <div>

        <Image src={'me.svg'} width={208} height={208} alt='' className='border-2 rounded-full' />

     <div className='mt-8 text-6xl font-semibold'>Ajo Alex </div>
        <div className='text-2xl mt-2 text-gray-400'>Kerala, India </div>
        <div className='text-2xl mt-2 text-gray-400'>Software Engineer @ <a href="https://www.pitsolutions.com/" className='text-red-600'>PITs</a></div>
    </div>
  )
}

export default Profile