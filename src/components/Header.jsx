import { CarouselGallery } from "./CarouselGallery";

export function Header(props) {
  return (
    <div className="header">
      <div className="headerInformation">
        <h1 className="barNameHeader">{props.children}</h1>
        <p className="textHeaderInformation"> Add gallery and text here</p>
      </div>
      <div className="buttonsHeaderSection">
        <button className="buttonExploreMore">Explore More</button>
        <button className="buttonGetDelivery">Get Delivery</button>
      </div>
    </div>
  );
}
