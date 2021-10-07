import React, {useState} from 'react'
import styled from 'styled-components'
import SVG from '../../../SVG'
import { colors } from '../../../../styles/colors'
import SubmenuAccordian from './SubmenuAccordian'


export const MenuItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50px;
    padding: 2%;
    color: white;
`


export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50px;
    cursor: pointer;
`


export const ArrowButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: 50px;
    cursor: pointer;
`



const MenuItem = ({
        numOfLinks,
        children, 
        defaultOpen,
        iconlink,
 
        link1, 
        label1,
    
        link2, 
        label2,
    
        link3, 
        label3,
    
        link4, 
        label4,
    
        link5, 
        label5,
    
        link6, 
        label6,
    
        link7, 
        label7,
    
        link8, 
        label8,
    
        link9, 
        label9,
    
        link10, 
        label10,

}) => {
    const [open, setOpen] = useState(defaultOpen)



    return (
        <div>
        <MenuItemContainer onClick={() => setOpen(!open)}>
                <IconContainer>
                    {children}
                </IconContainer>
            <ArrowButton open={open} onClick={() => setOpen(!open)}>
                <SVG.Arrow open={open} style={{ width: '15px' }} fill={open ? colors.white : colors.purple} />
            </ArrowButton>
        </MenuItemContainer>
        <SubmenuAccordian 
            numOfLinks={numOfLinks}
            open={open} 
            link1={link1} 
            link2={link2} 
            link3={link3} 
            link4={link4}
            link5={link5} 
            link6={link6} 
            link7={link7} 
            link8={link8} 
            link9={link9} 
            link10={link10}              

            label1={label1} 
            label2={label2}
            label3={label3} 
            label4={label4}
            label5={label5} 
            label6={label6}
            label7={label7} 
            label8={label8}
            label9={label9}
            label10={label10} 
        />
        </div>
    )
}

export default MenuItem
