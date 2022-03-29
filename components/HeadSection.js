import React from 'react'
import Head from 'next/head'
function HeadSection(props) {
    return (
        <div>
            <Head>
                <title>{props.title}</title>
                <link rel="shortcut icon" href="myfav.ico" type="image/x-icon" />
            </Head>
        </div>
    )
}

export default HeadSection
