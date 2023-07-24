import './App.css'
import CryptoTable from './componentes/API';

import Crypto from './componentes/Crypto';

import Formulario from './componentes/Formulario';
import FormularioControlado from './componentes/FormularioControlado';
import Navbar from './componentes/barra';
import Card from './componentes/card';
import Portada from './componentes/portada';



function App ()  {
    return (
    <div className="App">
      
      <Navbar/>
      <Portada/>
      <Card/>
      <Formulario/>
      <FormularioControlado/>
      <h1 className='text-center'>React - Crypto</h1>
      <Crypto/>

      <CryptoTable/>
      
    </div>
    );
}

export default App; 

/*
import Form from './componentes/CriptoForm';
import CrudApp from './componentes/CrudApp';

<Form/> "(no tocar)"
      <CrudApp/> "(no tocar)"
      */