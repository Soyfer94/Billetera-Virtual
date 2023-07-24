/*import React, {useEffect, useState} from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";


    const initialDB = [
        {
            "id": 1,
            "name": "Fernando",
            "lastname": "Acosta"
        },
        {
            "id": 2,
            "name": "Rosario",
            "lastname": "Giandiois"
        },
        {
            "id": 3,
            "name": "Fernando",
            "lastname": "Sanchez"
        }]

const CrudApp = () => {

        const [db, setDb] = useState(initialDB)
        const [dataToEdit, setDatatoEdit] = useState(null)
        


        const createData = (data) => {
            data.id = Date.now();
            setDb([...db, data])
        }
        const updateData = (data) => {
            let newData = dn.map((el) => el.id === data.id ? data : el)
            setDb(newData)
        }
        const deleteData = (id) => {
            let isDelete = window.confirm('Estas seguro que desea eliminar este registro ${id}')
            if(isDelete){
                let newData = db.filter(el => el.id !== id)
                setDb(newData)
            }
        }


    return (
                <div>
                    <h2>CrudApp (Formulario) </h2>
                    <CrudForm createData={createData}  updateData={updateData} dataToEdit={dataToEdit} setDatatoEdit={setDatatoEdit} />
                    <CrudTable data={db} setDatatoEdit={setDatatoEdit} deleteData={deleteData} />
                    <table></table>
                </div>
    )
}

export default CrudApp;

*/