

import { useState } from "react";
import "../styles/designe/designe.css";

function DesignBox() {
  const mockCourses= [ 
    { 

  img: "https://picsum.photos/id/30/400/500",

},
  { 

    img: "https://picsum.photos/id/10/400/500",

  }, 
  { 

    img: "https://picsum.photos/id/20/400/500",

  }, 
  { 

    img: "https://picsum.photos/id/34/400/500",
 
  },
    { 

      img: "https://picsum.photos/id/14/400/500",

    }, 
    { 

      img: "https://picsum.photos/id/26/400/500",
 
    }, 

] 

  // Crear un array de estados para controlar si cada imagen debe agrandarse
  const [imageStates, setImageStates] = useState(mockCourses.map(() => false));

  const handleImageClick = (index) => {
    // Actualizar el estado de la imagen clickeada y mantener las demás como están
    const updatedStates = imageStates.map((state, i) => (i === index ? !state : state));
    setImageStates(updatedStates);
  };

  return (
    <>
      {mockCourses.map((course, index) => (
        <div className={`Box ${imageStates[index] ? 'largeImage' : ''}`} key={index}>
          <img
            className={`imgDesigne ${imageStates[index] ? 'largeImage' : ''}`}
            src={course.img}
            onClick={() => handleImageClick(index)}
            alt={`Course ${index}`}
          />
        </div>
      ))}
    </>
  );
}

export default DesignBox;

