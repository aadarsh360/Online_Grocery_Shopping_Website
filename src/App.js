import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Contents } from './components/Contents';
import { ShoppingCart } from './components/Shopping-Cart';
import { Switch } from 'react-router-dom';


export default function App() {
  return (
    <div className="m-2">
      <Navbar/>

      <Switch>
        <Route path='/shopping-cart' component={ShoppingCart}/>
        <Route path='/' component={Contents}/>
      </Switch>
    </div>
  );
}


//export default App;
