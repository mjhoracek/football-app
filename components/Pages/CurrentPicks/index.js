import React, {useState} from 'react'
import styled from 'styled-components'
import WeekSelector from '../WeeklyPicks/WeekSelector'
import Matchups from './Matchups'
import PlayerPicksRow from './PlayerPicksRow'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

const CurrentPicksBox = ({allPlayerObjects}) => {
    const [week, setWeek] = useState(1)
    const schedule = allPlayerObjects[0].picks


    return (
        <Container>
            <WeekSelector week={week} setWeek={setWeek}/>
            <Matchups schedule={schedule} week={week}/>

            {allPlayerObjects &&
                    allPlayerObjects.map((player, index) => {
                        return (
                            <PlayerPicksRow 
                                key={index} 
                                player={player}
                                week={week}
                            />
                        )
                })}
        </Container>
    )
}

export default CurrentPicksBox
