import React from "react";

function Courses() {
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
      <div className="d-flex flex-column">
        <div className="d-flex mt-3 flex-row justify-content-center">
          <h2>Esthetician Course</h2>
        </div>
        <div className="d-flex flex-row flex-wrap justify-content-around mx-5 mt-4">
          <div className="p-2" style={eCourseStyle}>
            <p>
              Whether you’re considering a career change or just starting your
              journey, our Esthetics Course offers everything you need. This is
              a 750 hour TDLR approved training in Facials, Make Up, Hair
              Removal, Business and so much more.{" "}
              <a href="/Contact">Contact </a> us now to sign up or to schedule
              your tour.
            </p>
          </div>
          <div className="p-2" style={iCourseStyle}>
            <h5>Skills You Will Learn</h5>
            <ul>
              <li>Facials</li>
              <li>Microdermabrasion</li>
              <li>Back Treatments</li>
              <li>Body Polish</li>
              <li>Eye Treatments</li>
              <li>Make up</li>
              <li>Brow & Lash Tint, Perming, Extensions, and Tabs</li>
              <li>Waxing</li>
              <li>Reflexology</li>
              <li>and More.....</li>
            </ul>
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

const eCourseStyle = {
  height: "100%",
  width: "400px",
  lineHeight: "30px",
};

const iCourseStyle = {
  height: "100%",
  width: "400px",
  lineHeight: "30px",
};

export default Courses;
