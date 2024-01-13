// create nav bar with map

export function NavBar() {
  const navItems = [
    { label: "Home", href: "#home", className: "home" },
    { label: "About", href: "#aboutUs", className: "about" },
    { label: "Menu", href: "#ourDrinksMenu", className: "menu" },
    { label: "Our Chefs", href: "#ourChefs", className: "chefs" },
    { label: "Reviews", href: "#reviews", className: "reviews" },
    {
      label: "Make a Reservation",
      href: "#makeAReservation",
      className: "reservations",
    },
    { label: "Gallery", href: "#gallery", className: "galleryNavBar" },
    { label: "Contact", href: "#contactUs", className: "contact" },
  ];

  return (
    <div className="navBar">
      <a href="#companyLogo" className="logo">
        CompanyLogo
      </a>
      {navItems.map((item) => (
        <a key={item.label} className={item.className} href={item.href}>
          {item.label}
        </a>
      ))}
      ;<button className="makeAReservationMainButton">Book a Table</button>
    </div>
  );
}
