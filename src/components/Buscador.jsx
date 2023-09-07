import React from "react";


const BuscarFeriado = (props) =>{
    return(
        <div className="search d-flex flex-column justify-content-start p-4 text-bg-light">
            <label htmlFor="BuscarPor" className="me-2">Buscar feriado por nombre, fecha o tipo:</label>
            <input type="text" className = "rounded-pill border border-4 mt-2 ps-2" id="buscarPor" onChange = {(e) => props.search(e.target.value) }/>
        </div>
    );

}

export default BuscarFeriado;