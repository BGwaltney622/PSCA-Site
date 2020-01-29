<<<<<<< HEAD
/* eslint-disable jsx-a11y/anchor-has-content */
=======
>>>>>>> 08e2613595f636f3bb47b601ecbde64781cdf339
import React from 'react';
import '../App.css';

function Footer() {
    return (
        <div >
            <footer className="page-footer font-small blue pt-4 bg-light" style={footerStyle}>

                <div className="container-fluid text-center">
                    <h5 className="text-uppercase">Follow Professional Skin Care Academy on Social Media</h5>
                    <a href="https://www.facebook.com/PSCAWaxahachie/" className="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/pscalife/?hl=en" className="fa fa-instagram"></a>
                    <a href="https://www.linkedin.com/in/brenda-crump-17852192?trk=people-guest_profile-result-card_result-card_full-click" className="fa fa-linkedin"></a>
                    <a href="https://brendascornerpsca.blogspot.com/" className="fa fa-google"></a>
                </div>

            </footer>

        </div>
    );
}

const footerStyle = {
    textAlign: 'center',
}

export default Footer;