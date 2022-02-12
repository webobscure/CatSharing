import React, { useState, useEffect } from 'react'

import Button from '@mui/material/Button';
import DeleteCat from './layout/DeleteCat'

import { DataGrid } from '@mui/x-data-grid';


const renderDetailsButton = () => {
    return (
        <>
        <Button
        variant='contained'
        color='primary'
        onClick={() => {
            console.log('It worked');
        }}>
            Edit
        </Button>
        <DeleteCat />
        </>
        
    )
}

const columns = [
    { field: 'id', headerName: 'id' },
    { field: 'nameCat', headerName: 'nameCat', },
    { field: 'color', headerName: 'Color ' },
    { field: 'price', headerName: 'price' },
    { field: 'age', headerName: 'age' },
    { field: 'isBooked', headerName: 'Booked cat' },
    { field: 'createdAt', headerName: 'Data created cat' },
    { field: 'breed', headerName: 'Breed cat' },
    { field: 'image', headerName: 'image' },
    {
        field: 'actions',
        headerName: 'actions',
        width: 200,
        renderCell: renderDetailsButton,
        
    }
]



const DataTable = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch(`https://internship.apps.robotbull.com/cats`)
            .then(resp => resp.json())
            .then(resp => setTableData(resp.items))
    }, [])


    return (
        <div style={{ height: 700, width: '100%' }}>
            <DataGrid
                rows={tableData}
                columns={columns}

            />

        </div>
    )
}

export default DataTable