import React from 'react'
import { useState } from 'react';

function Checking() {
    const [array, setArray] = useState(["suhaan", "sahil", "bhoumik", "divya"]);
    const [duplicate, setDuplicate] = useState();
    const [flags, setFlags] = useState({handleSizeFlag : false, sWordFlag : false});
    function handleSize(){
        if(flags.sWordFlag === true){
            setDuplicate(array);
            setFlags(flags.sWordFlag = true);
        }
        const newArray = array.filter(item => item.length > 5);
        setArray(newArray);
        console.log(array);
    }
    function undoSize(){
        setArray(duplicate);
        console.log(array);
    }
    function sWordList(){
        if(flags.handleSizeFlag === false){
            setDuplicate(array);
            setFlags(flags.handleSizeFlag = true);
        }
        const newArray = array.filter(item => item.startsWith("s"));
        setArray(newArray);
    }
    
  return (
    <div>
      <h1>Checking</h1>
        {array.map((element, index) => {
            return <h1 key={index}>{element}</h1>
        })}
        <br />
        <button onClick={handleSize}>size6</button>
        <button onClick={undoSize}>Undo</button>
        <button onClick={sWordList}>S word</button>
    </div>
  )
}

export default Checking
