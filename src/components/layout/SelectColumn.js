import React, { forwardRef, useState } from 'react'
import { FormControl, InputLabel, makeStyles } from '@material-ui/core'
import { Select } from '@material-ui/core'
import { MenuItem } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        width: '395px'
    }
}))

const SelectColumn = forwardRef((props, ref) => {
    const styles = useStyles()

    const [column, setColumn] = useState('')

    const handleChange = (event) => {
        setColumn(event.target.value)
        console.log(event.target.value);
    }


    return (
        <FormControl >
            <InputLabel id="isBookedNow">Breed</InputLabel>
            <Select
                className={styles.root}
                id="isBooked"
                value={column}
                ref={ref}
                onChange={handleChange}
                {...props}
            >
                <MenuItem  value='Scottish'>Scottish</MenuItem>
                <MenuItem  value='British'>British</MenuItem>
                <MenuItem  value='Egypt'>Egypt</MenuItem>

            </Select>
        </FormControl>
    )
})

export default SelectColumn