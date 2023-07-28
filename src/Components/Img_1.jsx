import Image from 'react-bootstrap/Image';
import React from 'react';


function img_1() {

const style_img = {
    width: '600px',
    height: '400px',

    position: 'absolute', // Añadimos 'position: absolute'
    top: '180px', // Ajusta esta propiedad para definir la posición vertical (desde arriba)
    left: '700px', // Ajusta esta propiedad para definir la posición horizontal (desde la izquierda)
}

  return (


    <Image fluid style={style_img} src="https://img.remediosdigitales.com/c0d1d0/a218765_large/1366_2000.jpg"/>
  );
}

export default img_1;