import { Link } from "react-router-dom"
import "../../styles/avatar/avatar.css"

function Avatar() {
    return(
    <Link to="/dashboard">
    <img className="avatarProfile" src="vaninazucarelli.png"></img>
    </Link>
    )
}
export default Avatar