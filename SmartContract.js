let valuetemp = 117;
console.log( "INIT JS SCRIPT",valuetemp );

// import * as ethers from "https://raw.githubusercontent.com/quwilliam/PetTheDog/main/node_modules/ethers/dist/ethers.min.js";
import * as SmartContractABI from "./SmartContractABICode.js";

var script = document.createElement('script');
script.src='https://cdnjs.cloudflare.com/ajax/libs/ethers/6.13.1/ethers.min.js';
script.onload = function() {
console.log( "external lib loaded ");
};

document.head.appendChild(script);




