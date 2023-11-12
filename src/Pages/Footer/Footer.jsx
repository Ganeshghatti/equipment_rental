import { MDBFooter } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBContainer } from "mdb-react-ui-kit";
import logo from "./logoplaceholder.png";

export default function Footer() {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted"
      style={{ width: "100vw", backgroundColor: "black", padding: "40px 0" }}
    >
      <MDBContainer
        className="text-center text-md-start mt-5"
        style={{ margin: "0" }}
      >
        <MDBRow
          className="mt-3"
          style={{
            width: "100vw",
          }}
        >
          <MDBCol
            md="4"
            lg="4"
            xl="3"
            className="mx-auto mb-4 footer-sec1"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h6
              className="text-uppercase fw-bold mb-4"
              style={{
                "@media (maxWidth: 770px)": {
                  margin: "auto",
                },
                color: "white",
              }}
            >
              <b>About company</b>
            </h6>
            {/* <img
              src={logo}
              alt="logo"
              style={{
                width: "75px",
                "@media (maxWidth: 770px)": {
                  margin: "0 auto",
                },
              }}
            /> */}

            <p style={{ color: "white" }}>
              Backhoe is diversified construction company, made up of team of
              people who are proven in their industries. All working to desing
              build, transport, operate, and maintain project all over the USA
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="fw-bold mb-4" style={{ color: "white" }}>
              <b>Information</b>
            </h6>
            <p>
              <a href="#" className="footer-links" style={{ color: "white" }}>
                Design
              </a>
            </p>
            <p>
              <a href="#" className="footer-links" style={{ color: "white" }}>
                Technology
              </a>
            </p>
            <p>
              <a href="#" className="footer-links" style={{ color: "white" }}>
                Neuromarketing
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="fw-bold mb-4" style={{ color: "white" }}>
              Contact Info
            </h6>
            <p>
              <a href="#" className="footer-links" style={{ color: "white" }}>
                About Us
              </a>
            </p>
            <p>
              <a href="#" className="footer-links" style={{ color: "white" }}>
                Team
              </a>
            </p>
            <p>
              <a href="#" className="footer-links" style={{ color: "white" }}>
                Career
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
            <h6 className="fw-bold mb-4" style={{ color: "white" }}>
              Recent Post
            </h6>
            <p>
              <a href="#" className="footer-links" style={{ color: "white" }}>
                Work
              </a>
            </p>
            <p>
              <a href="#" className="footer-links" style={{ color: "white" }}>
                Client
              </a>
            </p>
            <p>
              <a href="#" className="footer-links" style={{ color: "white" }}>
                Reach us
              </a>
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}
