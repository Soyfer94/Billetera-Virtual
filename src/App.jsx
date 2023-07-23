import './App.css'
import Navbar from './componentes/barra';
import Portada from './componentes/portada';
import Cards from './componentes/cards';
import './App.css'


const App = () => {
    return (
    <div className="App">
      
      <Navbar/>
      <Portada/>
      <Cards/>
    </div>
    );
}

export default App; 
