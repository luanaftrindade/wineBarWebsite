import React from "react";

const slides = [
  { id: 1, src: "https://wallpaperaccess.com/full/468044.jpg", alt: "Slide 1" },
  { id: 2, src: "https://images.immediate.co.uk/production/volatile/sites/2/2021/07/GettyImages_933801552-6e4a61e.jpg?quality=90&resize=700,466", alt: "Slide 2" },
  { id: 3, src: "https://c4.wallpaperflare.com/wallpaper/472/102/539/old-franch-wine-bottles-high-quality-picture-bottle-cork-lot-2-wine-bottles-wallpaper-preview.jpg", alt: "Slide 3" },
  { id: 4, src: "https://e0.pxfuel.com/wallpapers/565/629/desktop-wallpaper-121744-high-resolution-widescreen-wine-wine-tasting-red-wine-wine-drinks-wine-country.jpg", alt: "Slide 4" },
];

export function CarouselGallery() {
  return (
    <div className="carouselGalleryDiv">
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          {slides.map((slide, index) => (
            <li key={slide.id} id={`carousel__slide${slide.id}`} tabIndex="0" className="carousel__slide">
              <div className="carousel__snapper">
                <img
                  id={`galleryImage${slide.id}`}
                  src={slide.src}
                  alt={`Slide ${slide.id}`}
                />
                <a href={`#carousel__slide${index === 0 ? slides.length : index}`} className="carousel__prev">
                  Go to previous slide
                </a>
                <a href={`#carousel__slide${index === slides.length - 1 ? 1 : index + 2}`} className="carousel__next">
                  Go to next slide
                </a>
              </div>
            </li>
          ))}
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            {slides.map((slide) => (
              <li key={slide.id} className="carousel__navigation-item">
                <a href={`#carousel__slide${slide.id}`} className="carousel__navigation-button">
                  Go to slide {slide.id}
                </a>
              </li>
            ))}
          </ol>
        </aside>
      </section>
    </div>
  );
};
