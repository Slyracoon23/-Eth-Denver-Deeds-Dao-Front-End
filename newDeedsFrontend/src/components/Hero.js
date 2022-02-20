import React from 'react'
import styled from 'styled-components'
import Button from './Button'

function Hero() {
    return (
        <HeroSection>
            <AdSection>
                <Text> Real Property Deeds Recorded on Blockchain</Text>
                <Text1>An ERC-721 Token For Each Parcel Will Be Minted and Assigned To The Current Owner.</Text1>
                {/*<Buttons> 
                    <Button text="Get Started" color= "#ff8c00" borderColor="none" icon_one={true}  />
                    <Button text="How it Works" color= "#141414" borderColor="1px solid #ff8c00" icon_two={true}/>
                </Buttons>*/}
            </AdSection>
            {/*<ImgSection src="/images/NFT Card.svg" alt="HeroImg">
            </ImgSection>*/}
        </HeroSection>
    )
}

export default Hero

const HeroSection = styled.div`
    display: flex;
    align-items: top;
    justify-content: center;
    // width: calc(455px+682px);
    margin: 0 0px;
    min-height: 550px;
    background: url("/images/metro.jpg") center center / cover no-repeat;
    `
const AdSection = styled.div`
    font-size: 64px;
    width: 760px;
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
const Text = styled.div`
    font-weight: bold;
    font-size: 64px;
    line-height: 83px;
    text-align: center;
    a {
        color: #B10FFE
    }
`

const Text1 = styled.div`
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    a {
        color: #B10FFE
    }
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