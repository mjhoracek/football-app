import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 5%;
`

export const Header = styled.p`
    color: ${colors.white};
    text-align: center;
    font-size: 24px;
    width: 100%;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 5%;
    width: 100%;
`

export const FormRow = styled.div`
    display: flex;
    padding: 1% 0;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Label = styled.p`
    color: ${colors.white};
    text-align: center;
    font-size: 18px;
    width: 30%;
`

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30%;

`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 70%;
`