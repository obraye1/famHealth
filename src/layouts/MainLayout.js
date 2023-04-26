import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../pages/Footer';
export default function MainLayout({children}) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer/>
    </>
  );
}
