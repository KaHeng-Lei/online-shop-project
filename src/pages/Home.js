import React from "react";
import ControlledCarousel from "../components/ControlledCarousel";
import FeaturedProducts from "../components/FeaturedProducts";
import ThreePhotos from "../components/ThreePhotos";
import { homeSlidedPics } from "../data";
const home = () => {
  const imageStyle = {
    height: "380px",
    objectFit: "cover",
  };

  return (
    <main>
      <ControlledCarousel
        photos={homeSlidedPics}
        imageStyle={imageStyle}
        variant="dark"
      />
      <ThreePhotos />
      <FeaturedProducts />
    </main>
  );
};

export default home;
