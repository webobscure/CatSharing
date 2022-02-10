import './App.css';
import  DataTable  from './components/DataTable';
import AddCat from './components/cats/AddCat';
import EditCat from './components/cats/EditCat';
import Cat from './components/cats/Cat'

import {  Route,
          Routes} from 'react-router-dom'



function App() {

 


  return (
  
    <>
    <h1 className='brand'>CatShare</h1>
    <Routes>
      <Route path="/" element={<DataTable/>} />
      <Route path="cats/add" element={<AddCat/>} />
      <Route path="/cats/edit/:id" element={<EditCat/>} />
      <Route path="/cats/:id" element={<Cat/>} />
    </Routes>
    </>
  );
}

export default App;
