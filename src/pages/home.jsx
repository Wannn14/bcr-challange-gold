import React from "react";
import {
  OurServices,
  WhyUs,
  Testimonial,
  Jumbo,
  Faq,
  Banner,
} from "../component";

const Home = () => {
  const showButton = true;
  return (
    <>
      <Banner showButton={showButton} />
      <OurServices />
      <WhyUs />
      <Testimonial />
      <Jumbo />
      <Faq />
    </>
  );
};

export default Home;
