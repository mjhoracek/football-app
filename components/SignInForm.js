import React, { useState } from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button, Divider, Typography, Grid, Paper } from '@material-ui/core'
import useInput from '../hooks/useInput'
import getFirebase from '../firebase'


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

const useStyles = makeStyles({
    input: {
        margin: '3%',
        fontFamily: 'inherit'
    },
    root: {
        borderColor: 'red',
        color: 'black'
    }
})


function SignInForm() {
    const classes = useStyles()
    const firebaseInstance = getFirebase()

    const [formInfo, setFormInfo] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    
    const signUp = async (event) => {
        event.preventDefault()

        try {
            if(firebaseInstance){
                const user = await firebaseInstance.auth().createUserWithEmailAndPassword(formInfo.email, formInfo.password)
                console.log('user', user);
                alert(`Welcome ${formInfo.email}`)
            }
            
        } catch (error) {
            console.log('error', error)
            alert(error.message)
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
            <Wrapper>
                <Typography className={classes.root} >Sign Up</Typography>
                <Typography style={{textAlign: 'right'}} className={classes.root}>Forgot Password?</Typography>
            </Wrapper>
            <form onSubmit={signUp}>
                <TextField id="email" label="email" variant="standard"  onChange={ e => handleChange(e.target.id, e.target.value)} className={classes.input} />
                <Divider className={classes.root}/>
                <TextField id="password" label="password" variant="standard" onChange={ e => handleChange(e.target.id, e.target.value)} className={classes.input} />
                <Divider />
                <TextField id="confirmPassword" label="confirm password" variant="standard" onChange={ e => handleChange(e.target.id, e.target.value)} className={classes.input} />
                <Divider />
                <Button  variant="outlined" type='submit'>Submit</Button>
            </form>
        </Container>
    )

    }

export default SignInForm

