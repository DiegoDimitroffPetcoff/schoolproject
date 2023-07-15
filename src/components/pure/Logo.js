import "../../styles/logos/logo1.css"
function Logo() {
   const handleClick = () => {
      window.location.href = '/';
    };
   return ( <i className="logo1" onClick={handleClick}>
   Zucarelita. Nails
   </i>)
}
export default Logo;