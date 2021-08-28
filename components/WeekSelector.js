import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/colors'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 95%;
    height: 125px;
    margin-top: 10px;
`
const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    color: white;
    size: 24px;
`

const WeeksBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    height: 50px;
    color: white;
    size: 24px;
`

const Week = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    color: white;
    size: 24px;
    border-radius: 30px;
    background-color: ${colors.gray};
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.55));
`

const WeekSelector = () => {
    return (
        <Container>
            <Header>Enter Weekly Picks</Header>
            <WeeksBox>
                <Week>1</Week>
                <Week>2</Week>
                <Week>3</Week>
                <Week>4</Week>
                <Week>5</Week>
                <Week>6</Week>
                <Week>7</Week>
                <Week>8</Week>
            </WeeksBox>
            <Header>Week 1 Picks</Header>
        </Container>
    )
}

export default WeekSelector
