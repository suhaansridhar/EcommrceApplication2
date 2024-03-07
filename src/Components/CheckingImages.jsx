import React from 'react';
import photo1 from '../assets/jpeg_43-2.jpg';
import photo2 from '../assets/jpeg-home.jpg';
import { useState } from 'react';


function CheckingImages() {
    const [array, setArray] =
    useState([{img : '../assets/jpeg_43-2.jpg', size: "M", alt: "hello"}, 
                {img: '../assets/jpeg-home.jpg', size: "S", alt: "yolo"}]);

  return (
    <div>
      <h1>Checking Images</h1>
      {array.map((element, index) => {
        return <img key={index} src={element.img} alt={element.alt} />
      })}
    </div>
  )
}

export default CheckingImages
