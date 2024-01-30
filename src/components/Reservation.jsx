import { FormReservation } from "./formReservation/FormReservation";
import { Header } from "./Header";
import "../styles/FormReservationComponent.css";
import { FooterComponent } from "./FooterComponent";

export function Reservation() {
  return (
    <div className="reservationComponent">
      <h1 className="reservationComponentText">
        It is a long established fact that a reader will be distracted by the 
        readable content of a page when looking at its layout. <br></br>The point of 
        using Lorem Ipsum is that it has a more-or-less normal distribution of 
        letters, as opposed to using 'Content here, content here', making it 
        look like readable English.
      </h1>
      <FormReservation />
    </div>
  );
}
