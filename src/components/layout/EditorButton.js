import React from 'react'

import Button from '@mui/material/Button';



const EditorButton = () => {
const editCell = (data) => {
    console.log('It worked', data)
}

    return (
        <>
        <Button
                variant='contained'
                color='primary'
                onClick={editCell}
                >
                Edit
            </Button>
            
        </>
    )
}


export default EditorButton