import React, {useRef} from "react";
import formulario from "./formulario.scss"


export default function Formulario () {
    let formRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current)
        const value = Object.fromEntries(formData);
        console.log(value)

    }
    return(

        <div class="container">
            
            <div class="ingreso">
                <iframe width="128" height="128" src="https://cdn-icons-png.flaticon.com/128/5593/5593348.png" frameborder="0" allowfullscreen></iframe>
            
            </div>

            <form onSubmit={handleSubmit} ref={formRef}>
                <h4 className="tituloform">TuUNSTA</h4>
                <label htmlFor="email">Correo electronico</label>
                <input type="email" id="email" name="email" /> <br/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password" /> <br/>
                <button type="submit">Ingresar</button>

            </form>
        </div>
    )
}