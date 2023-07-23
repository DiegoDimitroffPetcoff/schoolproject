//import { useContext } from "react";

import { FaCalendar} from 'react-icons/fa';

import "../../styles/sectionOne.css";
import "../../styles/whoWeAre.css";
import "../../styles/dashboard.css"

//import authContext from "../../contexts/authContext";


function Appointment() {


  //const {adm, setAdm, logged, setLogged} = useContext(authContext)

  return (
    <div className="AppointmentContainer">
      <div className="DashboardBox">
      <h1 className="AppointmentTitle">TUS TURNOS/AGENDA</h1>
      <FaCalendar className="AppointmentIcon"/>
      </div>
  </div>
  );
}
export default Appointment;
