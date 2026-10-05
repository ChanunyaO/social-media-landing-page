import React from 'react'
import { useState } from 'react'

export function LinkContainer({ 
  title, 
  platform, 
  link, 
  image, 
  color 
}: { 
  title: string
  platform: string
  link: string
  image: string
  color: string 
}) {
  return (
    <a 
      href={link}
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        backgroundColor: `rgba(255, 255, 255, 0.3)`,
        width: '17rem',
        height: 'auto',
        padding: '10px 13px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: '5px 10px',
        textDecoration: 'none',
        color: '#333',
        borderRadius: '50px', // 10px
        border: `1px solid ${color}`,
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'opacity 0.1s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img 
          src={image} 
          alt={platform} 
          style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            backgroundColor: 'white',
            flexShrink: 0
          }} 
        />
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', minWidth: 0 }}>
          <div style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 'bold', color:'white' }}>{title}</div>
          <div style={{ 
            fontSize: 'clamp(0.9rem, 1.5vw, 1rem)', 
            opacity: 0.6, 
            color: 'white',
            marginTop: '-5px' 
          }}>
            {platform}
          </div>
        </div>
      </div>
    </a>
  )
}