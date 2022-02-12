import React from 'react'
import { useForm } from 'react-hook-form'
import { MenuItem } from '@material-ui/core'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useData } from '../../DataContext'
//import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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
    const { data, setValues } = useData()
    //const navigate = useNavigate()

    const { register, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        axios.post('https://internship.apps.robotbull.com/cats/create_cat')
        setValues(data);
        console.log(data);
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
                //error={!!errors.nameCat}
                // helperText={errors?.nameCat?.message}
                />

                <SelectColor
                    {...register('color')}
                    labelId='Color'
                    id='color'
                    label='Color?'
               />



                    <Input
                        {...register('price')}
                        id="price"
                        type="number"
                        label="Price for hour"
                        name="price"
                    // error={!!errors.price}
                    // helperText={errors?.price?.message}
                    />

                    <Input
                        {...register('age')}
                        id="age"
                        type="text"
                        label="Age"
                        name="age"
                    // error={!!errors.age}
                    // helperText={errors?.age?.message}
                    />

                    <Input
                        {...register('createdAt')}
                        className='date'
                        id="createdAt"
                        type="date"
                        name="createdAt"
                    // error={!!errors.createdAt}
                    // helperText={errors?.createdAt?.message}
                    />

                    
                    <SelectColumn
                        {...register('breed')}
                        id="breed"
                        label="Breed"
                        name="breed"
                    />


                    <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    </>
}

export default Modal