import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

// $yellow: #FFE800
// brown: #404040;
// $blue: #1CD3F8;
// 8px: 8px;
// 4px: 4px;


const Body = styled.button`
    top: 0;
    left: 0;
    transition: all .15s linear 0s;
    position: relative;
    display: inline-block;
    padding: 15px 25px;
    background-color: ${props => props.bgColor || colors.purple};
    color: white;
    border-radius: 10px;
    letter-spacing: 1px;
    font-family: inherit;
    text-transform: uppercase;
    box-shadow: -6px 6px 0 ${colors.gray};;

    :hover{
        
        top: 3px;
        left: -3px;
        box-shadow: -3px 3px 0 ${colors.gray};;
        
    &::after {
      top: 1px;
      left: -2px;
      width: 4px;
      height: 4px;
    }
    
    &::before {
      bottom: -2px;
      right: 1px;
      width: 4px;
      height: 4px;
    }
    }

        &::after {
        transition: all .15s linear 0s;
        content: '';
        position: absolute;
        top: 2px;
        left: -4px;
        width: 8px;
        height: 8px;
        transform: rotate(45deg);
        z-index: -1;
        
    }
  
    &::before {
        transition: all .15s linear 0s;
        content: '';
        position: absolute;
        bottom: -4px;
        right: 2px;
        width: 8px;
        height: 8px;
        background-color: ${colors.gray};
        transform: rotate(45deg);
        z-index: -1;
    }
    

    @media (max-width: 768px) {
        font-size: 16px;
    }

    @media (max-width: 479px) {
        font-size: 14px;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3%;
`

const Button = ({ text, bgColor, color, href, hoverColor, onClick }) => {
    
    if(href){
        return (
            <Wrapper>
                <Link href={href}>
                    <Body bgColor={bgColor} color={color} hoverColor={hoverColor} onClick={onClick}>{text}</Body>
                </Link>
            </Wrapper>
        )
    }

    return (
        <Wrapper>
            <Body bgColor={bgColor} color={color} hoverColor={hoverColor} onClick={onClick} >{text}</Body>
        </Wrapper>
    )
}

export default Button
