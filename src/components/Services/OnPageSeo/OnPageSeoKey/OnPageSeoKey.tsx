import React from 'react'
import "@/components/Style/style.css"
import OnPageSeoKeyHead from './OnPageSeoKeyHead'
import OnPageSeoHeadMain from '../OnPageSeoHead/OnPageSeoHeadMain'
import OnPageSeoKeyCard from './OnPageSeoKeyCard'
const OnPageSeoKey = () => {
  return (
    <div className='onPageSeoKey-container'>
      <OnPageSeoKeyHead/>
      <OnPageSeoKeyCard/>
    </div>
  )
}

export default OnPageSeoKey
