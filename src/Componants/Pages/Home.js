import React from "react";

function Home() {
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
      <div className="d-flex flex-wrap align-content-around" style={boxStyle}>
        <div className="p-2" style={aboutStyle}>
          <h3>About Our Academy</h3>
          <p>
            Professional Skin Care Academy is located in Waxahachie, Texas and
            offers full time class schedules for aspiring estheticians and
            educators. Class size is limited to 12 students which allows for a
            personalized learning environment. The curriculum is approved by the
            Texas Department of Licensing and Regulation, and completion of the
            program will prepare students to test for the State License. In as
            little as 6 months, graduates will be starting exciting new careers
            as licensed estheticians. To learn more, visit our{" "}
            <a href="/Courses"> courses</a> page or feel free to{" "}
            <a href="/Contact"> contact</a> us.
          </p>
        </div>
        <div className="p-2" style={aboutImgStyle}>
          <div id="carousel-1" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="FrontPic.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="Sofa.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="enterHall.jpg"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="Classroom_1.jpg"
                  alt="Fourth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="Classroom_2.jpg"
                  alt="Fifth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="IMG_3389.jpg"
                  alt="Sixth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="TablePicsSize.jpg"
                  alt="Seventh slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="Tablesize.jpg"
                  alt="Eighth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="IMG_3391.jpg"
                  alt="Ninth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="IMG_3388.jpg"
                  alt="Tenth slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="IMG_3390.jpg"
                  alt="Eleventh slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carousel-1"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-1"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="p-2" style={aboutStyle}>
          <h3>Why PSCA</h3>
          <p>
            The Academy was designed by utilizing over 25 years of experience in
            the industry. Training and working at Ogle, Paul Mitchell and Aveda,
            and setting up the Esthetics program at Dallas Skin Institute
            allowed the opportunity to work with numerous product lines,
            textbooks and teaching platforms. Valuable knowledge was also gained
            by listening to students input on what they enjoyed, and what they
            felt was missing in their education. That was the creative concept
            behind why this Academy was started, and what is the heart of
            Professional Skin Care Academy.
          </p>
        </div>
      </div>
      <hr />
      <div
        id="carousel-2"
        className="carousel slide d-flex flex-row align-items-center"
        data-ride="carouse2"
        style={reviewStyle}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                "Brenda is an amazing esthetics educator. Everyday she was so
                motivating and inspiring, she made me realize why I was there
                and why I was changing my future. No matter the class size, she
                makes sure you get the one on one time you need to succeed. She
                has a vast knowledge of both esthetics and cosmetology, so you
                leave knowing everything in the curriculum and then some. You’ll
                leave her program feeling confident and fully prepared for your
                future in esthetics."
              </p>
              <footer className="blockquote-footer">
                Leannah Hays<cite title="Source Title"> Google Review</cite>
              </footer>
            </blockquote>
          </div>
          <div className="carousel-item">
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                "Brenda is an amazing teacher and all around amazing person! She
                is so knowledgeable and really goes above and beyond for her
                students. Couldn’t recommend her enough, she’s the best."
              </p>
              <footer className="blockquote-footer">
                Faith Brewer<cite title="Source Title"> Google Review</cite>
              </footer>
            </blockquote>
          </div>
          <div className="carousel-item">
            <blockquote className="blockquote text-center">
              <p className="mb-0">
                "Brenda is the best! Very intuitive and energetic! She has an
                extremely huge heart and sincerely cares for her students. She
                is very knowledgeable in skin care and makes her curriculum
                super fun so her students want to learn more and more. She has
                fun and catchy phrases to help you remember things and has a
                positive daily quote that helps everyone stay motivated. She is
                the best educator I've ever had!!"
              </p>
              <footer className="blockquote-footer">
                Sunsh Marie <cite title="Source Title">Google Review</cite>
              </footer>
            </blockquote>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carousel-2"
          role="button"
          data-slide="prev"
          style={caroselLStyle}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carousel-2"
          role="button"
          data-slide="next"
          style={caroselRStyle}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
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

const boxStyle = {
  margin: "auto",
};

const aboutStyle = {
  height: "100%",
  width: "400px",
  lineHeight: "30px",
  textAlign: "justify",
  margin: "auto",
};

const aboutImgStyle = {
  height: "400px",
  width: "400px",
  margin: "auto",
  paddingTop: "10px",
};

const reviewStyle = {
  width: "65%",
  height: "50%",
  margin: "auto",
  padding: "50px 0px 40px 0px",
};

const caroselLStyle = {
  height: "50px",
  width: "50px",
  outline: "black",
  backgroundSize: "100%, 100%",
  borderRadius: "50%",
  border: "1px solid black",
  backgroundColor: "#47E4E0",
  marginTop: "80px",
  left: "-60px",
};

const caroselRStyle = {
  height: "50px",
  width: "50px",
  outline: "black",
  backgroundSize: "100%, 100%",
  borderRadius: "50%",
  border: "1px solid black",
  backgroundColor: "#47E4E0",
  marginTop: "80px",
  right: "-60px",
};

export default Home;
