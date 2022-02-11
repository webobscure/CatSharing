import './App.css';
import DataTable from './components/DataTable';
import AddCat from './components/cats/AddCat';
import EditCat from './components/cats/EditCat';
import Cat from './components/cats/Cat'
import Modal from './components/layout/Modal'
import { Typography } from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';

import { Route, Routes } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    textAlign: "center",
    fontSize: "35px",
    color: "#051364"
  }
}))


function App() {
  const styles = useStyles()



  return (

    <>
      <Typography className={styles.root} component="h1" variant="h5" >CatShare</Typography>
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="cats/add" element={<AddCat />} />
        <Route path="/cats/edit/:id" element={<EditCat />} />
        <Route path="/cats/:id" element={<Cat />} />
        <Route path="/cats/create_cat" element={<Modal />} />
      </Routes>
    </>
  );
}

export default App;
