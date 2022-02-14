import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import axios from 'axios';
import DeleteCat from '../layout/DeleteCat';

const Cat = () => {
    const { id } = useParams()

    const url = `https://internship.apps.robotbull.com/cats/${id}`
    const [cat, setCatData] = useState([])

    let content = null


    useEffect(() => {
        axios.get(url)
            .then(response => {
                setCatData(response.data)
            })
    }, [url])

    if (cat) {

        content = 
            <>
                <Container container="main" maxWidth="xs">
                    <Link to="/">Bach to home</Link>
                    <h1>Cat Id: {id} </h1>
                    <hr />

                    <ul className="list-group">
                        <li className="list-group-item">Name cat:  {cat.nameCat} </li>
                        <li className="list-group-item">Color: {cat.color}</li>
                        <li className="list-group-item">Price:  {cat.price}</li>
                        <li className="list-group-item">Age:  {cat.age}</li>
                        <li className="list-group-item">Booked cat:  {cat.isBooked}</li>
                        <li className="list-group-item">Created page of cat: {cat.createdAt} </li>
                        <li className="list-group-item">Breed cat:  </li>
                        <li className="list-group-item">Image of cat: {cat.image} </li>
                        
                        <DeleteCat />
                    </ul>
                    
                </Container>
                </>
    }

    return (
        <>
        {content}
        </>
    )
}

export default Cat