import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Sute() {
    return (
        <SuteSection>
            <AdSection>
                <Text> A lease agreement that puts <Text1>you</Text1> own and <Text1>you</Text1> control</Text><p></p>
                <br/><Text2>Spend <Text1>less</Text1> time with lawers and <Text1>more</Text1> time with customers</Text2>
            </AdSection>
        </SuteSection>
    )
}

export default Sute

const SuteSection = styled.div`
    display: flex;
    align-items: top;

    // width: calc(455px+682px);
    margin: 0 0px;
    min-height: 550px;
    background: url("/images/sute.jpg") center center / cover no-repeat;
    `
const AdSection = styled.div`
    font-size: 64px;

    margin-top: calc(640px - 540px);

    p {
        font-size: 24px;
        line-height: 31px;
    }

    
`
const ImgSection = styled.img`
    width: calc(533px / 1.5);
    height: 640px;
    
`
const Text = styled.text`
    font-weight: bold;
    font-size: 50px;
    line-height: 83px;
    text-align: left;
    padding: 100px;
`

const Text2 = styled.text`
    font-weight: bold;
    font-size: 50px;
    line-height: 83px;
    text-align: right;
    padding: 100px;
`

const Text1 = styled.span`
    color: #ff8c00
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-left: 0;

    button {
        margin-left: 0;
        margin-right: 20px;
        cursor: pointer;
    }

`