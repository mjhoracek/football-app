import React from 'react'
import styled from 'styled-components'
import SVG from '../../../SVG'
import Link from 'next/link'

export const AccordianContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 2%;
    color: white;
    ///animation works if not 'fit content' but idk how to make it know how big the content is yet
    height: ${props => props.open ? props.boxHeight : '0px' };
    overflow: hidden;
    transition: height 0.2s ease-in-out;
`

export const SubmenuItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    font-size: 16px;
    color: white;
    margin-left: 15%;
    padding: 3% 1%;
`


export const LabelContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    cursor: pointer;

    :hover{
        text-decoration: underline;
        text-decoration-thickness: 2px;
    }
`

const SubmenuAccordian = ({ 
    numOfLinks,
    open, 

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

    const boxHeight = (numOfLinks * 40).toString() + 'px'

    return (
        <AccordianContainer open={open} boxHeight={boxHeight}>

            {link1 &&
            <SubmenuItemContainer>
                <Link href={link1}>
                    <LabelContainer>
                        {label1}
                    </LabelContainer>
                </Link>
            </SubmenuItemContainer>
            }

            {link2 &&
            <SubmenuItemContainer>
                <Link href={link2}>
                    <LabelContainer>
                        {label2}
                    </LabelContainer>
                </Link>
            </SubmenuItemContainer>
            }

            {link3 &&
            <SubmenuItemContainer>
                <Link href={link3}>
                    <LabelContainer>
                        {label3}
                    </LabelContainer>
                </Link>
            </SubmenuItemContainer>
            }

            {link4 &&
            <SubmenuItemContainer>
                <Link href={link4}>
                    <LabelContainer>
                        {label4}
                    </LabelContainer>
                </Link>
            </SubmenuItemContainer>
            }

            {link5 &&
            <SubmenuItemContainer>
                <Link href={link5}>
                    <LabelContainer>
                        {label5}
                    </LabelContainer>
                </Link>
            </SubmenuItemContainer>
            }

            {link6 &&
            <SubmenuItemContainer>
                <Link href={link6}>
                    <LabelContainer>
                        {label6}
                    </LabelContainer>
                </Link>
            </SubmenuItemContainer>
            }

            {link7 &&
            <SubmenuItemContainer>
                <Link href={link7}>
                    <LabelContainer>
                        {label7}
                    </LabelContainer>
                </Link>
            </SubmenuItemContainer>
            }

            {link8 &&
            <SubmenuItemContainer>
                <Link href={link8}>
                    <LabelContainer>
                        {label8}
                    </LabelContainer>
                </Link>
            </SubmenuItemContainer>
            }

            {link9 &&
            <SubmenuItemContainer>
                <Link href={link9}>
                    <LabelContainer>
                        {label9}
                    </LabelContainer>
                </Link>
            </SubmenuItemContainer>
            }

            {link10 &&
            <SubmenuItemContainer>
                <Link href={link10}>
                    <LabelContainer>
                        {label10}
                    </LabelContainer>
                </Link>
            </SubmenuItemContainer>
            }

        </AccordianContainer>
    )
}

export default SubmenuAccordian
