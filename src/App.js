import logo from './logo.svg';
import './App.css';
import { AddUsers } from './components/AddUsers';
import { GetUsers } from './components/GetUsers';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <AddUsers/>
     <GetUsers/>
     
    </div>
  );
}

export default App;
