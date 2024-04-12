import React from 'react'
import { Carousel } from "@material-tailwind/react";

const Crousel = ({image}) => {
  console.log("image to dikha",image);
  return (
    <Carousel className="rounded-xl">
      <img
        src={image}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://thumbs.dreamstime.com/b/kfc-logo-18302212.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      
    </Carousel>
  )
}

export default Crousel