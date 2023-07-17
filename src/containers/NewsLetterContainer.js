import "../styles/sectionOne.css";

import NewsLetterForm from "../components/forms/newsLetterForm";

function NewsLetter() {
  return (
    <div className="SectionContainerOne">
      <h1 className="title">NEWS LETTER</h1>
      <p className="subTitle">
        Recibi todas las novedades de nuestro espacio en tu correo electronico!
      </p>
      <NewsLetterForm />
    </div>
  );
}
export default NewsLetter;
