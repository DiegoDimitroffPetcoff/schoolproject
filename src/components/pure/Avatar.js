import { Link } from "react-router-dom"
import "../../styles/avatar/avatar.css"

import Cookies from "js-cookie"


function Avatar() {
    const user = JSON.parse(Cookies.get("userData"))
    return(
    <Link to="/dashboard">
    <img className="avatarProfile" src={"https://api.dicebear.com/6.x/open-peeps/svg?seed="+ user.avatar} ></img>
    </Link>
    )
}
export default Avatar