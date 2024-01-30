import "./styles/main.css";
import "./styles/galleryWithAddEffectComponent.css";
import "./styles/carouselGalleryComponent.css";
import "./styles/mainPageComponent.css";
import "./styles/aboutUsComponent.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { MainPage } from "./components/MainPage.jsx";
import { GalleryWithAddEffect } from "./components/GalleryWithAddEffect.jsx";
import { CarouselGallery } from "./components/CarouselGallery.jsx";
import { About } from "./components/About.jsx";
import { Menu } from "./components/Menu.jsx";
import { OurChefs } from "./components/OurChefs.jsx";
import { Reviews } from "./components/Reviews.jsx";
import { Reservation } from "./components/Reservation.jsx";
import { Gallery } from "./components/Gallery.jsx";
import { Contact } from "./components/Contact.jsx";
import { FooterComponent } from "./components/FooterComponent.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route
            path=""
            element={
              <>
                <Header>Wine Bar</Header>
                <MainPage />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header>Wine Bar</Header>
                <MainPage />
                <FooterComponent />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header>About Us</Header>
                <About />
                <FooterComponent />
              </>
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <Header>Menu</Header>
                <MainPage />
                <FooterComponent />
              </>
            }
          />
          <Route
            path="/ourTeam"
            element={
              <>
                <Header>Meet the Team</Header>
                <MainPage />
                <FooterComponent />
              </>
            }
          />
          <Route
            path="/reviews"
            element={
              <>
                <Header>See the Reviews</Header>
                <MainPage />
                <FooterComponent />
              </>
            }
          />
          <Route
            path="/makeAReservation"
            element={
              <>
                <Header>Book a Table</Header>
                <Reservation></Reservation>
                <FooterComponent />
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Header>See the Gallery</Header>
                <MainPage />
                <FooterComponent />
              </>
            }
          />
          <Route
            path="/contactUs"
            element={
              <>
                <Header>Contact Us</Header>
                <MainPage />
                <FooterComponent />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
