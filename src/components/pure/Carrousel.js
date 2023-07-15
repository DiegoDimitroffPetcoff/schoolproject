import Carousel from 'react-bootstrap/Carousel';

function Carrousel({imagen}) {
  return (
    <Carousel slide  fade>
      {imagen.map((img, index)=>(

          <Carousel.Item key={index}>
        <img
              className="d-block w-300"
          style={{ objectFit: 'contain', maxHeight: '450px', width:"100%"}}
          src={img}
          alt={index}
      
        />
        
        <Carousel.Caption>
          <h3>Estas sin imagenes Ramdom</h3>
          <p>Son de prueba para mostrar el trabajo.</p>
        </Carousel.Caption>
      </Carousel.Item>)
)}
    </Carousel>
  );
}

export default Carrousel;