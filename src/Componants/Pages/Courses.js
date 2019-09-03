import React from 'react';

function Courses() {
    return (
        <div>
            <div className='container-fluid' style={imageDiv}>
                <img src="crop_PSCA_FULL_ColorLogo_BBG.jpg" className="img-fluid" style={imageStyle} alt='' />
            </div>
            <div className='d-flex flex-wrap align-content-around'>
                <div className="p-2" style={eCourseStyle}>
                    <h3>Esthetician Course</h3>
                    <p>
                        Whether you’re considering a career change or just starting your journey, our Esthetics Course
                        offers everything you need. This is a 750 hour TDLR approved training in Facials, Make Up,
                        Hair Removal, Business and so much more.  <a href='/Contact'>
                        Contact </a> us now to sign up or to schedule your tour.
                    </p>
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
                <div className="p-2" style={iCourseStyle}>
                    <h3>Instructor Course</h3>
                    <p>
                        This is a 750 hour TDLR approved course that will prepare you for both classroom and practical instruction.
                        There is a 500 hour course available if you have been in the industry for at least one year.
                        <a href='/Contact'> Contact </a> us now to sign up or to schedule your tour.
                    </p>
                    <h4>Skills You Will Learn</h4>
                    <ul>
                        <li>Lesson Plan Development</li>
                        <li>Classroom Management</li>
                        <li>Using Technology in the Classroom</li>
                        <li>Practical Teaching Experience</li>
                        <li>and More.....</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const imageStyle = {
    paddingTop: '50px',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
}

const imageDiv = {
    width: '100%',
    backgroundColor: 'black',
}

const eCourseStyle = {
    height: '100%',
    width: '400px',
    margin: 'auto',
    lineHeight: '30px',
}


const iCourseStyle = {
    height: '100%',
    width: '400px',
    marginRight: 'auto',
    lineHeight: '30px',
}

export default Courses;