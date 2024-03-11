import { useState } from 'react';
import photo1 from './assets/LouisVuitton_00.webp';
import photo2 from './assets/LouisVuitton_01.webp';
import photo3 from './assets/LouisVuitton_02.webp';
import photo4 from './assets/LouisVuitton_03.webp';
import photo5 from './assets/LouisVuitton_04.avif';
import photo11 from './assets/LouisVuitton_05.webp';
import photo6 from './assets/SaintLaurent_00.jpeg';
import photo7 from './assets/SaintLaurent_01.avif';
import photo8 from './assets/SaintLaurent_02.avif';
import photo9 from './assets/SaintLaurent_03.webp';
import photo10 from './assets/SaintLaurent_04.jpeg';
import CardGenerator from './Components/CardGenerator';
import MainContainer from './Components/MainContainer';

function App(){
  const initialArray = [
    {title: "Louis Vuitton", source: photo1, Price: 389, Rating: "4.2/5"},
    {title: "Louis Vuitton", source: photo2, Price: 990, Rating: "4.0/5"},
    {title: "Louis Vuitton", source: photo3, Price: 512, Rating: "3.9/5"},
    {title: "Louis Vuitton", source: photo4, Price: 614, Rating: "4.4/5"},
    {title: "Louis Vuitton", source: photo5, Price: 800, Rating: "4.9/5"},
    {title: "Louis Vuitton", source: photo11, Price: 899, Rating: "4.3/5"},
    {title: "Saint Laurent", source: photo6, Price: 987, Rating: "4.4/5"},
    {title: "Saint Laurent", source: photo7, Price: 999, Rating: "3.9/5"},
    {title: "Saint Laurent", source: photo8, Price: 399, Rating: "4.3/5"},
    {title: "Saint Laurent", source: photo9, Price: 499, Rating: "4.8/5"},
    {title: "Saint Laurent", source: photo10, Price: 799, Rating: "4.5/5"}
  ];

  //We don't have to have 2 arrays for useState cases as we are only modifying one of the array.
  const [array, setArray] = useState(initialArray);

  function handleClick(brandName){
    if(brandName === "Reset Filter"){
      setArray(initialArray);
    }else{
      const newArray = initialArray.filter(item => item.title === brandName);
      setArray(newArray);
    }
  }

  //added a sorting function to sort the products based on price and rating. 
  //Taking the numeric part of the rating will help us to sort.
  function sorting(sortType){
    let newArray = [...array];
    if(sortType === "Price"){
      newArray.sort((a, b) => a.Price - b.Price);
    }else{
      newArray.sort((a, b) => {
        const ratingA = parseFloat(a.Rating);
        const ratingB = parseFloat(b.Rating);
        return ratingA - ratingB;
     });
    }
    setArray(newArray);
  }

  const cards = <CardGenerator array = {array} />
  //have created a duplicate array to store the copy of the original array. 

  return(
      <div className="app--container">
        <h1>Ecommerce Website <span>prices in euros</span></h1><br />
        <div className="app--container--inner">

          <div className="app--container--inner--sidebar">
            <select name="brandName" onChange={(e) => handleClick(e.target.value)}>
              <option>Choose the brand</option>
              <option value="Louis Vuitton">Louis Vuitton</option>
              <option value="Saint Laurent">Saint Laurent</option>
            </select>

            <select name="Sorting" id="" onChange={(e) => sorting(e.target.value)}>
              <option>Select an Option</option>
              <option value="Rating">Rating</option>
              <option value="Price">Price</option>
            </select>

            <button onClick={() => handleClick("Reset Filter")}>Reset Filter</button>
          </div>

          <div className="app--container--inner--main">
            <MainContainer cards = {cards}/>
          </div>

        </div>
      </div>
  )
}

export default App