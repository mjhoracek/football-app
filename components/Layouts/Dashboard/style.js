import styled from 'styled-components'
import { colors } from '../../../styles/colors'

export const Container = styled.div` 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;

`

export const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 20%;
    height: 700px;
`

export const CenterCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 60%; 
`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 30px 0;
    height: fit-content;
    color: white;
    font-size: 24px;
`

export const RightCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 20%;
    height: 700px;
`

export const Snackbar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 50%;
    height: 70px;
    position: absolute;
    top: 2%;
    left: 25%;
    background-color: ${colors.purple};
    color: white;
    font-size: 24px;
    z-index: 15;
    opacity: ${props => props.snackbar ? 1 : 0 };
    transition: .5s ease;
`