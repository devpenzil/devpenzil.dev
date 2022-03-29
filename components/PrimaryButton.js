import React from 'react';

function PrimaryButton({label, trigger}) {
    return (
        <button onClick={trigger} className='bg-gray-900 dark:bg-slate-200 dark:text-slate-800 text-white px-8 py-4 rounded-full hover:ring-4 ring-gray-800 ring-offset-4 transition duration-500 mt-8'>{label}</button>
    )
}

export default PrimaryButton;
