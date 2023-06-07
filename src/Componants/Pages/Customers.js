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
              <li>Mini Facial - $20</li>
              <li>Facial - $25*</li>
              <li>Deluxe Facial - $35*</li>
            </ul>
            <li>Back Treatments - $25*</li>
            <li>Facial Add-ons:</li>
            <ul>
              <li>Microdermabrasion - $15</li>
              <li>Galvanic Treatment - $15</li>
              <li>Micro-current - $15</li>
              <li>Nano Treatment - $15</li>
              <li>New Face - $15</li>
              <li>High Frequency - $10</li>
              <li>Vacuum Pores - $10</li>
              <li>LED Light Therapy - $10</li>
              <li>Facial Cupping - $10</li>
              <li>Jelly Mask - $10</li>
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
            <li>Brow or Lash Tints:</li>
            <ul>
              <li>Brow or Lash - $15</li>
              <li>Both - $25</li>
            </ul>
            <li>Lash Lift - $25</li>
            <li>Lash Extensions - $40*</li>
            <p>* Prices Starting At</p>
          </ul>
        </div>
        <div className="p-2" style={iCourseStyle}>
          <h4>Seasonal Facials</h4>
          <img
            src="TropicalBeachFacial.jpg"
            className="img-fluid"
            alt=""
            style={facialStyle}
          />
          <img
            src="Black_Cherry.png"
            className="img-fluid"
            alt=""
            style={facialStyle}
          />
          <img
            src="Charcoal Purity Facial 4x6.jpg"
            className="img-fluid"
            alt=""
            style={facialStyle}
          />
          <h5 style={contactStyle}>To Schedule Appointments Contact Us At:</h5>
          <h5>Phone: (214) 903-7318</h5>
        </div>
      </div>
      <div className="d-flex flex-column align-self-center">
        <div className="d-flex flex-row justify-content-center">
          <h4>Proudly Using and Distributing:</h4>
          <br />
        </div>
        <div className="d-flex flex-row flex-nowrap justify-content-between">
          <div className="p-2 m-3 w-50">
            <img src="Skin Script Logo.jpg" className="img-fluid" alt="" />
          </div>
          <div className="p-2 m-3 w-50">
            <img src="Hale & Hush.png" className="img-fluid" alt="" />
          </div>
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
