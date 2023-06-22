import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Testimonios de personas que han visitado diferentes destinos turísticos de Argentina</h1>
        <Testimonio
          nombre='María González'
          pais='España'
          imagen='ba'
          cargo='Profesora de Historia'
          empresa='IES'
          testimonio='Mi viaje a Buenos Aires fue una experiencia cultural fascinante. Quedé asombrada por la riqueza histórica de la ciudad. El barrio de San Telmo con sus calles empedradas y sus antiguas casonas coloniales me transportó a otra época. Además, visitar el famoso Cementerio de la Recoleta fue como adentrarse en una galería de arte al aire libre. Buenos Aires tiene un encanto único que no se puede describir con palabras'/>
        <Testimonio
          nombre='Juan López'
          pais='Uruguay'
          imagen='cataratas'
          cargo='Empleado de comercio'
          empresa='lavandería'
          testimonio='Mi visita a las Cataratas de Iguazú fue simplemente espectacular. Como latina, me sentí verdaderamente orgullosa de tener esta maravilla natural en mi propio país. Desde el momento en que llegué, quedé impresionada por la majestuosidad de las cataratas. El sonido ensordecedor del agua cayendo y la bruma en el aire creaban una atmósfera mágica.'/>
        <Testimonio 
          nombre='Hans Müller'
          pais='Alemania'
          imagen='humauaca'
          cargo='Ingeniero de Software'
          empresa='STechnoTech GmbH'
          testimonio='La hospitalidad de la gente de Humahuaca fue excepcional. Desde el momento en que llegué, me sentí bienvenida y rodeada de calidez. Pude sumergirme en la cultura local a través de sus festivales, artesanías y deliciosa comida tradicional. Cada rincón de este encantador pueblo tenía una historia que contar, y me sentí afortunada de ser parte de ella, aunque solo fuera por un corto tiempo.'/>
      </div>
    </div>
  );
}


export default App;
