import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import WeekSelector from '../WeeklyPicks/WeekSelector'
import { getPlayerPointTotals } from '../../../api/getPlayerPointTotals'
import { colors } from '../../../styles/colors'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    color: white;
`

const TableHead = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 75px;
    background: linear-gradient(180deg, #31343B 0%, #444444 100%);
    box-shadow: 0px 0px 37px #000000;
    border-radius: 10px;
    margin-bottom: 10px;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 50px;
    background: ${props => props.index === 0 ? colors.gold : props.index === 1 ? colors.silver : colors.bronze};
    box-shadow: 0px 0px 37px #000000;
    border-radius: 10px;
    margin-bottom: 10px;
`

const LabelBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${props => props.width || '125px'};
    height: 100%;
`

const Label = styled.p`
    color: white;
    font-size: 16px;
    text-align: center;
    padding: 10% 10%;
`

const WeeklyWinnersBox = ({}) => {
    const {playerObject} = useSelector(state => state.playerObject)
    const [week, setWeek] = useState(1)
    const [data, setData] = useState(undefined)

    /////// How many winners do you want to display?
    const numberOfWinners = 3

    useEffect(() => {
        const fetchPointTotals = async () => {
            const response = await getPlayerPointTotals(week, numberOfWinners)
            setData(response?.data)
        }

        fetchPointTotals()
    }, [week])

    return (
        <Container>
            <WeekSelector week={week} setWeek={setWeek}/>
            <TableHead>
                <LabelBox width='33%'>
                    <Label>Place</Label>
                </LabelBox>
                <LabelBox width='33%'>
                    <Label>Name</Label>
                </LabelBox>
                <LabelBox width='33%'>
                    <Label>Points</Label>
                </LabelBox>
            </TableHead>
            {data &&
                data.map((player, index) => {
                    return (
                        <Row key={index} index={index} highlight={(player._id == playerObject?.playerName)}>
                            <LabelBox width='33%'>
                                <Label>{index+1}</Label>
                            </LabelBox>
                            <LabelBox width='33%'>
                                <Label>{player._id}</Label>
                            </LabelBox>
                            <LabelBox width='33%'>
                                <Label>{player.pointTotal}</Label>
                            </LabelBox>
                        </Row>
                    )
                })}
        </Container>
    )
}

export default WeeklyWinnersBox