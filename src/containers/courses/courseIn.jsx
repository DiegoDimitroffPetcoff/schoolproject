import "../../styles/sectionOne.css";
import "../../styles/course/courseIn/courseInContainer.css"
import Cookies from "js-cookie"
import { byAngle } from "@cloudinary/url-gen/actions/rotate";
import Buttom from "../../components/pure/Buttom2"
import { useState } from "react";



function CourseIn() {
  let courseCookie = Cookies.get("course");
  let course = JSON.parse(courseCookie);
  let [toggleButton, setToggleButon] = useState(false)

  let mockVideos = [
    { video: "https://res.cloudinary.com/demo/video/upload/elephants" },
    { video: "https://youtube.com/watch?v=DFg1V-rO6Pg&t=4716s" },
  ];

  const [videoStates, setVideoStates] = useState(
    mockVideos.map(() => false) // Inicializa todos los estados como falso
  );

  const handleToggle = (index) => {
    const updatedStates = [...videoStates]; 
    updatedStates[index] = !updatedStates[index]; 
    setVideoStates(updatedStates); 
    setToggleButon(!toggleButton)
  };

  return (
    <>
      <div className="courseInContainer">
        <h1 className="title"> Taller: {course.name}</h1>
        <h3 className="subTitle"> Informacion: {course.content}</h3>
        <img src={course.img} alt={course.name} />
      </div>

      
        {mockVideos.map((video, index) => (
          <div className="courseInContainer"key={index}>
            <Buttom
              string={toggleButton ? ("Cerrar") : ("Ver video")}
              action={() => handleToggle(index)}
            />
            {videoStates[index] && (
              <video
                className="courseInContainer"
                style={{ width: "50%", margin: "0 auto" }}
                controls
              >
                <source src={video.video} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
   
    </>
  );
}

export default CourseIn;
