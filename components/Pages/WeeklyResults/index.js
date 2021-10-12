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
    background: ${props => props.highlight ? colors.purple : colors.row  };
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

const WeeklyResultsBox = ({}) => {
    const {playerObject} = useSelector(state => state.playerObject)
    const [week, setWeek] = useState(1)
    const [data, setData] = useState(undefined)

    useEffect(() => {
        const fetchPointTotals = async () => {
            const response = await getPlayerPointTotals(week, 1000)
            console.log('response data', response?.data)

            const ranked = response?.data.sort(function(a, b){
                return b.pointTotal - a.pointTotal;
            }).map(function(e, i){
              e.rank = (i + 1);
              return e;
            });

            setData(ranked)
        }

        fetchPointTotals()
    }, [week])

    return (
        <Container>
            <WeekSelector week={week} setWeek={setWeek}/>
            <TableHead>
                <LabelBox width='25%'>
                    <Label>Rank</Label>
                </LabelBox>
                <LabelBox width='25%'>
                    <Label>Name</Label>
                </LabelBox>
                <LabelBox width='25%'>
                    <Label>Points</Label>
                </LabelBox>
                <LabelBox width='25%'>
                    <Label>Record</Label>
                </LabelBox>
            </TableHead>
            {data &&
                    data.map((player, index) => {
                        return (
                            <Row key={index} highlight={(player._id == playerObject?.playerName)}>
                                <LabelBox width='25%'>
                                    <Label>{player.rank}</Label>
                                </LabelBox>
                                <LabelBox width='25%'>
                                    <Label>{player._id}</Label>
                                </LabelBox>
                                <LabelBox width='25%'>
                                    <Label>{player.pointTotal}</Label>
                                </LabelBox>
                                <LabelBox width='25%'>
                                    <Label>-</Label>
                                </LabelBox>  
                            </Row>
                        )
                })}
        </Container>
    )
}

export default WeeklyResultsBox
