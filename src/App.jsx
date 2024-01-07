import "./styles/main.css";
import "./styles/galleryWithAddEffect.css";
import "./styles/carouselGallery.css";
import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { NavBar } from "./components/NavBar.jsx";
import { MainPage } from "./components/MainPage.jsx";
import { GalleryWithAddEffect } from "./components/GalleryWithAddEffect.jsx";
import { CarouselGallery } from "./components/CarouselGallery.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>     
     <NavBar />
      <Header />
      <MainPage />
      <CarouselGallery />
    </>
  );
}

export default App;
