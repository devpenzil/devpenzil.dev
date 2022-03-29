import React from 'react'

function ToolLink({name, link, desc}) {
    return (
        <div className='py-4 pl-6 text-lg'>
            <a className='underline hover:text-green-500 dark:text-purple-400 font-semibold' href={link}>{name}</a> - <span className='text-gray-600 dark:text-gray-200'>{desc}</span>
        </div>
    )
}

export default ToolLink
