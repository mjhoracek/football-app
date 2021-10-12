import React from 'react'
import styled from 'styled-components'
import Message from './Message'
import SeasonStandingsBox from '../SeasonStandings'
import { colors } from '../../../styles/colors'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

const SubContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

const PayoutBox = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 260px;
    background: ${colors.row};
    color: white;
    border-radius: 10px;
    margin: 0% 5%;
    box-shadow: 0px 0px 37px #000000;
`

const Info = styled.p`
    font-size: 18px;
    padding: 13px;
`

const StandingsBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 320px;
    margin: 0% 5%;
`

const Home = ({ allPlayerObjects }) => {
    console.log('allplayerobjects', allPlayerObjects)
    const numOfPlayers = allPlayerObjects.length

    return (
        <Container>
           <Message />
           <SubContainer>
                <PayoutBox>
                    <Info> There are currently {numOfPlayers} players in the pool</Info>
                    <Info>
                        Payout Structure:
                    </Info>
                    <Info>
                        1st: 50%
                    </Info>
                    <Info>
                        2nd: 30%
                    </Info>
                    <Info>
                        3rd: 20%
                    </Info>
                </PayoutBox>
                <StandingsBox>
                    <SeasonStandingsBox allPlayerObjects={allPlayerObjects} slice="true" limit={3}/>
                </StandingsBox>
           </SubContainer>
        </Container>
    )
}

export default Home
