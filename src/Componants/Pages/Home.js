import React from 'react';

function Home() {
    return (
        <div>
            <img src="facebook_cover_photo_2.jpg" className="img-fluid" style={imageStyle} alt='' />
            <div className='d-flex flex-wrap align-content-around' style={boxStyle}>
                <div className='p-2' style={aboutStyle}>
                        <h3>About Our Academy</h3>
                        <p>
                            Brenda Crump, Owner and Lead Instructor, has been in the industry for over 20 years.  The Academy was created
                            to offer an advanced training program beyond what is currently available at other schools.  The programs
                            include theory and hands-on practice, as well as additional focus on business skills, personal development, and
                            interaction with the community.  If you are interested in learning more visit our <a href='/Courses'> courses </a>
                            page or feel free to <a href='/Contact'>contact</a> us.
                        </p>
                </div>
                <div className="p-2" style={aboutImgStyle}>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="Frontsize.JPG" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="classroomsize.jpeg" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="rowTablessize.jpg" alt="Third slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="Tablesize.jpg" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className='p-2' style={aboutStyle}>
                    <h3>Why PSCA</h3>
                    <p>
                        Professional Skin Care Academy's main focus is, and always will be, the student.  Our small class size brings the
                        personalized instruction so every student can exceed the State Board standards.  We not
                        only ensure our students are prepared for the State Board exam, but also ensure they are ready
                        to begin an exciting career as an Esthetician.  We have classes starting regularly, so when you are ready
                        to get started <a href='/Contact'>contact</a> us for a tour.
                    </p>
                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide d-flex flex-row align-items-center" data-ride="carousel" style={reviewStyle}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"Brenda is an amazing esthetics educator. Everyday she was so motivating and inspiring,
                                she made me realize why I was there and why I was changing my future. No matter the class size,
                                she makes sure you get the one on one time you need to succeed. She has a vast knowledge of both esthetics and cosmetology,
                                so you leave knowing everything in the curriculum and then some. You’ll leave her program feeling confident and
                                fully prepared for your future in esthetics."</p>
                            <footer className="blockquote-footer">Leannah Hays<cite title="Source Title"> Google Review</cite></footer>
                        </blockquote>
                    </div>
                    <div className="carousel-item">
                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"Brenda is an amazing teacher and all around amazing person! She is so knowledgeable
                                and really goes above and beyond for her students. Couldn’t recommend her enough, she’s the best."</p>
                            <footer className="blockquote-footer">Faith Brewer<cite title="Source Title"> Google Review</cite></footer>
                        </blockquote>
                    </div>
                    <div className="carousel-item">
                        <blockquote className="blockquote text-center">
                            <p className="mb-0">"Brenda is the best! Very intuitive and energetic! She has an extremely huge heart and
                                sincerely cares for her students. She is very knowledgeable in skin care and makes her curriculum super
                                fun so her students want to learn more and more.  She has fun and catchy phrases to help you remember
                                things and has a positive daily quote that helps everyone stay motivated. She is the best educator I've ever had!!"</p>
                            <footer className="blockquote-footer">Sunsh Marie <cite title="Source Title">Google Review</cite></footer>
                        </blockquote>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" style={caroselLStyle}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" style={caroselRStyle}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

const imageStyle = {
    paddingTop: '50px',
}

const boxStyle = {
    margin: 'auto',
}

const aboutStyle = {
    height: '100%',
    width: '400px',
    lineHeight: '30px',
    textAlign: 'justify',
    margin: 'auto',
}

const aboutImgStyle = {
    height: '30%',
    width: '30%',
    margin:'auto',
    paddingTop: '10px',
}

const reviewStyle = {
    width: '65%',
    height: '50%',
    margin: 'auto',
    padding: '50px 0px 40px 0px',
}

const caroselLStyle = {
    height: '50px',
    width: '50px',
    outline: 'black',
    backgroundSize: '100%, 100%',
    borderRadius: '50%',
    border: '1px solid black',
    backgroundColor: '#47E4E0',
    marginTop:  '80px',
    left:'-60px',
    }

const caroselRStyle = {
    height: '50px',
    width: '50px',
    outline: 'black',
    backgroundSize: '100%, 100%',
    borderRadius: '50%',
    border: '1px solid black',
    backgroundColor: '#47E4E0',
    marginTop:  '80px',
    right:'-60px',
}


export default Home;