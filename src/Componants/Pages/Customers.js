import React from "react";

function Customers() {
  return (
    <div style={backgroundDiv}>
      <div className="container-fluid" style={imageDiv}>
        <img
          src="PSCA_Sign.svg"
          className="img-fluid"
          style={imageStyle}
          alt=""
        />
      </div>
      <div className="d-flex flex-wrap align-content-around">
        <div className="p-2" style={eCourseStyle}>
          <h3>Services and Prices</h3>
          <ul>
            <li> Facials: </li>
            <ul>
              <li>Facial - $25*</li>
              <li>Deluxe Facial - $35*</li>
            </ul>
            <li>Back Treatments - $25*</li>
            <li>Facial Add-ons:</li>
            <ul>
              <li>Microdermabrasion - $15</li>
              <li>Mini Micro-current with LED - $15</li>
              <li>Lymphatic Drainage - $10</li>
              <li>Nano Treatment - $15</li>
              <li>High Frequency - $10</li>
              <li>Vacuum Pores - $10</li>
              <li>LED Light Therapy - $10</li>
              <li>Facial Cupping - $10</li>
              <li>Gel Mask With Bubbles - $15</li>
            </ul>
            <li>Waxing:</li>
            <ul>
              <li>Lip - $6</li>
              <li>Brow - $6</li>
              <li>Chin - $6</li>
              <li>Nose - $6</li>
              <li>Arms - $20*</li>
              <li>Under Arms - $20*</li>
              <li>Lower Legs - $20*</li>
              <li>Full Legs - $35*</li>
              <li>Back/Chest - $20*</li>
            </ul>
            <li>Make Up Application - $10</li>
            <li>Brow or Lash - $8</li>
            <li>Lash Lift and Tint - $30</li>
            <li>Brow Lamination and Tint - $30</li>
            <li>Lash Extensions - $40*</li>
            <p>* Prices Starting At</p>
          </ul>
        </div>
        <div className="p-2" style={iCourseStyle}>
          <h4>Proudly Using and Distributing:</h4>
          <img
            src="Hale & Hush.png"
            className="img-fluid"
            alt=""
            style={facialStyle}
          />
          <img
            src="Green_Envy.jpg"
            className="img-fluid"
            alt=""
            style={facialStyle}
          />
          <h5 style={contactStyle}>To Schedule Appointments Contact Us At:</h5>
          <h5>Phone: (214) 903-7318</h5>
        </div>
      </div>
    </div>
  );
}

const backgroundDiv = {
  background: "#f7f7f7",
};

const imageStyle = {
  paddingTop: "50px",
  display: "block",
  marginRight: "auto",
  marginLeft: "auto",
  width: "75%",
};

const imageDiv = {
  width: "100%",
  backgroundColor: "white",
};

const facialStyle = {
  paddingTop: "5px",
  paddingBottom: "5px",
};

const contactStyle = {
  paddingTop: "30px",
};

const eCourseStyle = {
  height: "100%",
  width: "400px",
  margin: "auto",
  lineHeight: "30px",
};

const iCourseStyle = {
  height: "100%",
  width: "400px",
  marginRight: "auto",
  lineHeight: "30px",
};

export default Customers;
