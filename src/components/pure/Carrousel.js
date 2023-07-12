
import { useState } from "react";
import "../../styles/carrousel/carrousel.css"

function Carrousel({imagen})  {

    const [currentImagen, setCurrentImagen] = useState(0)
    //With the next one I'm gonna be able to know how long is my images's array
    const long = imagen?.length

    function Back() {
    setCurrentImagen(currentImagen === long - 1 ? 0 : currentImagen + 1)
    }

    function Foward() {
        setCurrentImagen(currentImagen === long - 1 ? 
            0 : currentImagen + 1)
    
    }
//return premature
if (!Array.isArray(imagen)|| long === 0)
return;

        return (
        <div className="CarrouselContainer">
            <button className="buttonCarrousel" onClick={Back}><svg xmlns="http://www.w3.org/2000/svg" id="arrow-circle-left"><path fill="#6563ff" d="m11.293 7.293-4 4a1.004 1.004 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L10.414 13H16a1 1 0 0 0 0-2h-5.586l2.293-2.293a1 1 0 0 0-1.414-1.414Z"></path><path fill="#a2a1ff" d="M2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm10.707-4.707a1 1 0 0 1 0 1.414L10.414 11H16a1 1 0 0 1 0 2h-5.586l2.293 2.293a1 1 0 0 1-1.414 1.414l-4-4a1.004 1.004 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z"></path></svg></button>
            {imagen.map((img, index)=>{
                return(
                <div>
                {currentImagen === index &&(
                    <img key={index} className="ImageCarrousel" src={img}/>
                )}
                </div>
                )
            })}

            <button className="buttonCarrousel" onClick={Foward} >foward</button>
        </div>
        );
    
}
export default Carrousel;