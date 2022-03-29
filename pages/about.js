import React from 'react'
import Timeline from '../components/Timeline'
import HeadSection from '../components/HeadSection';
import { TIMELINEQUERY, GETTOKENS } from '../queries/queries'
import { graphcms } from '../graphcms/config'
import Crypto from '../components/Crypto';
export async function getStaticProps() {
  const { timelines } = await graphcms.request(TIMELINEQUERY)
  const { cryptos } = await graphcms.request(GETTOKENS)
  return {
    props: {
      timelines,
      cryptos
    },
  }
}
function About({timelines, cryptos}) {
    return (
        <div className=' dark:bg-slate-800 dark:text-slate-100'>
            <HeadSection title='Devpenzil | About' />
            <Timeline data={timelines} />
            <Crypto data={cryptos} />
            <div className='h-5' />
        </div>
    )
}

export default About