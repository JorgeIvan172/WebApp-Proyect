import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function cart_1() {

    const cart_1Style = {
        width: '450px',
        height: '100px',
        position: 'absolute', // Añadimos 'position: absolute'
        top: '200px', // Ajusta esta propiedad para definir la posición vertical (desde arriba)
        left: '250px', // Ajusta esta propiedad para definir la posición horizontal (desde la izquierda)
        

    };

    const Button1Style = {
    
      color: 'white',// Color de los enlaces del Navbar
      backgroundColor: 'black',
      fontWeight: 'bold',
      borderColor:'black',
      // Puedes agregar más propiedades de estilo según tus necesidades
    };

    const Paddingg_bottom = {
      paddingBottom: '20px',

    }
    const Paddingg_bottom1 = {
      paddingBottom: '15px',

    }


  return (
    <div style={cart_1Style}>
        <Card className="border-0">
      <Card.Body>
        <h1 style={Paddingg_bottom}>
          With supporting text below as a natural lead-in to additional content.
        </h1>
        <h3 style={Paddingg_bottom1}>
        Problemas Musculares, lesiones y enfermedades
        </h3>
        <Button style={Button1Style} variant="primary" >Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default cart_1;