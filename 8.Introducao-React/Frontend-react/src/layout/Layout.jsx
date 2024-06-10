import Navbar from './Navbar';
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
