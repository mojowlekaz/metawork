import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {useEffect, useState} from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import {abi, CA} from "/Users/macbook/metawork/src/Components/data.js"

function Navbar(){
  const path = window.location.pathname
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
    async function lottery() {
      let amount = document.getElementById("m").value;
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer =  await provider.getSigner();
      let signature = await signer.signMessage ("EnterLottery");
      let  Contract = new ethers.Contract(CA,  abi, signer);
      const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log(account);
      await Contract.EnterLottery({value: ethers.utils.parseUnits(amount, "ether") ,gasLimit: 400000}).value
      const tx = {
        from: signer,
        to: CA,
        value: amount,
        gasLimit: 400000,
      }
    console.log(tx)
    }
    
    const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return(
    <div className="this">
    <nav>
          <span>METAWORK</span>

            <button onClick={connect}>
            <small>  
                  {walletAddress.length > 0 ? ` ${walletAddress.substring(0,6)}.... ${walletAddress.substring(39)}` : "ConnectWallet"}
                  </small>
            </button>
        </nav>
        <div className="k">
            <h1 className="bb">Lottery dApp</h1>
            </div>
        <div className="thi">
               <input id="m" className="des"  name="stake" placeholder="Enter lottery with min of 0.2 ETH" type="number" min="0.2" step= "0.1" /> 
   <button id='' onClick={lottery} className='btn1'>Enter Lottery</button>  
        </div>
        <div id="">
          <small>

          </small>
        </div>
</div>
        
    )

    async function switchN(){

        const provider = window.ethereum;
        const GoeliChainId = '0x5';
        
    if(!provider){
      
        console.log("Metamask is not installed, please install!");
    }else{
      
      const chainId = await provider.request({ method: 'eth_chainId' });
      
      if(chainId === GoeliChainId){
        
      console.log("Bravo!, you are on the correct network");
    }else{
      
    console.log("oulalal, switch to the correct network");
    try {
      
        await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: GoeliChainId}],
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
            { chainId: '0x5', 
              chainName:'Goerli test network',
              rpcUrls:['https://goerli.infura.io/v3/'],
              blockExplorerUrls:['https://goerli.etherscan.io'],
              nativeCurrency: {
            symbol:'GoerliETH', // 2-6 characters long
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

