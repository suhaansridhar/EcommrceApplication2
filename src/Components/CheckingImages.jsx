import React from 'react';
// import photo1 from '../assets/jpeg_43-2.jpg';
// import photo2 from '../assets/jpeg-home.jpg';
// import photo3 from '../assets/nando-jpeg-quality-001.jpg';
import { useState } from 'react';
import { useEffect } from 'react';


function CheckingImages() {
    const [array, setArray] = useState([{source : photo1, alt : "Background", size : "M"}, 
                            {source: photo2, alt: "Fruits", size : "S"},
                            {source: photo3, alt: "veggies", size : "L"}        
    ]);
    
    const [duplicate, setDuplicate] = useState();

    useEffect(() => {
        setDuplicate(array);
    }, [])

    function handleFilter(){
        const newArray = array.filter((element, index) => element.size === "S");
        setArray(newArray);
    }

    function reset(){
        setArray(duplicate);
    }

  return (
    <div>
      <h1>Checking Images</h1>
      {array.map((element, index) => {
        return <img key={index} src={element.source} />
      })}
      <button onClick={handleFilter}>Filter</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CheckingImages
