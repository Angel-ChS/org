//import { useState } from "react";
import "./Campo.css"; 

const Campo = ( props ) => {

    //console.log("Datos; ", props.titulo);
    
    const placeholderModificado = `${props.placeholder}...`;
    
    //const [valor, actualizarValor] = useState("");

    //Destructuracion 
    const { type = "text"} = props; //En caso de que por props no este definido type, pues tomara como valor el "text"

    const manejarCambio = (e) =>{

        //console.log("cambio",e.target.value);
        props.actualizarValor(e.target.value);
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        /> 
    </div>
}

export default Campo;