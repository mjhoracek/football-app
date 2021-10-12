import React from 'react'
import styled from 'styled-components'

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 2%;
    align-items: center;
    width: 90%;
    height: fit-content;
    border-radius: 10px;
    margin-top: 10px;
    background: linear-gradient(180deg, #31343B 0%, #22252C 100%);
    box-shadow: 0px 0px 37px #000000;
    color: white;
`

export const MessageHeader = styled.p`
    font-size: 20px;
`

export const MessageMeta = styled.p`
    font-size: 16px;
    padding-top: 15px;
`

export const MessageBody = styled.p`
    font-size: 14px;
    padding-top: 10px;
    margin: 10px 5px;
`


const Message = () => {
    return (
        <MessageContainer>
            <MessageHeader>
                Welcome to the 2022 Football Pool!
            </MessageHeader>
            <MessageMeta>
                Posted by: Pool President, 9/6/2021
            </MessageMeta>
            <MessageBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum nec massa vel porttitor. Suspendisse potenti. Maecenas elementum erat in enim vehicula auctor. Etiam metus odio, euismod sit amet leo non, aliquam maximus erat. Aliquam tellus orci, fringilla ultrices aliquet id, eleifend et nibh. Curabitur vehicula odio ut tortor maximus, ac ullamcorper mi dignissim. Pellentesque ut turpis posuere, sagittis dui sed, posuere nisl. Nunc mollis justo at enim convallis, eget ornare mauris mollis. Curabitur id tempor metus.
            </MessageBody>
        </MessageContainer>
    )
}

export default Message
