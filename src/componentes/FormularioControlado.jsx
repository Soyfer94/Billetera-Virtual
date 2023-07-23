import React, {useState} from "react";

export default function FormularioControlado(){
    const [form, setForm] = useState({});
    const handleChange = (e) => {
        setForm({
            ...form,[e.target.name]:e.target.value
        })
    }
   

    const handleChecked = (e) => {
        setForm({
            ...form,[e.target.name]:e.target.checked
        })
    }
  


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        
        alert("El formulario se ha enviado")

    }

    return(
        <>
        <h2>Formulario cripto</h2>
        <form onSubmit={handleSubmit} >
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre"  onChange={ handleChange } />
            <p>Elije tu cripto</p>
            <input type="radio" id="BTC" name="sabor" value="BTC" onChange={handleChange} defaultChecked/>
            <label htmlFor="BTC">Bitcoin</label>

            <input type="radio" id="ETH" name="sabor" value="ETH" onChange={handleChange} />
            <label htmlFor="react">Etherium</label>

            <input type="radio" id="USDT" name="sabor" value="USDT" onChange={handleChange} />
            <label htmlFor="USDT">USDT</label>

            <input type="radio" id="ADA" name="sabor" value="ADA" onChange={handleChange} />
            <label htmlFor="ADA">ADA</label>

            <input type="radio" id="LTC" name="sabor" value="LTC" onChange={handleChange} />
            <label htmlFor="LTC">Litecoin</label>

            <p>Elije tu cripto a comprar</p>
            <select name="lenguaje" onChange={handleChange}  defaultValue="">
                <option value="">---</option>+
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Etherium</option>
                <option value="USDT">USDT</option>
                <option value="ADA">ADA</option>
                <option value="LTC">Litecoin</option>
            </select> <br />
            
            <label htmlFor="terminos">Aceptar Terminos y Condiciones</label>
            <input type="checkbox" id="terminos" name="terminos" onChange={handleChecked}/>

            <input type="submit" />
        </form>
        </>
    )
}