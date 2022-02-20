import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useWeb3 } from "@3rdweb/hooks" 



function Header() {
    const { connectWallet, address, error } = useWeb3();
    return (
        <Nav>
            <Logo> DeedsDAO</Logo>
            
            <NavItems>
                {/* <NavItem>

                    <SearchIcon style={{'width': "17.5px", "margin-right": "7px",
                        "display": "flex", "align-items": "center", "justify-content": "center"
                    }}/>
                    <span>Search</span>
                    
                </NavItem> */}

                <NavItem>
                    <a >Marketplace</a>
                </NavItem>
                {/* <NavItem>
                    <AccountCircleIcon style={{'width': "17.5px", "margin-right": "7px",
                         "display": "flex", "align-items": "center", "justify-content": "center"}}/>
                    <span>Profile</span>
                    <ArrowDropDownIcon style={{"width": "24px","height": "24px", "margin-left": "7px",
                         "display": "flex", "align-items": "center", "justify-content": "center"}}/>
                </NavItem> */}
                <Button text="Create NFT" color= "#ff8c00" borderColor="1px solid #ff8c00"/>
                <ConnectWallet className="">
                    {address ? (
                    <div className="address">
                        <p className="wallet">Wallet Connected</p>
                        <p><small>{address.slice(0, 7)}...{address.slice(35)}</small></p>
                    </div>
                    ) : (
                    <Button text="Connect Wallet" color= "#ff8c00" borderColor="none" 
                    icon = {true}  click={() => connectWallet('injected')}/> )}
                </ConnectWallet>
            </NavItems>
        </Nav>
    )
}

export default Header

const Nav = styled.div`
    display: flex;
    justify-content:space-between;
    align-items: center;
    height: 70px;
    padding: 0 36px;

`

const Logo = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    font-size: 1.5em;
    font-weight: bold;
    color: #ff8c00;

`

const NavItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavItem = styled.div`

    margin-left: 25px;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const ConnectWallet = styled.div`

    .address {
        margin-bottom: 0;
        margin-left: 25px;
        

        .wallet {
            color: #ff8c00;
            margin-bottom: 0;
            font-weight: bold;
        }
        p {
            margin-top: 0;
            margin-bottom: 0;
            
        }
    }

`