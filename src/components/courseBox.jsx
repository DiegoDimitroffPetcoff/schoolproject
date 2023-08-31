import "../styles/sectionOne.css";
import "../styles/whoWeAre.css";
import "../styles/course/courseBox.css"
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie"
function DesignBox() {

  const mockCourses= [ 
    { 
      _id:1,
      name: "PINTURA",
      content: "como pintar las uñas",
      img: "https://picsum.photos/id/3/200/300",
      done: false
    },
      { 
        _id:2,
        name: "COLORES",
        content: "como pintar CON COLORES las uñas",
        img: "https://picsum.photos/id/1/200/300",
        done: false
      }, 
      { 
        _id:3,
        name: "CABELLO",
        content: "info del curso de cabello",
        img: "https://picsum.photos/id/2/200/300",
        done: false
      }, 
  
  ] 

  function handleClick (course) {
    console.log(course);
     Cookies.set("course", JSON.stringify(course));
  }


  return (    
    <>
      {mockCourses.map( (course, index) => (   
        <Link
            to={{pathname: "/coursein" }}
            className="DesignBox"
            key={index}
            onClick={()=> handleClick(course)}
            >
            <div className="cardText">
              <h1 className="title">{course.name}</h1>
              <p className="subTitle">{course.content}</p>
            </div>             
            <img src={course.img} key={index}/>
        </Link>
          ))}    
    </>   
        )
}
export default DesignBox;
