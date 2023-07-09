import "../../styles/buttoms/buttom1.css"
function Buttom(props) {
  return <button className="buttom1" onClick={props.action}>{props.string}</button>;
}
export default Buttom;
