import { useState } from "react";

function BtnColorChange(){
    
 
  function  handleBackgroundChange(changeColor){
    // console.log(event.target);
    // console.log(changeColor)
    changeColor.target.style.backgroundColor="red"
    
  }


    return(
        <div>   
            <button 
                className="border-2 border-white px-6 py-2 rounded-md bg-teal-600" 
                onClick={handleBackgroundChange}>Theme 
            </button>
        </div>


    )
}
export default BtnColorChange;