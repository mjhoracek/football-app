import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const Path = styled.path`
    transition: all 0.2s linear;
    position: relative;
    transform-origin: center;
    transform: ${({ open }) => open ? 'rotate(0deg)' : 'rotate(-180deg)'};

    :hover{
        fill: 'white'
    }
`

const Arrow = ({ style, fill, open }) => (

    <svg style={style || { width: "100%" }} fill={fill || 'white'} viewBox="0 0 22 13" xmlns="http://www.w3.org/2000/svg">
         <Path open={open} d="M20.8097 1.06005L20.1169 0.351776C19.8989 0.130586 19.6089 0.00872925 19.2989 0.00872925C18.9891 0.00872925 18.6987 0.130586 18.4806 0.351776L10.5786 8.37576L2.66738 0.342873C2.44971 0.121682 2.15931 0 1.84949 0C1.53967 0 1.2491 0.121682 1.03126 0.342873L0.338365 1.04677C-0.112788 1.50452 -0.112788 2.25015 0.338365 2.70789L9.75757 12.3064C9.97527 12.5274 10.2653 12.6832 10.5779 12.6832H10.5815C10.8915 12.6832 11.1816 12.5272 11.3992 12.3064L20.8097 2.7339C21.0277 2.51289 21.1473 2.20947 21.1477 1.89487C21.1477 1.58012 21.0277 1.28088 20.8097 1.06005Z" fill={fill}/>
    </svg>
    
    )
    
    export default Arrow