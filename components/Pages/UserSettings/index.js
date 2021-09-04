import React, { useState } from 'react'
import * as Styled from './style'
import FormRow from './Formrow'
import MyButton from '../../Shared/MyButton'
import Button from '../../Shared/Button'
import { colors } from '../../../styles/colors'


const UserSettings = () => {
    const [formInfo, setFormInfo] = useState({
        email: '',
        name: '',
    });


    const handleChange = (name, value) => {
        setFormInfo({
            ...formInfo,
            [name]: value
        })
    }

    return (
        <Styled.Container>
            <Styled.Header>Edit Account</Styled.Header>
            <Styled.FormContainer>
                <FormRow label='Email:' name='email' placeholder='Email Placeholder' type='email'/>
                <FormRow label='Name:' name='name' placeholder='Enter Name' type='text'/>
                <Button
                    bgColor={colors.purple}
                    text='Save' 
                    color='white'
                />
            </Styled.FormContainer>
        </Styled.Container>
    )
}

export default UserSettings
