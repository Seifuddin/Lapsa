import WebHero from '@/components/HeroService'
import WebServices from '@/components/WebServices'
import React from 'react'

export default function WebService() {
  return (
    <div className='overflow-x-hidden'>
        <WebHero />
        <WebServices />
    </div>
  )
}
