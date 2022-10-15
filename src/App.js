import logo from './logo.svg';
import './App.css';
import {Route, Routes } from "react-router-dom"
import {Products}  from "./Components/products"
import {Cart} from "./Components/Cart"
function App() {
  return (
    <div className="App">
    {/* <Products/> */}
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    </div>

  );
}

export default App;
