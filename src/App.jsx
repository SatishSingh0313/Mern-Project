import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivatComponent from './components/PrivateComponent';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Nav/>

     <Routes>
      <Route element={<PrivatComponent/>}/>

      <Route path="/" element={<h1>Product Listing Component</h1>}>
      <Route path="/add" element={<h1> Add Product Component</h1>}></Route>
      <Route path="/update" element={<h1> Update Product Component</h1>}></Route>
      <Route path="/logout" element={<h1> Logout Component</h1>}></Route>
      <Route path="/profile" element={<h1> Profile Product Component</h1>}></Route>
      </Route>
      
      <Route path="/signup" element={<SignUp/>}></Route>
     </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
