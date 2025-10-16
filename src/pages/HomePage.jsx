import React, { useState, useEffect } from 'react'
import HeroSection from '../component/homePageCompo/HeroSection'
import AboutSection from '../component/homePageCompo/AboutSection'
import ForumSection from '../component/homePageCompo/ForumSection'

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

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClosePopup()
    }
  }

  return (
    <div className="relative">
      {/* Main Content */}
      <HeroSection />
      <AboutSection />
      <ForumSection />

      {/* Popup/Modal */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={handleBackgroundClick}
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#082E39] to-[#CBA244] rounded-t-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Welcome to EdMira</h2>
                <button
                  onClick={handleClosePopup}
                  className="text-white hover:text-gray-200 transition-colors text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-[#082E39] rounded-full p-3">
                  <svg 
                    className="w-12 h-12 text-[#CBA244]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                </div>
              </div>
              
              <p className="text-gray-700 text-center mb-4 text-lg font-medium">
                Important Information
              </p>
              
              <div className="space-y-3 text-gray-600">
                <p className="text-sm leading-relaxed">
                  🌟 <strong>This is an awareness website</strong> for EdMira - your future platform for empowering Africa's medical practitioners.
                </p>
                
                <p className="text-sm leading-relaxed">
                  🚧 <strong>Development in Progress:</strong> The full EdMira web application and mobile app are currently under development.
                </p>
                
                <p className="text-sm leading-relaxed">
                  📱 <strong>Coming Soon:</strong> Advanced features, interactive forums, real-time collaboration tools, and mobile accessibility.
                </p>
                
                <p className="text-sm leading-relaxed">
                  💡 <strong>Stay Tuned:</strong> Subscribe to our newsletter to get updates on our launch progress and early access opportunities.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 p-6">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={handleClosePopup}
                  className="bg-gradient-to-r from-[#D98021] to-[#CBA244] text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
                >
                  Got It, Continue Exploring
                </button>
                
                <button
                  onClick={() => {
                    handleClosePopup()
                    // Scroll to subscribe section in footer
                    setTimeout(() => {
                      const footer = document.querySelector('footer')
                      if (footer) {
                        footer.scrollIntoView({ behavior: 'smooth' })
                      }
                    }, 100)
                  }}
                  className="border border-[#CBA244] text-[#CBA244] font-semibold py-3 px-6 rounded-full hover:bg-[#CBA244] hover:text-white transition-all"
                >
                  Subscribe for Updates
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HomePage