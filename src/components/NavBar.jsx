import React, { useState, useEffect } from 'react';

export function NavBar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      const scrollPosition = window.scrollY;

      // Set the state to determine whether the navigation bar should be fixed
      setIsFixed(scrollPosition > 130); // Adjust the threshold as needed
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar${isFixed ? " fixed" : ""}`}>
      <div className="navBar">
        <a href="#default" className="logo">
          CompanyLogo
        </a>
        <div className="navBar-center">
          <a className="home" href="#home">
            Home
          </a>
          <a className="about" href="#aboutUs">
            About
          </a>
          <a className="menu" href="#ourDrinksMenu">
            Menu
          </a>
          <a className="chefs" href="#ourChefs">
            Our Chefs
          </a>
          <a className="reviews" href="#reviews">
            Reviews
          </a>
          <a className="reservations" href="#makeAReservation">
            Make a Reservation
          </a>
          <a className="gallery" href="#gallery">
            Gallery
          </a>
          <a className="contact" href="#contactUs">
            Contact
          </a>
        </div>
        <div className="navBar-right">
          <button className="makeAReservationMainButton">Book a Table</button>
        </div>
      </div>
    </div>
  );
}
