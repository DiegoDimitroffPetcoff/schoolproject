
import NewsLetterForm from "../components/pure/forms/newsLetterForm";
import "../styles/sectionOne.css";
function NewsLetter() {
  return (
    <div className="SectionContainerOne">
      
        <h1 className="title">NEWS LETTER</h1>
        <p className="subTitle">
          Recibi todas las novedades de nuestro espacio en tu correo
          electronico!
        </p>
        <NewsLetterForm/>
      </div>
  
  );
}
export default NewsLetter;
