import Carousel from 'react-bootstrap/Carousel';

function Carrousel({imagen}) {
  return (
    <Carousel slide wrap>
      {imagen.map((img, index)=>(

          <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={img}
          alt={index}
      
        />
        
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>)
)}
    </Carousel>
  );
}

export default Carrousel;