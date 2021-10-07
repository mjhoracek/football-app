import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import WeekSelector from '../WeeklyPicks/WeekSelector'
import { getPlayersPointTotals } from '../../../services/mongodb/getPlayersPointTotals'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

const WeeklyResultsBox = ({allPlayerObjects}) => {
    const [week, setWeek] = useState(1)
    console.log(allPlayerObjects)


    return (
        <Container>
            <WeekSelector week={week} setWeek={setWeek}/>
            
        </Container>
    )
}

export default WeeklyResultsBox
