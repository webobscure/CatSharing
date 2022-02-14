import React, { forwardRef, useState } from 'react'
import { FormControl, InputLabel } from '@mui/material'

import { Select } from '@mui/material'



const SelectColumn = forwardRef(({ children, props }, ref) => {

    const [column, setColumn] = useState('')

    const handleChange = (event) => {
        setColumn(event.target.value)
        console.log(event.target.value);
    }


    return (
        <FormControl >
            <InputLabel id="isBookedNow">Breed</InputLabel>
            <Select
                className='select'
                id="isBooked"
                value={column}
                ref={ref}
                onChange={handleChange}
                {...props}
            >
                {children}
            </Select>
        </FormControl>
    )
})

export default SelectColumn