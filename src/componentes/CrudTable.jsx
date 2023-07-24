import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({data, setDataToEdit, deleteData}) => {
    return(
        <div>   
            <h5>Tabla de datos</h5>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    {data.length === 0 ? <tr><td colSpan="3">Sin Datos</td></tr> : 
                    data.map(el => <CrudTableRow key={el.id} row={el} setDataToEdit={setDataToEdit} deleteData={deleteData} />)}

                </tbody>
            </table>
        </div>
    )
}

export default CrudTable;