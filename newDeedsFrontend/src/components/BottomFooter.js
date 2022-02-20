import React from 'react'
import styled from 'styled-components'


function BottomFooter() {
    return (
        <Container>
            <FirstColumn>
                <h5>Products</h5>
                <ul>
                    <li>Ranking</li>
                    <li>NFTs</li>
                    <li>Token Explorer</li>
                    <li>Portfolio</li>
                    <li>Token Swaps</li>
                    <li>Airdrops</li>
                </ul>
            </FirstColumn>
            <SecondColumn>
                <h5>Company</h5>
                <ul>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Terms and Condition</li>
                    <li>Privacy Policy</li>
                    <li>Disclaimer</li>
                    
                </ul>
            </SecondColumn>
            <ThirdColumn>
                <h5>Resources</h5>
                <ul>
                    <li>Blog</li>
                    <li>Industry Overview</li>
                    <li>Reports</li>
                    
                </ul>
            </ThirdColumn>
            <FourthColumn>
                <h5>Developers</h5>
                <ul>
                    <li>APIs</li>
                    <li>Submit a Project</li>
                    
                </ul>
            </FourthColumn>
            <FifthColumn>
                <h5>Recommendations</h5>
                <ul>
                    <li>Metamask</li>
                    <li>MyEtherWallet</li>
                    <li>BitKeep</li>
                    <li>Portfolio</li>
                    <li>Token Swaps</li>
                    <li>Airdrops</li>
                </ul>
            </FifthColumn>
        </Container>
    )
}

export default BottomFooter

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin: 0 20px;

`
const FirstColumn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h5 {
        margin-bottom: 0;
        
    }

    ul {
        font-size: 13px;
        list-style-type: none;

        li {
            margin: 7px 0px;
            text-align: left;
            
        }
    }

`
const SecondColumn = styled(FirstColumn)`
   

`
const ThirdColumn = styled(FirstColumn)`
   

`

const FourthColumn = styled(FirstColumn)`
   

`

const FifthColumn = styled(FirstColumn)`

    ul {
        padding-left: 0;
        
    }
    
    
`