import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles/colors'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 95%;
    height: 80px;

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
    margin: 10px 0;
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
    background-color: ${props => props.active ? colors.purple : colors.gray};
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.55));
`

const WeekSelector = ({week, setWeek}) => {
    
    return (
        <Container>
            <WeeksBox>
                <Week active={week === 1} onClick={() => setWeek(1)}>1</Week>
                <Week active={week === 2} onClick={() => setWeek(2)}>2</Week>
                <Week active={week === 3} onClick={() => setWeek(3)}>3</Week>
                <Week active={week === 4} onClick={() => setWeek(4)}>4</Week>
                <Week active={week === 5} onClick={() => setWeek(5)}>5</Week>
                <Week active={week === 6} onClick={() => setWeek(6)}>6</Week>
                <Week active={week === 7} onClick={() => setWeek(7)}>7</Week>
                <Week active={week === 8} onClick={() => setWeek(8)}>8</Week>
            </WeeksBox>
            <Header>Week {week}</Header>
        </Container>
    )
}

export default WeekSelector
