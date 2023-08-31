import "../../styles/sectionOne.css";
import "../../styles/course/courseIn/courseInContainer.css"
import Cookies from "js-cookie"

function CourseIn() {
  let courseCookie = Cookies.get("course");
  let course = JSON.parse(courseCookie)

  return (    
  <>
  <div className="courseInContainer">
  <h1 className="title"> Taller: {course.name}</h1>
  <h3 className="subTitle">  Informacion: {course.content}</h3>
  <img src={course.img}/>
  </div>
  <div>
    <h1>CLASES</h1>
    VIDEO1
    VIDEO2
    VIDEO3
    VIDEO4
  </div>
  </>
  )
}
export default CourseIn;
