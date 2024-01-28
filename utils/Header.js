import React, { useContext } from 'react';
import Image from 'next/image';
import logoSVG from '../images/tmdbLogo.svg';

export default function Header() {
  return (
    <header
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            backgroundColor: '#E73980',
            height: '54px',
            margin: 0,
            padding: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Image
            src={logoSVG}
            alt="Logo"
            width={180}
            height={24}
            style={{ position: 'absolute', left: '112px' }}
          />
        </div>
      </header>
  );
};