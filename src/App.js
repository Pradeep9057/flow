import './App.css';
import Front from './Front';
import React, { useState } from 'react';
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import Calender from './Calender/Calender.js';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sch_meet from './Sch_meet/Sch_meet.js';
import Web3 from 'web3';
import contractABI from './contractABI.json';
import WalletCard from './WalletCard';

// npm i eslint-plugin-react-hooks

function App() {
  const [userData, setUserData] = useState();
  // const web3 = new Web3('http://localhost:7545');
  // const contractAddress = '0x499861e3ea95B4fB99aB2d19055C126EbC9B2Cde';
  // const contract = new web3.eth.Contract(contractABI, contractAddress);
  // contract.methods.getBalance().call().then((result) => {
  //   console.log(`The balance is ${result} ether.`);
  // }).catch((error) => {
  //   console.error(`Failed to get balance: ${error}`);
  // });

  const getData = (data) => {
    setUserData(data);
     
  }
  return (
    <div >
      {/* {userData} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Front data={userData} />}></Route>
          <Route path="/calender" element={<Calender />}></Route>
          <Route path="/sch_meet" element={<Sch_meet />}></Route>
          <Route path="/walletCard" element={<WalletCard onSubmit={getData}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
