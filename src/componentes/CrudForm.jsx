/* import React, { useState, useEffect } from "react";


const initialForm = {
    id: null,
    name: "",
    username: ""
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) =>{
    const[form, setForm] = useState(initialForm)

    useEffect(() =>{
        console.log(dataToEdit)
        if(dataToEdit){
            setForm(dataToEdit)
        }else{
            setForm(initialForm)
        }
    }, [dataToEdit])


    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!form.name || !form.username){
            alert("Datos incompletos")
            return
        }
        if(form.id === null){
            createData(form);
        }else{
            updateData(form);
        }
        handleReset();
    }
    const handleReset = (e) => {
        setForm(initialForm)
        setDatatoEdit(null)
    }


    return(
            <div>
                <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Ingrese su nombre" onChange={handleChange} value={form.name}/>
                    <input type="text" name="lastname" placeholder="Ingrese su apellido" onChange={handleChange} value={form.username}/>
                    <input type="submit" value="Enviar" onClick={handleSubmit} />
                    <input type="reset" value="ELimpiar" onClick={handleReset} />
                </form>
            </div>
    )
}

export default CrudForm;

*/