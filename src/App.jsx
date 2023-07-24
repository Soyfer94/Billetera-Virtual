import './App.css'
import Form from './componentes/CriptoForm';
import CrudApp from './componentes/CrudApp';
import Formulario from './componentes/Formulario';
import FormularioControlado from './componentes/FormularioControlado';
import Navbar from './componentes/barra';
import Card from './componentes/card';
import Card2 from './componentes/card2';
import Card3 from './componentes/card3';
import Card4 from './componentes/card4';
import Portada from './componentes/portada';



const App = () => {
    return (
    <div className="App">
      
      <Navbar/>
      <Portada/>
      <Formulario/>
      <Card/>
      <FormularioControlado/>
      <Form/> "(no tocar)"
      <CrudApp/> "(no tocar)"
      
      
    </div>
    );
}

export default App; 
