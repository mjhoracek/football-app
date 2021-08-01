import Head from 'next/head'
import styled from 'styled-components'
import LogOut from '../components/LogOut.js'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: gray;
`

export default function Home() {
  return (
    <Wrapper>
      <Wrapper>
        Dashboard
        <LogOut />
      </Wrapper>
    </Wrapper>
  )
}
