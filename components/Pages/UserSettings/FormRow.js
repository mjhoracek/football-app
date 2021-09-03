import React from 'react'
import * as Styled from './style'
import InputField from '../../Shared/InputField'



const FormRow = ({label, placeholder, type}) => {
    return (
        <Styled.FormRow>
            <Styled.LabelContainer>
                <Styled.Label>{label}</Styled.Label>
            </Styled.LabelContainer>
            <Styled.InputContainer>
                <InputField 
                    type={type}
                    placeholder={placeholder}
                    variant="standard"
                    color='primary' 
                />
            </Styled.InputContainer>
        </Styled.FormRow>
    )
}

export default FormRow
