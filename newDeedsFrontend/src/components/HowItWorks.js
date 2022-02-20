import React from 'react'
import styled from 'styled-components'
import HIWCard from './HIWCard';

function HowItWorks() {
    return (
        <Container>
            <Heading>Create and sell your NFTs</Heading>
            <HIW style={{ "padding-top": "90px"}}>
                <HIWContainer style={{ "margin-right": "-30px", "z-index": "1"}}>
                    <HIWCard number="1" header="Connect Your Wallet" bgBgColor='#141414'
                    desc="Download and create your wallet and connect it to OpenSea  by clicking on the connect wallet Icon on the top right hand corner"/>
                </HIWContainer>
                <HIWContainer style={{"margin-bottom": "150px", "margin-right": "-30px", "z-index": "1"}}>
                    <HIWCard number="2" header="Create Your Collection" numberBgColor="#050407" 
                    desc="Create your unique NFT by clicking on create. Write a description and social links" />
                </HIWContainer>
                <HIWContainer style={{ "margin-right": "-30px", "z-index": "1"}}>
                    <HIWCard number="3" header="Add Collection" bgBgColor='#141414'
                    desc="Download and create your wallet and connect it to OpenSea"/>
                </HIWContainer>
                <HIWContainer style={{"margin-bottom": "150px"}}>
                    <HIWCard number="4" header="List them for sale" numberBgColor="#050407"
                    desc="Download and create your wallet and connect it to OpenSea"/>
                </HIWContainer>
            </HIW>
            
        </Container>
    )
}

export default HowItWorks

const Container= styled.div`
    
    margin: 90px 30px;
`

const Heading= styled.div`
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    margin: 30px 30px;

`

const HIW= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #141414;

    

`

const HIWContainer = styled.div`
   


`
