import {useState} from 'react'; 
import {v4 as uuid} from "uuid"; //Importamos libreria para crear ID
import './App.css';
import Header from './componentes/Header/Header';/* podemos poner en el nombre del archivo Header.js o solo Header (en react no importa lo puede entender)*/
import Formulario from "./componentes/Formulario/Formulario"; 
import MiOrg from './componentes/MiOrg'; 
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false); 

  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End", 
    foto: "https://github.com/Angel-ChS.png",
    nombre: "Angel Chan",
    puesto: "Front End JR",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación", 
    foto: "https://github.com/Angel-ChS.png",
    nombre: "Angel Chan",
    puesto: "Front End JR", 
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño", 
    foto: "https://github.com/Angel-ChS.png",
    nombre: "Angel Chan",
    puesto: "Front End JR",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión", 
    foto: "https://github.com/Angel-ChS.png",
    nombre: "Angel Chan",
    puesto: "Front End JR", 
    fav: false
  },
  {
    id: uuid(),
    equipo: "Front End", 
    foto: "https://github.com/Angel-ChS.png",
    nombre: "Yo Chan",
    puesto: "Front End JR", 
    fav: false
  }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science", 
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF", 
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    } 
  ]);

  //Ternario (operador ternario) ---> condicion ? seMuestra : noSeMuestra
  /* estas declaraciones son las mismas, son las que estan abajo 
  {mostrarFormulario === true ? <Formulario /> : <div></div>}-----> esta fue la primera 
  {mostrarFormulario ? <Formulario /> : <></>}-----> esta es la simplificada
  los simbolos vacios se llaman fragments y se usa para no tener elementos que puedan afectar el estilo visual de la aplicacion
  */
  /* otra forma mucho más corta de hacer lo de arriba es con los llamados cortocircuito 
  corto-circuito ----> condicion && seMuestra
  donde se pode la condicion y si se cumple, pues se muestra y sino se cumple pues no pasa nada 
  {mostrarFormulario && <Formulario /> }
  */

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {

    console.log("Nuevo colaborador", colaborador)

    //Spread operator ----> Esto es como una copia de los valores originales(actuales) y le agregamos los nuevos datos
    //[...]--->operador Spread despues utilizamos el arreglo con los valores a copiar(valores actuales) y despues los nuevos datos a agregar
    //[...(arregloACopiar),(valoresAAgreagr)]----> [...colaboradores, colaborador]
    actualizarColaboradores([...colaboradores, colaborador]);

  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador", id); 
    
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id) 
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo)=>{
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }
      
      return(equipo);
    })

    actualizarEquipos(equiposActualizados);
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    //Con estos utilizamos la funcion del estado equipos, donde hacemos un arreglo el cual tendra la copia "..."
    //de los equipos actuales y se agregara un nuevo objeto(equipo) con los datos copiados "..." que vienen como
    //parametros llamados nuevoEquipo y le agregamos la id utilizando el metodo uuid()
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])//lee lo de arriba padrino
  }

  const like = (id) =>{
    console.log("Like a: ", id);

    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return(colaborador);
    }) 
    actualizarColaboradores(colaboradoresActualizados);
  }

  //Lista de quipos 
 /* const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science", 
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF", 
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    } 
  ]*/

  return (
    <div>

      <Header /> 

      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map( (equipo) => equipo.titulo )} 
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        /> 
      }

      <MiOrg cambiarMostrar={cambiarMostrar}/>

      {
        equipos.map( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
      }

      <Footer />

    </div>
  );
}

export default App;
