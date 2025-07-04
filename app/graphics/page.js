import GraphicDesign from '@/components/Graphics'
import GraphicsHero from '@/components/HeroGraphics'
import React from 'react'

export default function GraphicService() {
  return (
    <div className='overflow-x-hidden'>
        <GraphicsHero />
        <GraphicDesign />
    </div>
  )
}
