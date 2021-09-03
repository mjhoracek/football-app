import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Body = styled.button`
    border-radius: 5px;
    width: 225px;
    height: 55px;
    background-color: #ffffff;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
    box-shadow: 5px 7px 3px 0 rgba(0, 0, 0, 0.22);
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    border: none;
    font-family: 'Chakra Petch', sans-serif;
    cursor: pointer;

    :hover{
        background-color: ${props => props.hoverColor}
    }

    @media (max-width: 768px) {
        font-size: 16px;
        width: 150px;
        height: 45px;
    }

    @media (max-width: 479px) {
        font-size: 14px;
        width: 125px;
        height: 35px;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3%;
`

const Button = ({ text, bgColor, color, href, hoverColor }) => {
    return (
        <Wrapper>
            <Link href={href || '/'}>
                <Body bgColor={bgColor} color={color} hoverColor={hoverColor} >{text}</Body>
            </Link>
        </Wrapper>
    )
}

export default Button
