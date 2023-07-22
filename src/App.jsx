import './App.css'
import Navbar from './componentes/barra';
import Card from './componentes/card';
import Portada from './componentes/portada';



const App = () => {
    return (
    <div className="App">
      
      <Navbar/>
      <Portada/>
      <Card/>
      
    </div>
    );
}

export default App; 
