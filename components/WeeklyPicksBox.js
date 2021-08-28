import React from 'react'
import styled from 'styled-components'
import GameRow from './GameRow'
import WeekSelector from './WeekSelector'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

const GamesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 97%;
    padding-bottom: 5%;
`


const WeeklyPicksBox = ({ games }) => {


    return (
        <Container>
            <WeekSelector />
            <GamesWrapper>
            {
                games.map((game, index) => (
                    <GameRow
                    key={index} 
                    index={index} 
                    game={game}
                    />
                ))
            }  

            </GamesWrapper>

        </Container>
    )
}

export default WeeklyPicksBox
