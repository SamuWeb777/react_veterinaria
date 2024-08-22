import React from 'react'

function StatusCaninos({ nombre, edad, sexo, raza, tamaño }) {
    return (
      <li>
        <h3>{nombre}</h3>
        <p><strong>Edad:</strong> {edad}</p>
        <p><strong>Sexo:</strong> {sexo}</p>
        <p><strong>Raza:</strong> {raza}</p>
        <p><strong>Tamaño:</strong> {tamaño}</p>
      </li>
    );
  }
function CaninoInfo() {
    const Caninos = [

        {
      
          id:1,
      
          nombre: "Firulais",
      
          edad: 3 + " Años Humanos",
      
          sexo: "Macho",
      
          raza: "pastor aleman",
      
          tamaño: "grande",
      
        },
      
        {
      
          id:2,
      
          nombre: "Maya",
      
          edad: 4 + " Años Humanos",
      
          sexo: "Hembra",
      
          raza: "pug",
      
          tamaño: "chico",
      
        },
      
        {
      
          id:3,
      
          nombre: "Pipo",
      
          edad: 5 + " Años Humanos",
      
          sexo: "Macho",
      
          raza: "pastor",
      
          tamaño: "mediano",
      
        },
      
        {
      
          id:4,
      
          nombre: "pacha",
      
          edad: 4 + " Años Humanos",
      
          sexo: "Hembra",
      
          raza: "pastor",
      
          tamaño: "chico",
      
        },
      
        {
      
          id: 5,
      
          nombre: "Tara",
      
          edad: 8 + " Años Humanos",
      
          sexo: "Hembra",
      
          raza: "Pitbull",
      
          tamaño: "grande",
      
        }
      
      ];
      const caninos = Caninos.map((canino) =>(
        <StatusCaninos key={canino.id} nombre={canino.nombre} edad={canino.edad} sexo={canino.sexo} raza={canino.raza} tamaño={canino.tamaño}/>
      ));
     
  return (
    <div><ul>{caninos}</ul></div>
  )
}

export default CaninoInfo