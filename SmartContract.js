import * as SmartContractABI from "./SmartContractABICode.js";
import * as ethers from "https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.1/ethers.min.js"; 

const SMART_CONTRACT_ADDRESS = "0xD799dB0Cbd223770d35853399708bFCf88858Cca";

var SIGNER;

var PROVIDER;

let IS_WALLET_BROWSER_AVAILABLE;

let IS_TEST_MODE_ENABLED = false;

/*
let url = "https://rpc.ankr.com/eth_goerli";
let customHttpProvider = new ethers.JsonRpcProvider(url);

var PROVIDER = new ethers.JsonRpcProvider(url);

console.log( " PROVIDER", PROVIDER);*/

 async function InitContract()
    { 
        const SMART_CONTRACT_INTERFACE = new ethers.Contract(SMART_CONTRACT_ADDRESS,SmartContractABI.SMART_CONTRACT_ABI_CODE,PROVIDER);
        //const SMART_CONTRACT_INTERFACE = new ethers.Contract(SMART_CONTRACT_ADDRESS,SmartContractABI.SMART_CONTRACT_ABI_CODE,SIGNER);
        return SMART_CONTRACT_INTERFACE;
    }

// const SIGNERS =  new PROVIDER.getSigners();
const SMART_CONTRACT_INTERFACE = await InitContract();

 console.log(" SMART CONTRACT",SmartContractABI.SMART_CONTRACT_ABI_CODE);
 console.log( "CONTRACT METHODS", SMART_CONTRACT_INTERFACE);


 ////------------------------------------------------------------------------------------------------------------------///////
 ////------------------------------------------------------------------------------------------------------------------///////
////------------------------------------------------------------------------------------------------------------------///////

async function SmartContractRequestWallets()
{
  let List_Addresses = [];

  try
  {
      PROVIDER = new ethers.BrowserProvider(window.ethereum);
      console.log(" PROVIDER OK  ",PROVIDER);

      IS_WALLET_BROWSER_AVAILABLE = true;
      
  }
  catch
  {
      console.log(" PROVIDER KO  ",PROVIDER);
      IS_WALLET_BROWSER_AVAILABLE = false;
  }

  if(IS_WALLET_BROWSER_AVAILABLE)
  {
      console.log(" PROVIDER OK  ",PROVIDER);
      SIGNER = await PROVIDER.getSigner();
      List_Addresses  = await PROVIDER.send('eth_requestAccounts', []);
  }

  console.log('Available Addresses:', List_Addresses);
  return List_Addresses;
}
window.SmartContractRequestWallets = SmartContractRequestWallets;


async function SmartContractBalanceRequest( _Wallet_Address)
    {
      let  balance=null;
      if(IS_WALLET_BROWSER_AVAILABLE)
        {
          balance = await PROVIDER.getBalance(_Wallet_Address);
          console.log(" SMART CONTRACT RETURNED BALANCE ",balance);
        }
        
      return ethers.formatEther(balance);   
    }
window.SmartContractBalanceRequest = SmartContractBalanceRequest;
