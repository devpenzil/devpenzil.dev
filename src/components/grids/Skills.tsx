import Link from 'next/link'
import React from 'react'

function Skills() {
  return (
    <Link href={'/skills'}>
    <div className="h-36 shadow-lg p-4 border rounded-2xl bg-[url('/skills.jpg')] bg-cover bg-no-repeat bg-center ">Skills</div></Link>
  )
}

export default Skills