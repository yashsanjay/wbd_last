// ContactUs.js

import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div style={{ marginLeft: '30px', marginRight: '30px', marginTop: '30px' }}>
      <div>
        <div>
          <h1>
            <center>Contact us</center>
          </h1>
          <div>
            <center>
              Have questions about our products, support services, or anything else? Let us know
              and we&rsquo;ll get back to you.
            </center>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h2>
            <center>Contact us</center>
          </h2>
          <form id="contactus-form" className="contactus" data-directionstext="Get Directions">
            <div>
              <div>
                <div>
                  <div>
                    <center>
                      <label>Interested in</label>&nbsp;
                      <select>
                        <option value="Free listing on Opiherbs.com">
                          Creating a free profile on Opiherbs.com
                        </option>
                        <option value="Software to manage my Practice efficiently">
                          Free trial for a software to manage my clinic
                        </option>
                        <option value="Software to manage my hospital(s)">
                          Software to manage my hospital(s)
                        </option>
                        <option value="Software to manage my multi-centre clinics">
                          Software to manage my multi-centre clinics
                        </option>
                        <option value="Promoting my clinic online on Opiherbs.com">
                          Advertising my clinic/hospital on Opiherbs.com
                        </option>
                        <option value="Channel partnerships for clinic management software sales">
                          Channel partnerships for clinic management software sales
                        </option>
                        <option value="Support with an existing product/ subscription">
                          Support for an existing product/subscription
                        </option>
                        <option value="Career opportunities">Career opportunities</option>
                      </select>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <center>
                <input className="btn blue" type="submit" value="Submit" />
              </center>
            </div>
          </form>
        </div>
      </div>
      {/* Assuming you have a footer component */}
      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;