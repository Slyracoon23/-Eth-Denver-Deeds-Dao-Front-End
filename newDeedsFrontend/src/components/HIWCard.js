import React from 'react'
import styled from 'styled-components'

function HIWCard({number, header, desc, numberBgColor, bgBgColor}) {
    return (
        <Container bColor = {bgBgColor}>
            <Number bgColor = {numberBgColor} >
                {number}
            </Number>
            <Main>
                {header}
            </Main>
            <Desc>
                {desc}            
            </Desc>
            
        </Container>
    )
}

export default HIWCard

HIWCard.defaultProps = {
    numberBgColor: '#b10ffe',
    bgBgColor: '#b10ffe'
}

const Container = styled.div`
    background-color: ${props => `${props.bColor};`}
    height: 230px;
    width: 290px;
    border: 1px solid #b10ffe;
    border-radius: 10%;
    

`
const Number = styled.div`
    Background: ${props => `${props.bgColor};`}
    height: 22px;
    width: 22px;
    margin: 22px 41px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 12px 

`
const Main = styled.div`
    font-size: 18px;
    line-height: 15px;
    margin: 12px 41px;
    font-weight: 600;

`
const Desc = styled.div`
    font-size: 12px;
    margin: 22px 41px;
    font-weight: 600;

`
