import React from "react";
import { Link, useLocation } from "react-router-dom";

export function NavBar() {
  const navItems = [
    { label: "Home", link: "/home", className: "home" },
    { label: "About", link: "/aboutUs", className: "about" },
    { label: "Menu", link: "/menu", className: "menu" },
    { label: "Our Chefs", link: "/ourChefs", className: "chefs" },
    { label: "Reviews", link: "/reviews", className: "reviews" },
    {
      label: "Make a Reservation",
      link: "/makeAReservation",
      className: "reservations",
    },
    { label: "Gallery", link: "/gallery", className: "galleryNavBar" },
    { label: "Contact", link: "/contactUs", className: "contact" },
  ];

  // Get the current pathname using useLocation
  const { pathname } = useLocation();

  return (
    <div className="navBar">
      <p className="logo">CompanyLogo</p>

      {navItems.map((item) => (
        <div key={item.label} className={item.className}>
          <Link to={item.link} className={pathname === item.link ? "active" : ""}>
            {item.label}
          </Link>
        </div>
      ))}
      <button className="makeAReservationMainButton">Book a Table</button>
    </div>
  );
}
