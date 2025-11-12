import React from 'react';

const DevelopmentPopup = ({ open, onClose }) => {
  if (!open) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleSubscribeClick = () => {
    onClose();
    setTimeout(() => {
      const footer = document.querySelector('footer');
      if (footer) footer.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const colors = {
    primaryBlue: "#00084A",
    lightBlue: "#3DBEFF",
    accentGreen: "#3EE6A5",
    white: "#FFFFFF"
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackgroundClick}
    >
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all font-[Codec]">
        {/* Header */}
        <div
          className="rounded-t-2xl p-6 text-white"
          style={{
            background: `linear-gradient(90deg, ${colors.primaryBlue} 0%, ${colors.lightBlue} 100%)`,
          }}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Welcome to EdMira</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-[#E0E0E0] transition-colors text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-center justify-center mb-4">
            <div
              className="rounded-full p-3"
              style={{ backgroundColor: colors.primaryBlue }}
            >
              <svg
                className="w-12 h-12"
                style={{ color: colors.accentGreen }}
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

          <p
            className="text-center mb-4 text-lg font-medium"
            style={{ color: colors.primaryBlue }}
          >
            Important Information
          </p>

          <div className="space-y-3 text-gray-700">
            <p className="text-sm leading-relaxed">
              🌟 <strong>This is an awareness website</strong> for EdMira — your
              future platform for empowering Africa's medical practitioners.
            </p>

            <p className="text-sm leading-relaxed">
              🚧 <strong>Development in Progress:</strong> The full EdMira web
              application and mobile app are currently under development.
            </p>

            <p className="text-sm leading-relaxed">
              📱 <strong>Coming Soon:</strong> Advanced features, interactive
              forums, real-time collaboration tools, and mobile accessibility.
            </p>

            <p className="text-sm leading-relaxed">
              💡 <strong>Stay Tuned:</strong> Subscribe to our newsletter to get
              updates on our launch progress and early access opportunities.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex flex-col space-y-3">
            <button
              onClick={onClose}
              className="font-semibold py-3 px-6 rounded-full text-white transition-all transform hover:scale-105 hover:shadow-lg"
              style={{
                background: `linear-gradient(90deg, ${colors.lightBlue} 0%, ${colors.accentGreen} 100%)`,
              }}
            >
              Got It, Continue Exploring
            </button>

            <button
              onClick={handleSubscribeClick}
              className="font-semibold py-3 px-6 rounded-full border transition-all"
              style={{
                borderColor: colors.lightBlue,
                color: colors.lightBlue,
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = colors.lightBlue;
                e.currentTarget.style.color = colors.white;
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = colors.lightBlue;
              }}
            >
              Subscribe for Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentPopup;
