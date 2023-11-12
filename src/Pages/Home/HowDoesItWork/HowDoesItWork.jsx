import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./HowDoesItWork.scss";

export default function HowDoesItWork() {
  return (
    <section id="HowDoesItWork">
      <h1 className="HowDoesItWork-heading">HOW DOES IT WORK</h1>
      <MDBRow style={{ width: "85vw" }}>
        <MDBCol
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 5vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <h1 className="HowDoesItWork-numbering">1</h1>
            <div>
              <h3 style={{ paddingTop: "20px" }}>Search For The Equipment You Need</h3>
              <hr style={{backgroundColor:"yellow",color:"yellow",height: "4px"}}/>
              <p style={{ paddingTop: "20px" }}>
                Get all the blog lists & single post templates you’ll ever need
                to share your news & stories with the crowd. Get all the blog
                lists & single post templates you’ll ever need to share your
                news & stories with the crowd
              </p>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="6">
          <img
            src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/Section.png"
            alt=""
            className="HowDoesItWorkImg"
          />
        </MDBCol>
      </MDBRow>
      {window.innerWidth > 770 ? (
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/arrows.png"
          alt=""
          style={{width:"75vw",height:"30vh",objectFit:"contain"}}
        />
      ) : null}

      <MDBRow style={{ width: "85vw" }}>
        <MDBCol md="6">
          <img
            src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/Section.png"
            alt=""
            className="HowDoesItWorkImg"
          />
        </MDBCol>
        <MDBCol
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 5vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <h1 className="HowDoesItWork-numbering">1</h1>
            <div>
              <h3 style={{ paddingTop: "20px" }}>Search For The Equipment You Need</h3>
              <hr style={{backgroundColor:"yellow",color:"yellow",height: "4px"}}/>

              <p style={{ paddingTop: "20px" }}>
                Get all the blog lists & single post templates you’ll ever need
                to share your news & stories with the crowd. Get all the blog
                lists & single post templates you’ll ever need to share your
                news & stories with the crowd
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      {window.innerWidth > 770 ? (
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/arrows.png"
          alt=""
          style={{width:"75vw",height:"30vh",objectFit:"contain"}}
        />
      ) : null}
      <MDBRow style={{ width: "85vw" }}>
        <MDBCol
          md="6"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 5vw",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <h1 className="HowDoesItWork-numbering">1</h1>
            <div>
              <h3 style={{ paddingTop: "20px" }}>Search For The Equipment You Need</h3>
              <hr style={{backgroundColor:"yellow",color:"yellow",height: "4px"}}/>

              <p style={{ paddingTop: "20px" }}>
                Get all the blog lists & single post templates you’ll ever need
                to share your news & stories with the crowd. Get all the blog
                lists & single post templates you’ll ever need to share your
                news & stories with the crowd
              </p>
            </div>
          </div>
        </MDBCol>
        <MDBCol md="6">
          <img
            src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/Section.png"
            alt=""
            className="HowDoesItWorkImg"
          />
        </MDBCol>
      </MDBRow>
    </section>
  );
}
