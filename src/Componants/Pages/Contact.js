import React from 'react';

function Contact() {
    return (
        <div>
            <h2 style={titleStyle}>contact us</h2>
            <form style={formStyle} action="https://formsubmit.co/Brenda.PSCA@gmail.com"
                  method="POST">
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="inputText">Full Name</label>
                        <input type="text" className="form-control" name="Name" placeholder="Full Name" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Email Address" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputPhone">Phone Number</label>
                        <input type="phone" className="form-control" name="Phone" placeholder="Phone Number" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" name="Address"
                           placeholder="1234 Main St." />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" name="City" placeholder="City" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select name="State" className="form-control">
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option selected value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" name="Zip" placeholder="Zip" />
                    </div>
                </div>
                <div className="form-group">
                    <p> Select the program(s) you are interested in:</p>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Esthetician" />
                            <label className="form-check-label" htmlFor="gridCheck">
                                Esthetician Program
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="Instructor" />
                        <label className="form-check-label" htmlFor="gridCheck">
                            Instructor Program
                        </label>
                    </div>
                </div>
                <button onClick="/home" type="submit" value="Send" className="btn" style={btnStyle}>Submit</button>
                <input type="hidden" name="_replyto"/>
                <input type="hidden" name="_subject" value="Information Request" />
                <input type="hidden" name="_next" value="https://www.professionalskincareacademy.com/" />
                <input type="hidden" name="_honey" />
                <input type="hidden" name="_template" value="table"/>
                <input type="hidden" name="_confirmation" value="Message has been sent, We will be in touch as soon as possible." />
            </form>
            <div className='container-fluid' style={addressStyle}><hr />
                <h2>VISIT US</h2><br />
            </div>
            <div className="container-fluid row" style={addressStyle}>
                <div className='col'>
                    <h5>401 5th Street Suite A</h5>
                    <h5>Waxahachie, TX 75165</h5>
                    <h5>Phone: (214) 903-7318</h5>
                    <h5>
                        Email: <a href='mailto:brenda.psca@gmail.com?subject=Course%20Information'>Brenda.PSCA@gmail.com</a>
                    </h5>
                </div>
                <div className='col'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.841644207067!2d-96.84811448450156!3d32.
                        39660638108845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864eefdea1f3f4fb%3A0x30e203dec0c62fdb!2s
                        Professional+Skin+Care+Academy!5e0!3m2!1sen!2sus!4v1562659772213!5m2!1sen!2sus" title='Map'
                        width="600" height="450" frameBorder="0" style={mapStyle}></iframe>
                </div>
            </div>
        </div>
    );
}

const mapStyle = {
    paddingBottom: '40px'
}

const titleStyle = {
    paddingTop: '80px',
    textAlign: 'center',
    textTransform: 'uppercase',
}

const addressStyle = {
    textAlign: 'center',
}

const btnStyle = {
    backgroundColor: '#47E4E0',

}

const formStyle = {
    margin: 'auto',
    height: '100%',
    padding: '2% 10%',

}


export default Contact;