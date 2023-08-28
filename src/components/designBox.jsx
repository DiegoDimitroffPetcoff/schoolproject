import "../styles/sectionOne.css";
import "../styles/whoWeAre.css";
import "../styles/design/designBox.css"
function DesignBox() {

  const mockCourses= [ 
    { 
      name: "PINTURA",
      content: "como pintar las uñas",
      img: "https://picsum.photos/id/3/200/300",
      done: false
    },
      { 
        name: "COLORES",
        content: "como pintar CON COLORES las uñas",
        img: "https://picsum.photos/id/1/200/300",
        done: false
      }, 
      { 
        name: "CABELLO",
        content: "info del curso de cabello",
        img: "https://picsum.photos/id/2/200/300",
        done: false
      }, 
  
  ] 


  return (    
    <>
      {mockCourses.map( (course, index) => (
        <div className="DesignBox">
          <div className="cardText">
            <h1 className="title">{course.name}</h1>
            <p className="subTitle">{course.content}</p>
          </div>
               
            <img src={course.img} key={index}/>
     
        </div>
        )
      )}    
      </>
  )
}
export default DesignBox;
