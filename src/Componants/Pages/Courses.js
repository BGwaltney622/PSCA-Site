import React from 'react';

function Courses() {
    return (
        <div>
            <img src="facebook_cover_photo_2.jpg" className="img-fluid" style={imageStyle} alt='' />
            <div className='d-flex flex-row'>
                <div className="d-flex flex-column" style={aboutStyle}>
                    <div className='p-2'>
                        <h3>Esthetician Course</h3>
                    </div>
                    <div className="p-2">
                        <p>
                            Whether you’re considering a career change or just starting your journey, our Esthetics Course
                            offers everything you need. This is a 750 hour TDLR approved training in Facials, Make Up,
                            Hair Removal, Business and so much more.  Contact us today for more information.
                        </p>
                    </div>
                    <div className="p-2">
                        <h4>Skills You Will Learn</h4>
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
                            <li>Aromatherapy</li>
                            <li>Galvanic</li>
                            <li>Ear Candling</li>
                            <li>and More.....</li>


                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-column" style={whyStyle}>
                    <div className='p-2'>
                        <h3>Instructor Course</h3>
                    </div>
                    <div className="p-2">
                        <p>
                            This is a 750 hour TDLR approved course that will prepare you for both classroom and practical instruction.
                            There is a 500 hour course available if you have been the in industry for at least one year.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const imageStyle = {
    paddingTop: '50px',
}

const aboutStyle = {
    height: '100%',
    width: '50%',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '25px',
    marginBottom: '20px',
    lineHeight: '30px',
}


const whyStyle = {
    height: '100%',
    width: '50%',
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: '25px',
    marginBottom: '20px',
    lineHeight: '30px',
}

export default Courses;