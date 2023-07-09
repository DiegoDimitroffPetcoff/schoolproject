import Logo from "../components/pure/Logo";
import Bottom from "../components/pure/Buttom";
import Alert from "../utils/alertTest";
function HomePage() {
  return (
    <div>
      <Logo></Logo> <Bottom string="Registrarse" action={Alert}></Bottom>
      Home Page
    </div>
  );
}
export default HomePage;
