import './App.css'
import { LinkContainer } from './components/linkContainer'
import { SOCIAL_MEDIAS } from './utils/constants'
import logo from './assets/logo.png'
import bg from './assets/bg.JPG'
import React from 'react'

function App() {
  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      backgroundImage: `url(${bg})`,
      backgroundSize: '120% 100%',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      padding: '5rem'
    }}>
      <div style={{ 
        position: 'relative',
        zIndex: 2,
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        width: '100%'
      }}>
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          paddingBottom: '0.5rem'
        }}>
          <img 
            src={logo}
            alt='ExxonMobil Logo' 
            style={{ 
              width: 'clamp(80px, 20vw, 150px)', 
              height: 'clamp(80px, 20vw, 150px)', 
              borderRadius: '50%', 
              objectFit: 'cover', 
              backgroundColor: 'white',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }} 
          />
          <div style={{ 
            paddingTop: '1rem', 
            paddingBottom: '1.5rem',
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 800,
            color: 'white',
            letterSpacing: '0.02em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)'
          }}>
            ExxonMobil
          </div>
        </div>

        <div style={{ 
          width: '100%', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '12px'
        }}>
          {SOCIAL_MEDIAS.map((sm, index) => (
            <LinkContainer 
              key={index}
              title={sm.title}
              platform={sm.platform}
              link={sm.link}
              image={sm.image}
              color='gray'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App