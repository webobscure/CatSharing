import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Cat = () => {
    const [cat, setCat] = useState({
        id: "",
        nameCat: "",
        color: "",
        price: "",
        age: "",
        isBooked: "",
        createdAt: "",
        breed: {
            breedID: "",
            nameBreed: "",
            createdAt: ""
        },
        image: "",
    });
    const { id } = useParams();
    useEffect(() => {
        fetch()
    })
}