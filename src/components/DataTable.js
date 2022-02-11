import React, { useState,useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    {field: 'id', headerName:  'id'},
    {field: 'nameCat', headerName: 'nameCat',  },
    {field: 'color', headerName: 'Color ' },
    {field: 'price', headerName: 'price' },
    {field: 'age', headerName: 'age' },
    {field: 'isBooked', headerName: 'Booked cat' },
    {field: 'createdAt', headerName: 'Data created cat'},
    {field: 'breed', headerName: 'Breed cat' },
    {field: 'image', headerName: 'image' },
]

const DataTable = () => {

    const [tableData, setTableData] = useState([])

    useEffect(() => {
        fetch(`https://internship.apps.robotbull.com/cats`)
        .then(resp => resp.json())
        .then(resp => setTableData(resp.items))
    },[])


    return (
        <div style ={{height: 700,width: '100%'}}>
            <DataGrid 
                rows = { tableData }
                columns = { columns}
                checkboxSelection 
                
            />
        </div>
    )
}

export default DataTable