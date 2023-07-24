import React, {useRef} from "react";
import Formuario from "./formulario.scss"

export default function Formulario () {
    let formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current)
        const value = Object.fromEntries(formData);
        console.log(value)

    }
    return(
        <form onSubmit={handleSubmit} ref={formRef}>
            <h4>Ingresar</h4>
            <label htmlFor="email">Ingrese su mail</label>
            <input type="email" id="email" name="email" /> <br/>
            <label htmlFor="password">Ingrese su contraseña</label>
            <input type="password" id="password" name="password" /> <br/>
            <button type="submit">Enviar</button>

        </form>
    )
}