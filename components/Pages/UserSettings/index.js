import React from 'react'
import * as Styled from './style'
import FormRow from './Formrow'
import MyButton from '../../Shared/MyButton'
import Button from '../../Shared/Button'
import { colors } from '../../../styles/colors'


const UserSettings = () => {
    return (
        <Styled.Container>
            <Styled.Header>Edit Account</Styled.Header>
            <Styled.FormContainer>
                <FormRow label='Email:' placeholder='Email Placeholder' type='email'/>
                <FormRow label='Name:' placeholder='Enter Name' type='text'/>
                <FormRow label='Email:' placeholder='Email Placeholder' type='email'/>
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
