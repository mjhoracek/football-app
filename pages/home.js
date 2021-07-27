import Head from 'next/head'
import SignIn from '../components/SignInForm'
import styled from 'styled-components'


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
            You are signed in
      </Wrapper>
    </Wrapper>
  )
}
