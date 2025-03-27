import React from 'react'
import SeoConsultationKeyHead from './SeoConsultationKeyHead'
import SeoConsultationKeyCard from './SeoConsultationKeyCard'
import "@/components/Style/style.css";

const SeoConsultationKey = () => {
  return (
    <div className='onPageSeoKey-container'>
    <SeoConsultationKeyHead/>
    <SeoConsultationKeyCard/>
  </div>
  )
}

export default SeoConsultationKey
