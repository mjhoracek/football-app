import styled from 'styled-components'
import { colors } from '../../../styles/colors'

// export const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     padding: 5%;
// `

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5%;
    align-items: center;
    width: 90%;
    height: 700px;
    border-radius: 10px;
    margin-top: 10px;
    background: linear-gradient(180deg, #31343B 0%, #22252C 100%);
    box-shadow: 0px 0px 37px #000000;
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
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

export const Label = styled.p`
    color: ${colors.white};
    text-align: center;
    font-size: 18px;
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
    width: 60%;
`