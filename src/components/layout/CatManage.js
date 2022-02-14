import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import { FormControl, Button } from '@mui/material'
import { Typography } from '@mui/material'

const CatManage = () => {
    const {
        register,
        defaultValues: preloadedValues,
        formState: { errors },
        handleSubmit
    } = useForm()
    const url = 'https://internship.apps.robotbull.com/cats'
    const { id } = useParams()
    let form = null
    const { data, setData } = useState([])

    const onSubmit = async (data) => {
        await axios.post(`${url}/create_cat`, data)
    }

    const onEdit = async (id, cat) => {
        return axios.put(`${url}/update_cat/${id}`, cat)
    }

    useEffect(() => {
        axios.get(`${url}/${id}`)
            .then((response) => {
                setData(response.data);
            })
    }, [url])


    if (data) {
        form =
            <>
                <Typography variant='h5'>Manage cat</Typography>
                <FormControl onSubmit={handleSubmit(onEdit)} >
                    <label >
                        Name cat
                        <input {...register('nameCat', {required : true})} defaultValue={data.nameCat}  />
                    </label>
                    <br />
                    <label>Color
                        <select {...register('color', {required : true})} defaultValue={data.color} >
                            <option >Red</option>
                            <option >Blue</option>
                        </select>
                    </label>
                    <br />
                    <label >
                        Price for hour
                        <input type='number' {...register('price', {required : true, min: 500})} defaultValue={data.price}  />
                    </label>
                    <br />
                    <label >
                        Age
                        <input type='number' {...register('age', {required : true,min: 2} )} defaultValue={data.age} />
                    </label>
                    <br />
                    <label >
                        Created at
                        <input type='date' {...register('createdAt', {required : true})} defaultValue={data.createdAt} />
                    </label>
                    <br />
                    <label >
                        Breed
                        <select {...register('nameBreed', {required : true})} defaultValue={data.nameBreed}>
                            <option >Brittish</option>
                            <option >Scottish</option>
                        </select>
                    </label>
                    <input type="submit" />
                </FormControl>
            </>
    } else {
        form =
            <>
                <FormControl onSubmit={handleSubmit(onSubmit)} className='form-control'>
                    <Typography variant='h5'>Manage cat</Typography>
                    <label >
                        Name cat
                        <input {...register('nameCat')} />
                    </label>
                    <br />
                    <label>Color
                        <select {...register('color')}>
                            <option >Red</option>
                            <option >Blue</option>
                        </select>
                    </label>
                    <br />
                    <label >
                        Price for hour
                        <input type='number' {...register('price')} />
                    </label>
                    <br />
                    <label >
                        Age
                        <input type='number' {...register('age')} />
                    </label>
                    <br />
                    <label >
                        Created at
                        <input type='date' {...register('createdAt')} />
                    </label>
                    <br />
                    <label >
                        Breed
                        <select {...register('nameBreed')} >
                            <option >Brittish</option>
                            <option >Scottish</option>
                        </select>
                    </label>
                    <Button type="submit" variant='contained' className='add' > Добавить котика </Button>
                </FormControl>
            </>
    }

    return (
        <>
            {form}
        </>
    )
}


export default CatManage