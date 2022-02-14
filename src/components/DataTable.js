import React, { useState, useEffect } from 'react'

import EditorButton from './layout/EditorButton'
import DeleteCat from './layout/DeleteCat'
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';





const renderDetailsButton = () => {
    return (
        <>
        <EditorButton />
        <DeleteCat />
        </>
        
    )
}

const columns = [
    { field: 'id', headerName: 'id' },
    { field: 'nameCat', headerName: 'nameCat'},
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
                style={{marginTop:'20px'}}
            />
            <Link to='cats/create_cat'  >
                <Button variant='contained' className='btn-add'>
                Add cat
                </Button>
            </Link>
        </div>
    )
}

export default DataTable