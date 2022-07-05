import logo from './logo.svg';
import './App.css';
import { AddUsers } from './components/AddUsers';
import { GetUsers } from './components/GetUsers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<GetUsers/>}/>
    <Route path="/post" element={<AddUsers/>} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
