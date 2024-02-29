import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivatComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProdcutList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import ViewProduct from './components/ViewProduct';
import Profile from './components/Profile';

function App() {
  return (
    <div className="">
    <BrowserRouter>
     <Nav/>

     <Routes>
      
      <Route element={<PrivatComponent/>}>
        
      <Route path="/" element={<ViewProduct/>}></Route>
      <Route path="/list" element={<ProdcutList/>}></Route>
      <Route path="/add" element= {<AddProduct/>} ></Route>
      <Route path="/update/:id" element={<UpdateProduct/>}></Route>
      {/* <Route path="/logout" element={<h1> Logout Component</h1>}></Route> */}
      <Route path="/profile" element={<Profile/>}></Route>
      </Route>

      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
     </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
