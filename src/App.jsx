import "./styles/main.css";
import "./styles/galleryWithAddEffectComponent.css";
import "./styles/carouselGalleryComponent.css";
import "./styles/mainPageComponent.css";
import { Route, Routes } from "react-router-dom";
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
      <GalleryWithAddEffect />
    </>
  );
}


/* 
function App() {
  return (
   <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<Stocks/>} />
      <Route path="/favourites"  element={<Favourites />}/>
      <Route path="/cart"  element={<Cart/>}/>
    </Routes>
    </div>
    </>
   
  );
}
*/


export default App;
