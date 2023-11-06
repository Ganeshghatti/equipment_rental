import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./Benifits2.scss";

export default function Benifits2() {
  return (
    <section id="benifits2">
      <MDBRow className="benifits-div">
        <MDBCol md="6" className="benifits-left">
          <div className="image-container">
            <img src="./Asssets/Images/Benifts/Benifts.jpg" alt="benifits" />
          </div>
        </MDBCol>
        <MDBCol md="6" className="benifits-right">
          <h5>SOME FEATURES AND</h5>
          <h2> The Benefits of using a backhoe today</h2>
          <p>
            We are committed to providing our customers with super exceptional
            service while offering our employees the best training and a working
            environment in which they can excel, best of all places for more
            than a half century.
          </p>
          <p>
            This company focus has been in place for more than a half century.
            We are committed to providing our customers with exceptional service
            while offering our employees the best training, best of all, and a
            working environment.
          </p>
          <div className="benefits-right-container">
            <div>
              <h6>
                <b>Building Companies</b>
              </h6>
              <p>
                Banks & Financial Institutions face a challenging & dynamic
                environment with…
              </p>
            </div>
            <div>
              <h6>
                <b>Building Companies</b>
              </h6>
              <p>
                Banks & Financial Institutions face a challenging & dynamic
                environment with…
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
