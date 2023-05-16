import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo"; /*Por definicion al utilizar index.js React por atras busca 
por default este archivo, así que no es necesario especificarlo en la ruta (solo especificamos la carpeta) */
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState(""); //Nuevo estado para el segundo formulario
    const [color, actualizarColor] = useState(""); //Nuevo estado para el segundo formulario

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) =>{
        e.preventDefault();
        //console.log("manejar envio", e);
        let datosAEnviar = {
            nombre: nombre, //nombre,
            puesto: puesto, //puesto,
            foto: foto, //foto
            equipo: equipo //equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) =>{//Con esta funcion la utilizaremos para prevenir el comportamiento por defecto del form
        e.preventDefault(); 
        crearEquipo({titulo, colorPrimario: color})//Se envia esta informacion como objeto, al tener el mismo nombre la llave y el valor, pues gracias a JS podemos ponerlo solo una vez en lugar de poner titulo:titulo, color:color
    }
    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton> 
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hexadecimal" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type={"color"}
            />
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario; 