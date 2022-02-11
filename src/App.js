import './App.css';
import DataTable from './components/DataTable';
import AddCat from './components/cats/AddCat';
import EditCat from './components/cats/EditCat';
import Cat from './components/cats/Cat'
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/material';

import { Route, Routes } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontSize: "35px",
    color: "blue"
  }
}))


function App() {
  const styles = useStyles()



  return (

    <>
      <Typography className={styles.root} component="h1" variant="h5">CatShare</Typography>
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="cats/add" element={<AddCat />} />
        <Route path="/cats/edit/:id" element={<EditCat />} />
        <Route path="/cats/:id" element={<Cat />} />
      </Routes>
    </>
  );
}

export default App;
