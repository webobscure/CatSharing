import React, { forwardRef, useState } from 'react'
import { FormControl, InputLabel } from '@mui/material'

import { Select } from '@mui/material'


const SelectColor = forwardRef(({ children, props }, ref) => {

    const [color, setColor] = useState('')

    const handleChange = (event) => {
        setColor(event.target.value)
        console.log(event.target.value);
    }



    return (
        <FormControl >
            <InputLabel id="color">Color</InputLabel>
            <Select
                className='select'
                id="color"
                value={color}
                ref={ref}
                onChange={handleChange}
                {...props}>
                {children}
            </Select>
        </FormControl>
    )
})

export default SelectColor