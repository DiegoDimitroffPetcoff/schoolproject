import "../../styles/buttoms/buttom1.css"
function Buttom2(props) {
  return <button className="buttom2" onClick={props.action}>{props.string}</button>;
}
export default Buttom2;
