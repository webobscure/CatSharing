import React from 'react'
import { useForm } from 'react-hook-form'
import { MenuItem } from '@material-ui/core'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useData } from '../../DataContext'
import { useNavigate } from 'react-router-dom'

import Input from './Input'
import Form from './Form'
import PrimaryButton from './PrimaryButton'
import SelectColumn from './SelectColumn'
import SelectColor from './SelectColor'
import MainContainer from './MainContainer'


const schema = yup.object().shape({
    nameCat: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Cat name should not container numbers')
        .required('Cat name is required field'),
    breed: yup
        .string()
        .matches(/^([^0-9]*)$/, 'Breed should not container numbers')
        .required('Breed is required field'),
    age: yup
    .number()
    .positive()
    .required('Age field is required'),
    price: yup
    .number()
    .positive()
    .required('Price field is required')
})

const Modal = () => {
    const { setValues, data } = useData()
    const navigate = useNavigate()
    const { register, handleSubmit, errors } = useForm({
        defaultValues: {nameCat: data.nameCat,color: data.color, price: data.price, age: data.age, createdAt: data.createdAt, isBooked: data.isBooked, breed: data.breed },
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        navigate.push("./");
        setValues(data);
      };

    return <>
        <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}   >
                <Input
                    {...register('nameCat')}
                    id="nameCat"
                    type="text"
                    label="Cat name"
                    name="nameCat"
                    error={!!errors.nameCat}
                    helperText={errors?.nameCat?.message}
                />

                <SelectColor
                    {...register('color')}
                    labelId='Color'
                    id='color'
                    label='Color?'
                >
                    <MenuItem value='Black'>Black</MenuItem>
                    <MenuItem value='grey'>Grey</MenuItem>
                    <MenuItem value='dark'>Dark</MenuItem>
                    <MenuItem value='brown'>Brown</MenuItem>
                    <MenuItem value='red'>Red</MenuItem>


                </SelectColor>

                <Input
                    {...register('price')}
                    id="price"
                    type="number"
                    label="Price for hour"
                    name="price"
                    error={!!errors.price}
                    helperText={errors?.price?.message}
                />

                <Input
                    {...register('age')}
                    id="age"
                    type="text"
                    label="Age"
                    name="age"
                    error={!!errors.age}
                    helperText={errors?.age?.message}
                />

                <Input
                    {...register('createdAt')}
                    className='date'
                    id="createdAt"
                    type="date"
                    name="createdAt"
                    error={!!errors.createdAt}
                    helperText={errors?.createdAt?.message}
                />

                <SelectColumn
                    {...register('isBooked')}
                    labelId='isBookedNow'
                    id='isBooked'
                    label='Booked?'>
                    <MenuItem value='true'>Yes</MenuItem>
                    <MenuItem value='false'>No</MenuItem>


                </SelectColumn>



                <Input
                    {...register('breed')}
                    id="breed"
                    type="text"
                    label="Breed"
                    name="breed"
                />


                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    </>
}

export default Modal