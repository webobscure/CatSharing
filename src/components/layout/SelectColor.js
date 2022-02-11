import React, { forwardRef, useState } from 'react'
import {  FormControl, InputLabel, makeStyles} from '@material-ui/core'
import { Select } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        width: '395px'
    }
}))

const SelectColor = forwardRef(({children, props}, ref) => {
    const styles = useStyles()

    const [color, setColor] = useState('')

    const handleChange = (event) => {
        setColor(event.target.value)
    }
  

   
    return (
        <FormControl >
            <InputLabel id="color">Color</InputLabel> 
            <Select
            className={styles.root}
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