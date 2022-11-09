
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Style/style.css'
import TryAnt from './Components/TryAnt';
import Edit from './Pages/Edit';
import View from './Pages/View';
import Navbar from './Components/Navbar';
import AddUser from './Pages/AddUser';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<TryAnt/>}/>
        <Route path='/view-user/:id' element={<View/>}/>
        <Route path='/edit-user/:id' element={<Edit/>}/>
        <Route path='/add-user/' element={<AddUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
