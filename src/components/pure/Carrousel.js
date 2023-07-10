
import { useState } from "react";
import "../../styles/carrousel/carrousel.css"

function Carrousel({imgen})  {
const [currentImagen, setCurrentImagen] = useState(0)
const long = imgen?.length
function Back() {
    setCurrentImagen(currentImagen === long - 1 ? 0 : currentImagen + 1)
}

function Foward(params) {
    
}



        return (
          <div className="CarrouselContainer">
            <button className="buttonCarrousel" onClick={Back}>back</button>
            {imgen.map((img, index)=>{
                return(<div>

                    {currentImagen === index &&(
                        <img key={index} src={img}/>
                    )}
                        </div>)
})}

<button className="buttonCarrousel" >foward</button>
            </div>
        );
    
}
export default Carrousel;