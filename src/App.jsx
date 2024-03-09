import { useState, useEffect } from 'react';
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
import SideBar from './Components/SideBar';
import MainContainer from './Components/MainContainer';

function AnotherComponent(){
  const [array, setArray] = useState([
    {title: "Louis Vuitton", source: photo1, price: 389, rating: "4.2/5"},
    {title: "Louis Vuitton", source: photo2, price: 990, rating: "4.0/5"},
    {title: "Louis Vuitton", source: photo3, price: 512, rating: "3.9/5"},
    {title: "Louis Vuitton", source: photo4, price: 614, rating: "4.4/5"},
    {title: "Louis Vuitton", source: photo5, price: 800, rating: "4.9/5"},
    {title: "Louis Vuitton", source: photo11, price: 899, rating: "4.3/5"},
    {title: "Saint Laurent", source: photo6, price: 987, rating: "4.4/5"},
    {title: "Saint Laurent", source: photo7, price: 999, rating: "3.9/5"},
    {title: "Saint Laurent", source: photo8, price: 399, rating: "4.3/5"},
    {title: "Saint Laurent", source: photo9, price: 499, rating: "4.8/5"},
    {title: "Saint Laurent", source: photo10, price: 799, rating: "4.5/5"}
  ]);

  const [duplicate, setDuplicate] = useState();

  const cards = <CardGenerator array = {array} />
  //have created a duplicate array to store the copy of the original array. 
  useEffect(() => {
    setDuplicate(array);
  }, []);

  return(
      <div className="app--container">
        <h1>Ecommerce Website <span>prices in euros</span></h1>
        <div className="app--inner--container">
          <SideBar />
          <MainContainer cards = {cards}/>
        </div>
      </div>
  )
}

export default AnotherComponent