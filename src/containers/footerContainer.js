import { FaInstagram,FaFacebook, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

import "../styles/footer.css"

function Footer() {
    
    return(
    
        <div className="FooterContainer">
        <p className="subTitle"><FaInstagram/></p>
        <p className="subTitle"><FaFacebook/></p>
        <p className="subTitle"><FaMapMarkerAlt/></p>
        <p className="subTitle"><FaPhoneAlt/></p>
            
        </div>
      
    )
}
export default Footer