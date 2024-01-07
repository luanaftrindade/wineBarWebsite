import React from "react";

export function CarouselGallery() {
  return (
    <div className="carouselGalleryDiv">
      <section className="carousel" aria-label="Gallery">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <img
                id="galleryImageOne"
                src="https://wallpaperaccess.com/full/468044.jpg"
                alt="Slide 1"
              />
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <img
                id="galleryImageTwo"
                src="https://images.immediate.co.uk/production/volatile/sites/2/2021/07/GettyImages_933801552-6e4a61e.jpg?quality=90&resize=700,466"
                alt="Slide 2"
              />
            </div>
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <img
                id="galleryImageThree"
                src="https://c4.wallpaperflare.com/wallpaper/472/102/539/old-franch-wine-bottles-high-quality-picture-bottle-cork-lot-2-wine-bottles-wallpaper-preview.jpg"
                alt="Slide 3"
              />
            </div>
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" tabIndex="0" className="carousel__slide">
            <div className="carousel__snapper">
              <img
                id="galleryImageFour"
                src="https://e0.pxfuel.com/wallpapers/565/629/desktop-wallpaper-121744-high-resolution-widescreen-wine-wine-tasting-red-wine-wine-drinks-wine-country.jpg"
                alt="Slide 4"
              />
            </div>
            <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide1"
                className="carousel__navigation-button"
              >
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide2"
                className="carousel__navigation-button"
              >
                Go to slide 2
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide3"
                className="carousel__navigation-button"
              >
                Go to slide 3
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a
                href="#carousel__slide4"
                className="carousel__navigation-button"
              >
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>
    </div>
  );
}
