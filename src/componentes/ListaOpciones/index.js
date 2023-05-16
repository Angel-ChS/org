import "./ListaOpciones.css";

const ListaOpciones = (props) => {

    /* Método map ---> arreglo.map( (elemento, index) => {
        return <option></option>
    })
    */

    
    const manejarCambio = (e) => {
        console.log("cambio",e.target.value);
        props.actualizarEquipo(e.target.value);
    }
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map( (equipo, index) =>{
                return <option key={index} value={equipo}>{equipo}</option>
            })
            //nosotros podemos reducir el código de arriba ya que solo nos retorna una linea 
            /* 
            equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)
            */
            }
        </select>
    </div>
}

export default ListaOpciones