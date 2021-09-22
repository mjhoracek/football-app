import React from 'react'
import styled from 'styled-components'
import Message from './Message'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`

const Home = () => {
    return (
        <Container>
           <Message />
        </Container>
    )
}

export default Home
