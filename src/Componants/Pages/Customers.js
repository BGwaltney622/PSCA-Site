import React from 'react';

function Customers() {
    return (
        <div style={backgroundDiv}>
            <div className='container-fluid' style={imageDiv}>
                <img src="PSCA_Sign.svg" className="img-fluid" style={imageStyle} alt='' />
            </div>
            <div className='d-flex flex-wrap align-content-around'>
                <div className="p-2" style={eCourseStyle}>
                    <h3>Services and Prices</h3>
                    <ul>
                        <li>Mini Facial - $20</li>
                        <li>Facial - $25*</li>
                        <p>Mini Facial/Facial Add-ons:
                            <ul>
                                <li>Microdermabrasion - $15</li>
                                <li>Galvanic Treatment - $15</li>
                                <li>High Frequency - $10</li>
                                <li>Vacuum Pores - $10</li>
                                <li>Micro-current - $15</li>
                                <li>LED Light Therapy - $10</li>
                                <li>Facial Cupping - $10</li>
                                <li>Jelly Mask - $10</li>
                            </ul>
                        </p>
                        <li>Waxing:
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
                        </li>
                        <li>Back Treatments - $25*</li>
                        <li>Make Up Application - $10</li>
                        <li>Brow or Lash Tint - $15 for One or $25 for Both</li>
                        <li>Lash Lift - $25</li>
                        <li>Lash Extensions - $40*</li>
                        <p>* Prices Starting At</p>
                    </ul>
                </div>
                <div className="p-2" style={iCourseStyle}>
                    <h4>Seasonal Facials</h4>
                    <img src="Pumpkin.png" className="img-fluid" alt='' style={facialStyle}/>
                    <img src="Black_Cherry.png" className="img-fluid" alt='' style={facialStyle}/>
                    <img src="Charcoal Purity Facial 4x6.jpg" className="img-fluid" alt='' style={facialStyle}/>
                    <h5 style= {contactStyle}>To Schedule Appointments Contact Us At:</h5>
                    <h5>Phone: (214) 903-7318</h5>
                </div>
                <div style={logoStyle}>
                    <h4 >Proudly Using and Distributing:</h4>
                    <br/>
                    <img src="Skin Script Logo.jpg" className="img-fluid" alt=''/>
                </div>
                <div style={logoStyle}>
                    <img src="Hale & Hush.png" className="img-fluid" alt=''/>
                </div>
            </div>
        </div>
    );
}

const backgroundDiv = {
    background: '#f7f7f7'
}

const imageStyle = {
    paddingTop: '50px',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '75%'
}

const logoStyle = {
    paddingTop: '25px',
    paddingBottom: '25px',
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    width: '100%',
}

const imageDiv = {
    width: '100%',
    backgroundColor: 'white',
}

const facialStyle = {
    paddingTop: '5px',
    paddingBottom: '5px',
}

const contactStyle = {
    paddingTop: '30px',
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

export default Customers;
