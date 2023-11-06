import React from "react";
import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section id="testimonails">
      <h1>TESTIMONIALS</h1>
      <img
        className="testimonials-img"
        alt="testimonials"
        src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/07/testimon-@2x-833x510.jpg"
      />
      <div className="testimonials-content">
        <p>
          So happy to write this testimonial to see that I'm very thankful to
          you guys even you so awesome and professional Although with service
          while offering our employees the best training and a working
          environment in which they can excel.
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "5vw",
            gap: "5vw",
            position: "absolute",
            right: "5vw",
          }}
        >
          <p>
            <b>Mark James</b>
          </p>
          <p>        
            <b>Creative Heads Inc</b>
          </p>
        </div>
      </div>
    </section>
  );
}
