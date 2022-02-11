import React, { forwardRef, useState} from 'react'
import {  FormControl, InputLabel, makeStyles} from '@material-ui/core'
import { Select } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        width: '395px'
    }
}))

const SelectColumn = forwardRef( ({props, children}, ref) => {
    const styles = useStyles()

    const [column, setColumn] = useState('')

    const handleChange = (event) => {
        setColumn(event.target.value)
    }

   
    return (
        <FormControl >
            <InputLabel id="isBookedNow">Booked</InputLabel> 
            <Select
            className={styles.root}
            id="booked"
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