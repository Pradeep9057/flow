// https://docs.metamask.io/guide/ethereum-provider.html#using-the-provider
import React, { useState } from 'react'
import { ethers } from 'ethers'
import "./WalletCard.css"
import { useNavigate, NavLink } from 'react-router-dom';

const WalletCard = (props) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            console.log('MetaMask Here!');

            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChangedHandler(result[0]);
                    setConnButtonText('Wallet Connected');
                    getAccountBalance(result[0]);
                })
                .catch(error => {
                    setErrorMessage(error.message);

                });

        } else {
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
        if (defaultAccount) { navigate("/") };

    }

    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        getAccountBalance(newAccount.toString());
    }

    const getAccountBalance = (account) => {
        window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
            .then(balance => {
                setUserBalance(ethers.utils.formatEther(balance));
            })
            .catch(error => {
                setErrorMessage(error.message);
            });
    };

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }


    // listen for account changes
    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);

    if (userBalance) {
        // props.onSubmit(defaultAccount);
        props.onSubmit(userBalance);
        navigate("/");

    }

    return (
        <div className="main">
            <div className="mainInside">
            <div className='walletCard iteams'>
                <h4 className='items'> {"Connection to MetaMask using window.ethereum methods"} </h4>
                <button className='items button' onClick={connectWalletHandler}>{connButtonText}</button>

                <div className='accountDisplay items'>
                    {/* <h3>Address: {defaultAccount}</h3> */}
                    {/* {console.log(defaultAccount)} */}
                </div>
                <div className='balanceDisplay items'>
                    {/* <h3>Balance: {userBalance}</h3> */}
                </div>
                {errorMessage}
                </div>
                </div>
        </div>
	);
}
export default WalletCard;
