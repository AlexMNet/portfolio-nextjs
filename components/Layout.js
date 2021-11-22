import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  // Hide dropdown if open is true and window is resized larger
  useEffect(() => {
    //Function to hide dropdown larger than 768px
    const hideDropdown = () => {
      if (window.innerWidth > 768 && open) {
        setOpen(false);
      }
    };
    //Add event listening on window resize
    window.addEventListener('resize', hideDropdown);

    //Event listener cleanup
    () => {
      window.removeEventListener('resize', hideDropdown);
    };
  });

  return (
    <>
      <Navbar toggleDropdown={toggleDropdown} open={open} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
