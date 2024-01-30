import React from "react";
import { Footer } from "flowbite-react";
import "../styles/footerComponent.css";

export function FooterComponent() {
  return (
    <Footer className="footer-container">
      {" "}
      {/* Add a className for styling */}
      <div className="footer-item">
        <Footer.Copyright  by=" Company Name™" year={2024} />
      </div>
      <div className="footer-item">
        <Footer.Link href="#">About</Footer.Link>
      </div>
      <div className="footer-item">
        <Footer.Link href="#">Privacy Policy</Footer.Link>
      </div>
      <div className="footer-item">
        <Footer.Link href="#">Licensing</Footer.Link>
      </div>
      <div className="footer-item">
        <Footer.Link href="#">Contact</Footer.Link>
      </div>
    </Footer>
  );
}
