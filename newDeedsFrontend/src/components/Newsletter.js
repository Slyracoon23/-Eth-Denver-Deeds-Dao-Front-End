import React from 'react'
import styled from 'styled-components'

function Newsletter() {
    return (
        <Container>
            <Heading>Join our Newsletter</Heading>
            <SmallContainer>
                <LeftSide>
                    <h3>Suscribe to our newsletter</h3>
                    <p>Keep up with the latest trends in NFT marketplace through our weekly newsletter delivered right to your inbox</p>
                </LeftSide>
                <RightSide>
                    <SearchBar>
                        <input/>
                        <button>Subscribe</button>
                    </SearchBar>
                    <p>Unsuscribe at anytime. T , C and Privacy Policy</p>
                </RightSide>
            </SmallContainer>  
        </Container>
    )
}

export default Newsletter 


const Container = styled.div`
    margin: 30px;

`

const Heading = styled.div`
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 30px;

`

const SmallContainer = styled.div`
    border: 1px solid #b10ffe;
    border-radius: 14px; 
    display: flex;
    align-items: center; 
    justify-content: space-around;
`
const LeftSide = styled.div`
    width: 50%;
    margin: 0 60px;
    
    h3 {
        margin-bottom:5px;
    }

    p {
        font-size: 12px;
        margin-top: 0;
        margin-bottom: 20px;
        }

`
const RightSide = styled.div`
        
        width: 50%;
        display: flex;
        align-items: center; 
        justify-content: center;
        flex-direction: column;

        p {
            font-size: 12px;
            margin-top: 0;
            margin-bottom: 0;
            // margin-left: -155px;
        }

`

const SearchBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center; 
    justify-content: center;
    input {
        width: 60%;
        height: 30px;
        border-radius: 15px;
        border: 1px solid #B10FFE;
    }

    button {
        height: 30px;
        color: white;
        background: #B10FFE;
        border: none;
        border-radius: 10px;
        margin-left: 5px;
        padding-right: 10px;
        padding-left: 10px;
    }
`
