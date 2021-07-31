import React, { useState } from 'react'
import validator from 'validator'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Divider, Typography, Grid, Paper } from '@material-ui/core'

import { useAuth } from '../contexts/AuthContext'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    background-color: gray;
    border: 20px black;
    border-radius: 15px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 16px;
`

const Error = styled.p`
    margin: 20px 0;
    color: white;
    font-weight: 500;
    letter-spacing: 2px;
    text-align: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 1%;
    padding-right: 1%;
`


const useStyles = makeStyles({
    input: {
        marginTop: '1%',
        marginBottom: '1%',
    },
    root: {
        borderColor: 'red',
        color: 'black'
    }
})


function LogIn() {
    const classes = useStyles()
    const [error, setError] = useState("")
    const { login } = useAuth()

    const [formInfo, setFormInfo] = useState({
        email: "",
        password: "",
    });
    
    const logIn = async (event) => {
        event.preventDefault()
        setError("")

        if( formInfo.email.length === 0) return setError('You must provide a valid email.')

        if( formInfo.password.length === 0) return setError('You must provide a password')

        if( !validator.isEmail(formInfo.email)) return setError("You must provide a valid email.")

        if( formInfo.email !== formInfo.confirmEmail ) return setError('Email and Confirm Email must match')

        if( formInfo.password !== formInfo.confirmPassword ) return setError('Passwords must match')

        try {
                const user = await login(formInfo.email, formInfo.password)
                console.log('user', user);
            
        } catch (error) {
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
            <Form onSubmit={logIn}>
                <TextField 
                    className={classes.input} 
                    type='email'
                    id='email'
                    label="Email"
                    variant="standard"  
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <Divider className={classes.root}/>
                <TextField 
                    className={classes.input} 
                    type='password'
                    id='password'
                    label="Password"
                    variant="standard"  
                    onChange={ (e) => {
                        setError("")
                        handleChange(e.target.id, e.target.value)
                    }}
                    />
                <Divider />
                <Error>
                    {error}
                </Error>
                <Button  
                    variant="outlined" 
                    type='submit'
                    style={{width: '80%', align: 'center'}}
                >
                    Submit
                </Button>
            </Form>
        </Container>
    )

    }

export default LogIn

