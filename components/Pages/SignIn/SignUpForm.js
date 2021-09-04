import React, { useState } from 'react'
import validator from 'validator'
import styled from 'styled-components'

import { useAuth } from '../../../contexts/AuthContext'
import InputField from '../../Shared/InputField'
import MyButton from '../../../components/Shared/MyButton'
import { createNewPlayerObject } from '../../../hooks/api/createNewPlayerObject'



const Container = styled.div`
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    border-radius: 15px;
`

function SignUpForm({ error, setError, setMessage }) {
    const { signup, currentUser } = useAuth()

    const [formInfo, setFormInfo] = useState({
        email: "",
        confirmEmail: "",
        password: "",
        confirmPassword: "",
    });
    
    const signUp = async (event) => {
        event.preventDefault()
        setError("")

        if( formInfo.email.length === 0) return setError('You must provide an email.')

        if( !validator.isEmail(formInfo.email)) return setError("You must provide a valid email.")
        
        if( formInfo.email !== formInfo.confirmEmail ) return setError('Email and Confirm Email must match')

        if( formInfo.password.length === 0) return setError('You must provide a password')

        if( formInfo.password !== formInfo.confirmPassword ) return setError('Passwords must match')

        try {

            const user = await signup(formInfo.email, formInfo.password)
            const res = await createNewPlayerObject()
            console.log('The new user email is:', user);
            setMessage(currentUser.email)

        } catch (error) {
            setError(error.message)
            console.log('error', error)
        }
    }

    const handleChange = (id, value) => {
        setFormInfo({
            ...formInfo,
            [id]: value
        })
    }  
    

    return (
        <Container>
            <form onSubmit={signUp}>
                <InputField  
                    type='email'
                    id='email'
                    label="Email"
                    variant="standard"
                    color='primary' 
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <InputField 
                    type='email'
                    id='confirmEmail'
                    label="Confirm Email"
                    variant="standard"  
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <InputField 
                    type='password'
                    id='password'
                    label="Password"
                    variant="standard"  
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <InputField 
                    style={{ paddingBottom: "30px"  }}
                    type='password'
                    id='confirmPassword'
                    label="Confirm Password"
                    variant="standard"  
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <MyButton 
                    style={{ width: "100%"  }}
                    variant="outlined" 
                    type='submit'
                >
                    Sign Up
                </MyButton>
            </form>
        </Container>
    )

    }

export default SignUpForm
