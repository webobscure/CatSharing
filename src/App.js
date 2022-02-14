import './App.css';
import DataTable from './components/DataTable';
import Cat from './components/cats/Cat'
import { Typography } from '@mui/material'; 


import { Route, Routes } from 'react-router-dom'
import CatManage from './components/layout/CatManage';



function App() {

 

  return (

    <>
      <Typography className='brand-name' component="h1" variant="h5" >CatShare</Typography>
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="/cats/edit/:id" element={<CatManage />} />
        <Route path="/cats/:id" element={<Cat />} />
        <Route path="/cats/create_cat" element={<CatManage />} />
      </Routes>
    </>
  );
}

export default App;
