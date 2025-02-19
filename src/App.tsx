import React, { useState } from 'react';

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const popupStyles: {
    container: React.CSSProperties;
    closeButton: React.CSSProperties;
    iframe: React.CSSProperties;
    chatButton: React.CSSProperties;
  } = {
    container: {
      position: 'fixed',
      bottom: '80px',
      right: '20px',
      width: '350px',
      height: '600px',
      zIndex: 1001,
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'transparent',
      border: 'none',
      color: '#000',
      fontSize: '20px',
      cursor: 'pointer',
      zIndex: 1002,
    },
    iframe: {
      width: '100%',
      height: '600px',
      border: 'none',
    },
    chatButton: {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '15px',
      borderRadius: '50%',
      cursor: 'pointer',
      fontSize: '16px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    },
  };

  return (
    <>
      {/* Chat button */}
      <button style={popupStyles.chatButton} onClick={() => setIsOpen(true)}>
        Chat
      </button>

      {/* Chat popup */}
      {isOpen && (
        <div style={popupStyles.container}>
          <iframe
            title="Chatbot"
            src="https://chatbot.vapewholesaleusa.com/"
            style={popupStyles.iframe}
          />
          <button style={popupStyles.closeButton} onClick={() => setIsOpen(false)}>
            &times;
          </button>
        </div>
      )}
    </>
  );
};

export default ChatPopup;
