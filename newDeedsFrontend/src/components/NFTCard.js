import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons//FavoriteBorder';

function NFTCard({name, image, profile_img, traits}) {
    return (
        <Container>
            <NFTImg src={image} alt="nft image"/>
            <NFTDetails>
                <Price>
                    <UserImg>
                        <img src={profile_img} />
                        {name}
                    </UserImg>
                    <Pricing>
                        <PriceEth>
                            <img src="/images/Ethereum (ETH).svg" />
                            {traits}
                        </PriceEth>
                        <PriceDolls>$2800</PriceDolls>
                    </Pricing>

                </Price>
                <BidButtons>
                    <Button1>
                        Claim
                    </Button1>

                    <Button2>
                        <FavoriteBorderIcon style={{ "height": "15px"}}/>
                        <span>22</span>
                    </Button2>

                </BidButtons>

            </NFTDetails>
            
        </Container>
    )
}

export default NFTCard

const Container = styled.div`
    width: 260px;
    // display: flex
    // justify-content: flex-end;
    // align-items: center;
`

const NFTImg = styled.img`
    margin: 20px 10px;
    height: 300px;
    margin: 0;
    padding: 0;
    width: 100%;
    cursor: pointer;
    background: #d8ff00;

`

const NFTDetails = styled.div`
    
    width: 100%;
    background: black;
    padding-bottom: 10px;

`

const Price = styled.div`
    margin-top:0;
    padding: 20px 10px;
    display: flex;
    align-items: center;
    Justify-content: space-between;
`

const BidButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;  
    margin: 0px 10px;
`

const UserImg = styled.div`
    display: flex;
    align- items: center;
    Justify-content: center;
    cursor: pointer;
    

    img {
        height: 25px;
        margin-right: 8px;
        border-radius: 50%;
     }
`

const Pricing = styled.div`
    

`
const PriceEth = styled.div`
    img {
        width: 12px;
        margin-right: 4px;
     }
    

`
const PriceDolls = styled.div`
    

`

const Button1 = styled.button`
    width: 75%;
    padding: 9px 0;
    background: #b10ffe;
    color: white;
    text-align: center;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    

`

const Button2 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    padding: 8px 8px;
    background: black;
    color: white;
    text-align: center;
    font-weight: bold;
    border-radius: 10px;
    border: 1px solid #b10ffe;
    cursor: pointer;

    span {
        padding-right: 4px;
    }

`