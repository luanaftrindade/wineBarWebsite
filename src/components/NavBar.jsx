export function NavBar() {
  return (
      <div className="navBar">
          <a href="#default" className="logo">
            CompanyLogo
          </a>
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
          <a className="galleryNavBar" href="#gallery">
            Gallery
          </a>
          <a className="contact" href="#contactUs">
            Contact
          </a>
          <button className="makeAReservationMainButton">Book a Table</button>
        </div>
  );
}
