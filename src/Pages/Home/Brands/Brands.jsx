import React from "react";
import "./Brands.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Brands() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };
  const imageStyles = {
    pointerEvents: "none",
  };
  return (
    <section id="Brands">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        customTransition="all 5"
        transitionDuration={500}
        arrows={false}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        focusOnSelect={false}
      >
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/client-6.png"
          alt=""
          style={{ ...imageStyles, width: "100px" }}
        />
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/client-6.png"
          style={{ ...imageStyles, width: "100px" }}
        />
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/client-6.png"
          alt=""
          style={{ ...imageStyles, width: "100px" }}
        />
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/client-6.png"
          alt=""
          style={{ ...imageStyles, width: "100px" }}
        />
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/client-6.png"
          alt=""
          style={{ ...imageStyles, width: "100px" }}
        />
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/client-6.png"
          alt=""
          style={{ ...imageStyles, width: "100px" }}
        />
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/client-6.png"
          alt=""
          style={{ ...imageStyles, width: "100px" }}
        />
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/client-6.png"
          alt=""
          style={{ ...imageStyles, width: "100px" }}
        />
        <img
          src="https://themes.webdevia.com/backhoe-heavy-construction-equipment-rentals-machinery-wordpress-theme/wp-content/uploads/2019/09/client-6.png"
          alt=""
          style={{ ...imageStyles, width: "100px" }}
        />
      </Carousel>
    </section>
  );
}
