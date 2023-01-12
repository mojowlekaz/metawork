import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import {useEffect, useState} from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
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
    
     const navRef = useRef();
    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return(

    
    <nav>
          <span>METAWORK</span>
        <ul>
          <CustomLink className='ot' to="/home">Home</CustomLink>
          <CustomLink to="/arcade">Arcade</CustomLink>
          <CustomLink className='ot'  to="/lottery">Lottery</CustomLink>
            <li>
                <Link to="/play-to-earn">Play To Earn</Link>
            </li>
            <li>
                <Link to="/jobs">Jobs</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/train-to-earn">Train To Earn</Link>
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
      const GoerliChainId = '0x5';
      
  if(!provider){
    
      console.log("Metamask is not installed, please install!");
  }else{
    
    const chainId = await provider.request({ method: 'eth_chainId' });
    
    if(chainId === GoerliChainId){
      
    console.log("Bravo!, you are on the correct network");
  }else{
    
  console.log("oulalal, switch to the correct network");
  try {
    
      await provider.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: GoerliChainId}],
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

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  return(
    <li className= {isActive? "active": ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}
export default Navbar;

