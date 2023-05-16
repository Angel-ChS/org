//import { useState } from "react";//importante importar esta biblioteca para poder utilizar useState
import "./MiOrg.css"; 

const MiOrg = ( props) => {
    /*Estado ----> utilizando la funcionalidad "Hooks" 
    useState----> useState() ---> esto es una funcion 

    Un useState() se define de la siguiente manera: 
    const [nombreVariable, funcionActualizar] = useState(valorInicial)

    El valorInicial, puede ser cualquier dato: numeros, strings, booleanos, {objetos}, [arreglos]
     */
    //const [nombre, actualizarNombre] = useState("Angel");

    //const [mostrar, actualizarMostrar] = useState(true);

    //const manejarClick = () => {
    //    console.log("Manejar/Ocultar elemento", !mostrar);
    //    actualizarMostrar(!mostrar);
    //}

    console.log(props);

    
    return <section className="orgSection">

        <h3 className="title">Mi Organización</h3>

        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>

    </section>
}

export default MiOrg;