import React from 'react'
import SeoAuditingKeyHead from './SeoAuditingKeyHead'
import SeoAuditingKeyCard from './SeoAuditingKeyCard'
import "@/components/Style/style.css";

const SeoAuditingKey = () => {
  return (
    <div className='onPageSeoKey-container'>
      <SeoAuditingKeyHead/>
      <SeoAuditingKeyCard/>
    </div>
  )
}

export default SeoAuditingKey
