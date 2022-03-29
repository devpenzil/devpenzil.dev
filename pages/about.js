import React from 'react'
import Timeline from '../components/Timeline'
import HeadSection from '../components/HeadSection';
import { TIMELINEQUERY } from '../queries/queries'
import { graphcms } from '../graphcms/config'
export async function getStaticProps() {
  const { timelines } = await graphcms.request(TIMELINEQUERY)
  return {
    props: {
      timelines
    },
  }
}
function About({timelines}) {
    return (
        <div className=' dark:bg-slate-800 dark:text-slate-100'>
            <HeadSection title='Devpenzil | About' />
            <Timeline data={timelines} />
            
        </div>
    )
}

export default About
