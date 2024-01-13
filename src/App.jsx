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
import { AboutUs } from "./components/AboutUs.jsx";
import { Menu } from "./components/Menu.jsx";

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
                <Header />
                <MainPage />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <MainPage />
              </>
            }
          />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/menu" element={<><Menu /><MainPage/></>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
