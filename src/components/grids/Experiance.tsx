import Link from 'next/link'
import React from 'react'

function Experiance() {
  return (
  <Link href={'/experience'}>
    <div className="h-36 shadow-lg border rounded-2xl bg-[url('/experiance.jpg')] bg-cover bg-no-repeat group overflow-hidden ">
        <div className="h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border rounded-2xl border-gray-100 group-hover:flex items-center p-4 hidden" >
          <div className="text-white font-semibold text-2xl">Experience</div>
        </div>
    </div></Link>
  )
}

export default Experiance