import Link from 'next/link'
import React from 'react'

function ToolBox() {
  return (
    <Link href={'/toolbox'} >
    <div className='h-36 shadow-lg p-4 border rounded-2xl bg-[#c7bbc9] '>ToolBox</div></Link>
  )
}

export default ToolBox