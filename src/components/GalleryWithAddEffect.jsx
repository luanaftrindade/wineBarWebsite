export function GalleryWithAddEffect() {
  const galleryImages = [
    { src: "https://picsum.photos/id/1028/300/300", alt: "drinks1" },
    { src: "https://picsum.photos/id/1028/300/300", alt: "drinks2" },
    { src: "https://picsum.photos/id/1028/300/300", alt: "drinks3" },
    { src: "https://picsum.photos/id/1028/300/300", alt: "drinks4" },
    { src: "https://picsum.photos/id/1028/300/300", alt: "drinksImage5" },
    { src: "https://picsum.photos/id/1028/300/300", alt: "drinksImage6" },
    { src: "https://picsum.photos/id/1028/300/300", alt: "drinksImage7" },
    { src: "https://picsum.photos/id/1028/300/300", alt: "drinksImage8" },
    { src: "https://picsum.photos/id/1028/300/300", alt: "drinksImage9" },
  ];

  return (
    <div className="galleryDiv">
      <div className="gallery">
        <input type="checkbox" />
        {galleryImages.map((item) => (
          <img src={item.src} alt={item.alt}></img>
        ))}
        ;
      </div>
    </div>
  );
}
