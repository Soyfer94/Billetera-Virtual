import './App.css'
import Form from './componentes/CriptoForm';
import CrudApp from './componentes/CrudApp';
import Formulario from './componentes/Formulario';
import FormularioControlado from './componentes/FormularioControlado';
import Navbar from './componentes/barra';
import Card from './componentes/card';
import Portada from './componentes/portada';



const App = () => {
    return (
    <div className="App">
      
      <Navbar/>
      <Portada/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Formulario/>
      <FormularioControlado/>
      <Form/> "(no tocar)"
      <CrudApp/> "(no tocar)"
      
      
    </div>
    );
}

export default App; 
