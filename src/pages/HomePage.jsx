import React, { useState, useEffect } from 'react'
import HeroSection from '../component/homePageCompo/HeroSection'
import AboutSection from '../component/homePageCompo/AboutSection'
import ForumSection from '../component/homePageCompo/ForumSection'
import DevelopmentPopup from '../component/DevelopmentModal'

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Show popup on every reload after a short delay
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="relative">
      {/* Main Content */}
      <HeroSection />
      <AboutSection />
      <ForumSection />

      {/* Popup/Modal */}
      <DevelopmentPopup 
        open={showPopup} 
        onClose={handleClosePopup} 
      />
    </div>
  )
}

export default HomePage