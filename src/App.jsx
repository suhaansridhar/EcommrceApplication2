import SideBar from './Components/SideBar';
import MainContainer from './Components/MainContainer';
import { createContext } from 'react/index.js';

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
import { useState } from 'react/index.js';
import { useEffect } from 'react/index.js';


function App(){
  const [array, setArray] = useState(
    {title: "Louis Vuitton", source: photo1},
    {title: "Louis Vuitton", source: photo2},
    {title: "Louis Vuitton", source: photo3},
    {title: "Louis Vuitton", source: photo4},
    {title: "Louis Vuitton", source: photo5},
    {title: "Louis Vuitton", source: photo11},
    {title: "Saint Laurent", source: photo6},
    {title: "Saint Laurent", source: photo7},
    {title: "Saint Laurent", source: photo8},
    {title: "Saint Laurent", source: photo9},
    {title: "Saint Laurent", source: photo10}
    );

  const [duplicate, setDuplicate] = useState();



  useEffect(() => {
    setDuplicate(array);
  }, []);


  return(
      <div className="app--container">
        <h1>Ecommerce Website</h1>
        <div className="app--inner--container">
          <SideBar />
          <MainContainer />
        </div>
      </div>
  )
}

export default App