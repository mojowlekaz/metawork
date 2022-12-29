import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {useEffect, useState} from 'react';

function Navbar(){

    const ethers = require("ethers")
    const [walletAddress, setWalletAddress] = useState("")
    useEffect( () => {
        switchN();
      getConnectedWallet();
    })
    
    async function   getConnectedWallet(){
      if (typeof window.ethereum !== 'undefined') 
      try{
      const provider = new ethers.providers.Web3Provider(window.ethereum)            
      await provider.send("eth_requestAccounts", []);
      let signer = await provider.getSigner();
      console.log("Accounts address:", await signer.getAddress());
      let Accounts = await signer.getAddress();
      setWalletAddress(Accounts)
        } 
        catch(err){
        
        }
        else {
          alert.error('Please Install Metamask', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
    
        }
        return true;
      
      }
  async function connect(){
    if (typeof window.ethereum !== 'undefined') 
    try{
    const provider = new ethers.providers.Web3Provider(window.ethereum)            
    await provider.send("eth_requestAccounts", []);
    let signer = await provider.getSigner();
    console.log("Accounts address:", await signer.getAddress());
    let Accounts = await signer.getAddress();
   alert.success('Connected Successfully', { 
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      color: "green",
      })
    setWalletAddress(Accounts)
      } 
      catch(err){
    
      }
      else {
       alert.error('Please Install Metamask', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          })
  
      }
      return true;
    
    }
    
     const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return(

    
    <nav>
          <span>METAWORK</span>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Arcade</a>
            </li>
            <li>
                <a href="">Play To Earn</a>
            </li>
            <li>
                <a href="">Jobs</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Train To Earn</a>
            </li>

            <button onClick={connect}>
            <small>  
                  {walletAddress.length > 0 ? ` ${walletAddress.substring(0,6)}.... ${walletAddress.substring(39)}` : "ConnectWallet"}
                  </small>
            </button>
        </ul>
        </nav>
        
    )

    async function switchN(){

        const provider = window.ethereum;
        const binanceTestChainId = '0x61';
        
    if(!provider){
      
        console.log("Metamask is not installed, please install!");
    }else{
      
      const chainId = await provider.request({ method: 'eth_chainId' });
      
      if(chainId === binanceTestChainId){
        
      console.log("Bravo!, you are on the correct network");
    }else{
      
    console.log("oulalal, switch to the correct network");
    try {
      
        await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: binanceTestChainId}],
      });
      console.log("You have succefully switched to Binance Test network")
      
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
       console.log("This network is not available in your metamask, please add it")
       try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [
            { chainId: '0x61', 
              chainName:'Smart Chain - Testnet',
              rpcUrls:['https://data-seed-prebsc-1-s1.binance.org:8545'],
              blockExplorerUrls:['https://testnet.bscscan.com'],
              nativeCurrency: {
            symbol:'BNB', // 2-6 characters long
        decimals: 18
          }
              
              }],
          });
        } catch (addError) {
          // handle "add" error
          console.log(addError);
        }
      }
    
    }
    }
      }
}
}
export default Navbar;

