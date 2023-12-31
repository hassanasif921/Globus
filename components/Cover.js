import styles from "../styles/Cover.module.css"
import Link from "next/link"
import React,{ useState } from "react";
import { useEffect } from "react";
let Web3 = require('web3')

var balance_;
var minPurchase_;
var maxPurchase_;
var rate_;
let bscscanTokenUrl_;
let bscscanContractUrl_;
let tokenImageUrl_;
let audited_;
let verified_;
let percentage_;
let totalSupply_;
let tokenForPresale_;


const MyComponent = () => {

    let tokenData = {
        "id": "1",
        "token": "0x30e55D4C732DdEc11a45C897D1D8fce3c6EDEfCc",
        "presaleContract": "0x3d4658FA45fd6c93B1628e97a7EEBC1F036c530C",
        "contractABI": "",
        "tokenIconURL": "/globus-logo-short.png",
        "tokenName": "Globus Smart Coin",
        "tokenSymbol": "GLSC",
        "tokenForPresaleInitial": "2",
        "tokenForPresaleNumberOfZeros": "14",
        "totalSupplyInitial": "1",
        "totalSupplyNumberOfZeros": "15",
        "decimals": "18",
        "hardCap": "4000000000000000000000",
        "rate": "2600000000",
        "type": "BEP20",
        "presaleRunning": "false",
        "kycVerified": "",
        "smartContractAudit": "",
    }
    // https://github.com/kredict/audit/blob/main/globusaudit.pdf

    const [web3, setWeb3] = useState(null)
    const [address, setAddress] = useState(null)
    const [contract, setContract] = useState(null)
    const [balance, setBalance] = useState(null)

    // let abi = JSON.parse(tokenData.contractABI);
    let abi = [
        {
            "inputs": [],
            "name": "buyTokens",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "beneficiary",
                    "type": "address"
                }
            ],
            "name": "collectLeftTokens",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "beneficiary",
                    "type": "address"
                }
            ],
            "name": "collectOwnableAmount",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "OwnerCollectedBNB",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "tokens",
                    "type": "uint256"
                }
            ],
            "name": "OwnerCollectedTOKEN",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "startedBy",
                    "type": "address"
                }
            ],
            "name": "PresaleStarted",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "stoppedBy",
                    "type": "address"
                }
            ],
            "name": "PresaleStoped",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "name": "setOwner",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "status",
                    "type": "string"
                }
            ],
            "name": "setStatus",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "token",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "tokenName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "tokenSymbol",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "rate",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "weiRaised",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "totalSupply",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "minPurchase",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "maxPurchase",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "endTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "softCap",
                    "type": "uint256"
                }
            ],
            "name": "startPresale",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "stopPresale",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "buyer",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                }
            ],
            "name": "TokensPurchased",
            "type": "event"
        },
        {
            "stateMutability": "payable",
            "type": "receive"
        },
        {
            "inputs": [],
            "name": "_admin",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_decimals",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_endTime",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_maxPurchase",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_minPurchase",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_presaleStarted",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_presaleStatus",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_softCap",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_startTime",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_token",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_tokenName",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_tokenSymbol",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_totalSupply",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "_weiRaised",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "holders",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "host",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "TokenBalanceOf",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    let contractAddress = tokenData.presaleContract;

    useEffect(() => {
        let endTime_;

        window.ethereum ?
            ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
                setAddress(accounts[0])
                let w3 = new Web3(ethereum)
                setWeb3(w3)

                let _balance = w3.eth.getBalance(accounts[0]).then((_balance) => {
                    document.getElementById("balance-text").innerHTML = (_balance / 10 ** 18).toString().slice(0, 7)
                    balance_ = _balance
                })

                let c = new w3.eth.Contract(abi, contractAddress)
                setContract(c)

                c.methods._totalSupply().call().then((_supply) => {
                    _supply = _supply / 10 ** 18
                    document.getElementById('total-supply').innerHTML = _supply;
                    // document.getElementById('remaing-token').innerHTML = _supply;
                }).catch((err) => console.log(err))

                c.methods._softCap().call().then((_hardCap) => {
                    _hardCap = _hardCap / 10 ** 18;
                    document.getElementById('hard-cap').innerHTML = _hardCap;
                }).catch((err) => console.log(err))

                // c.methods._rate().call().then((_rate) => {
                //     document.getElementById('rate').innerHTML = _rate;
                // }).catch((err) => console.log(err))

                c.methods._weiRaised().call().then((_weiRaised) => {
                    let _bnb = _weiRaised / 10 ** 18;
                    document.getElementById('amount-raised').innerHTML = _bnb + " BNB";
                    let percentage = (_bnb / tokenData.hardCap*10**18) * 100
                    document.getElementById('bar-percentage').style.width = percentage.toString();
                    document.getElementById('target-percentage').innerHTML = percentage.toString().slice(0, 7) + " %"
                    localStorage.setItem("percentage", percentage);

                    percentage_ = percentage;
                }).catch((err) => console.log(err))

                c.methods._minPurchase().call().then((minAmount) => {
                    minPurchase_ = minAmount
                }).catch((err) => console.log(err))

                c.methods._maxPurchase().call().then((maxAmount) => {
                    maxPurchase_ = maxAmount
                }).catch((err) => console.log(err))
                c.methods.host().call().then((host) => {
                    document.getElementById('host').innerHTML = host + " ";
                }).catch((err) => console.log(err))

                // c.methods._endTime().call().then((endTime) => {
                //     endTime = 0 // to stop timer
                //     const day = document.getElementById('days');
                //     const hr = document.getElementById('hours');
                //     const min = document.getElementById('minutes');
                //     const sec = document.getElementById('seconds');

                //     const eventDate = endTime * 1000;
                //     const id = setInterval(() => {
                //         const now = new Date().getTime();
                //         // if (now > eventDate)
                //         const diff = eventDate - now;

                //         const d = Math.floor(eventDate / (1000 * 60 * 60 * 24) - (now / (1000 * 60 * 60 * 24)));
                //         const h = Math.floor((eventDate / (1000 * 60 * 60) - (now / (1000 * 60 * 60))) % 24);
                //         const m = Math.floor((eventDate / (1000 * 60) - (now / (1000 * 60))) % 60);
                //         const s = Math.floor((eventDate / (1000) - (now / (1000))) % 60);

                //         if (diff > 0) {
                //             day.innerHTML = d;
                //             hr.innerHTML = h;
                //             min.innerHTML = m;
                //             sec.innerHTML = s;
                //         }
                //         else {
                //             day.innerHTML = 0;
                //             hr.innerHTML = 0;
                //             min.innerHTML = 0;
                //             sec.innerHTML = 0;
                //         }
                //     }, 1000);

                // }).catch((err) => console.log(err))

                c.methods._presaleStatus().call().then((_status) => {
                    let status;
                    if (_status) {
                        status = "ACTIVE";
                    }
                    else {
                        status = "PAUSED";
                    }
                    // document.getElementById("presale-status").innerHTML = _status;

                }).catch((err) => console.log(err))

                // Disabling buy button initially
                document.getElementById("buy-button").disabled = true;
                document.getElementById("buy-button").style.background = "black"
                document.getElementById("buy-button").style.boxShadow = "none"
                document.getElementById("buy-button").style.cursor = "not-allowed"

                if (tokenData.instagram == "") {
                    document.getElementById('instagram').style.display = "none";
                }
                if (tokenData.facebook == "") {
                    document.getElementById('facebook').style.display = "none";
                }
                if (tokenData.website == "") {
                    document.getElementById('website').style.display = "none";
                }
                if (tokenData.whitepaper == "") {
                    document.getElementById('whitepaper').style.display = "none";
                }
                if (tokenData.telegram == "") {
                    document.getElementById('telegram').style.display = "none";
                }
                if (tokenData.twitter == "") {
                    document.getElementById('twitter').style.display = "none";
                }
                if (tokenData.email == "") {
                    document.getElementById('email').style.display = "none";
                }
                if (tokenData.smartContractAudit == "") {
                    document.getElementById('audited').style.display = "none";
                }
                if (tokenData.kycVerified == "") {
                    document.getElementById('verified').style.display = "none";
                }
                if (tokenData.youtube == "") {
                    document.getElementById('youtube').style.display = "none";
                }


            }).catch((err) => console.log(err))
            : console.log("Please install MetaMask")



    }, [])

    useEffect(() => {

    })


    function buyToken(amount) {
        let _price = web3.utils.toWei(amount);
        // let encoded = contract.methods.buyTokens()

        let tx = {
            from: address,
            to: contractAddress,
            value: web3.utils.numberToHex(_price)
        }
        let txHash = ethereum.request({
            method: 'eth_sendTransaction',
            params: [tx],
        }).then((hash) => {
            alert("Transaction hash: " + hash)
        }).catch((err) => console.log(err))

        return txHash
    }

    function validateExchangeAmount(e) {
        document.getElementById("error-text").style.display = "none";
        document.getElementById("notice-text").style.display = "none";
        console.log(minPurchase_, maxPurchase_)
        let value = document.getElementById('quantity').value;
        let walletBalance = balance_ / 10 ** 18;
        let minPurchase = minPurchase_ / 10 ** 18;
        let maxPurchase = maxPurchase_ / 10 ** 18;
        var valid = true;
        if (value > walletBalance) {
            document.getElementById('quantity').value = Number(walletBalance.toString().slice(0, 6))
            value = document.getElementById('quantity').value;
            document.getElementById('notice-text').innerHTML = "You'll get ~ " + value * tokenData.rate + " " + tokenData.tokenSymbol
            document.getElementById('notice-text').style.display = "flex";
            validateExchangeAmount()
        }
        else if (value < minPurchase) {
            valid = false
            document.getElementById("error-text").innerHTML = "minimum exchnage amount is " + minPurchase + " BNB";
            document.getElementById("error-text").style.display = "flex";
            document.getElementById("buy-button").disabled = true;
            document.getElementById("buy-button").style.background = "black"
            document.getElementById("buy-button").style.boxShadow = "none"
            document.getElementById("buy-button").style.cursor = "not-allowed"
        }
        else if (value > maxPurchase) {
            valid = false;
            document.getElementById("error-text").innerHTML = "maximun exchnage amount is " + maxPurchase + " BNB";
            document.getElementById("error-text").style.display = "flex";
        }
        if (valid && walletBalance > minPurchase) {
            document.getElementById('notice-text').innerHTML = "You'll get ~ " + value * tokenData.rate + " " + tokenData.tokenSymbol
            document.getElementById('notice-text').style.display = "flex";
            document.getElementById("buy-button").disabled = false;
            document.getElementById("buy-button").style.background = "linear-gradient(to bottom, rgb(255,180,60),rgb(146, 90, 0))"
            document.getElementById("buy-button").style.boxShadow = "0px 0px 5px rgb(255,180,60)"
            document.getElementById("buy-button").style.cursor = "pointer"
            document.getElementById("buy-button").style.color = "black"
        }
    }

    function buyButtonPressed() {
        let value = document.getElementById('quantity').value;
        buyToken(value)
    }

    bscscanTokenUrl_ = "https://bscscan.com/token/" + tokenData.token;
    bscscanContractUrl_ = "https://bscscan.com/address/" + tokenData.presaleContract;
    tokenImageUrl_ = tokenData.tokenIconURL;
    audited_ = tokenData.smartContractAudit;
    verified_ = tokenData.kycVerified;

    var zeros = ""
    for (var i = 0; i < tokenData.totalSupplyNumberOfZeros; i++) {
        zeros += "0"
    }
    totalSupply_ = tokenData.totalSupplyInitial + zeros;

    zeros = ""
    for (var j = 0; j < tokenData.tokenForPresaleNumberOfZeros; j++) {
        zeros += "0"
    }
    tokenForPresale_ = tokenData.tokenForPresaleInitial + zeros;

    useEffect(() => {
        percentage_ = localStorage.getItem("percentage")
    })

    function focusPresale() {
        document.getElementById("presale-container").style.boxShadow = "0px 0px 10px rgb(255,180,60)";
    }

    function copyAddress() {
        var copyText = document.getElementById("contract-address");
        // copyText.select();
        // copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.innerHTML);
        alert("Address Copied to Clipboard");
    }


    const targetDate = new Date('2024-02-01T00:00:00');
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
      }, 1000);
  
      return () => clearInterval(interval);
    }, [targetDate]);
  
    function calculateTimeLeft(targetDate) {
      const now = new Date();
      const difference = targetDate - now;
  
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
  
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
      return { days, hours, minutes, seconds };
    }
  


    return (
        <>
            <section className={styles.cover}>
                {/* <img src="/" /> */}
                <video autoPlay muted loop className={styles.video}>
                    <source src="/cover-video.mp4" type="video/mp4" />
                </video>

                <div className={styles.particlesWrapper}>
                    <div id="particles-js"></div>
                </div>
                <div className={styles.tokenPresaleContainer}>
                    <div className={styles.tokenPresaleContainerInner} id="presale-container">
                        <div className={styles.cardHeader}>
                            <div className={styles.logoBlock}>
                                <img src={tokenImageUrl_} alt="token-image" className={styles.tokenImagePrime} />
                            </div>

                            <div className={styles.primeBlock}>
                                <h2 className={styles.tokenNamePrime}>{tokenData.tokenName}</h2>
                                <p className={styles.exchangeMode}>{tokenData.tokenSymbol} / BNB</p>
                                <a target="_blank" href={bscscanTokenUrl_} rel="noreferrer">View on Bscscan</a>
                            </div>
                            <div className={styles.badgeHeader}>
                                <a target="_blank" rel="noreferrer" href={tokenData.smartContractAudit} className={styles.auditedBadge} title="Smart Contract Audited" id='audited'><i className="las la-check-circle"></i>Audited</a>

                                <a target="_blank" rel="noreferrer" href={tokenData.kycVerified} className={styles.verifiedBadge} title="KYC Verified" id='verified'><i className="las la-shield-alt"></i>Verified</a>
                            </div>
                        </div>
                        <div className={styles.countdownContainer}>
                            <div className={styles.countdownWrapper}>
                                <p><span >{timeLeft.days}</span></p>:
                                <p><span >{timeLeft.hours}</span></p>:
                                <p><span >{timeLeft.minutes}</span></p>:
                                <p><span >{timeLeft.seconds}</span></p>
                                {/* <p><span id='days'></span></p>:
                                <p><span id='hours'></span></p>:
                                <p><span id='minutes'></span></p>:
                                <p><span id='seconds'></span></p> */}
                            </div>
                        </div>
                        <div className={styles.actionBlockPrime}>
                            <input type="number" className={styles.quantityInput} placeholder="Exchange Quantity" id='quantity' onChange={validateExchangeAmount}></input>
                            <small className={styles.balanceText}>Balance: <small id="balance-text"></small> BNB</small>
                            <small id='notice-text' className={styles.noticeText}></small>
                            <small id='error-text' className={styles.errorText}></small>
                            <button className={styles.buyButton} onClick={buyButtonPressed} id='buy-button'>Buy</button>
                        </div>


                        <div className={styles.rateBlockPrime}>
                            <p className={styles.currencyToToken}>1 BNB = <span id="rate">{tokenData.rate}</span> {tokenData.tokenSymbol}</p>
                        </div>
                        <div className={styles.barBlockPrime}>
                            <div className={styles.upperStatLine}>
                                <p className={styles.upperStatCode} id="presale-status">Paused</p>
                                <p className={styles.upperStatPercentage} id="target-percentage"></p>
                            </div>
                            <div className={styles.barActualPrime}>
                                <div className="barRatePrime" id='bar-percentage'></div>
                            </div>
                            <style jsx>{`
                                .barRatePrime{
                                    height: 100%;
                                    width:0%;
                                    width: ${percentage_}%;
                                    border-radius: 10px;
                                    background: linear-gradient(to bottom, rgb(255,180,60),rgb(146, 90, 0));
                                }
                                `}
                            </style>
                            <div className={styles.lowerStatLine}>
                                <p className={styles.lowerStatCurrency} id="amount-raised"></p>
                                <p className={styles.lowerStatToken}>Soft Cap <span id="hard-cap">4000</span> BNB</p>
                            </div>
                        </div>
                        <div className={styles.leastDetailBlockPrime}>
                            <a className={styles.leastDetailTagPrime} href={bscscanContractUrl_} rel="noreferrer" target="_blank">View Presale Smart Contract Address</a>
                            {/* <div className={styles.leastDetailTagBlock}>
                                <p>Presale</p>
                                <p>ON</p>
                            </div> */}
                        </div>

                    </div>
                    {/* <div className={styles.brandText}><Link href="https://www.kredict.com"><a target="_blank" rel="noreferrer" id="host">Powered by KREDICT</a></Link></div> */}

                </div>



                <div className={styles.textSection}>

                    <h2 className={styles.header}>Globus ICO</h2>
                    <h4 className={styles.tag}>
                        Globus Smart Chain was born from the idea of creating something
                        where we can create a ecosystem of services and
                        products which gives boost to global usage of crypto assets
                        by the crypto community as well as the normal user.
                    </h4>

                    <div className={styles.actionWrapper}>
                        <Link href="#whitepaper"><a className={styles.actionBtn}>Whitepaper</a></Link>
                        <a className={styles.actionBtn} onClick={focusPresale}>Buy Now</a>
                    </div>
                </div>
            </section>
            <div className={styles.contractNoteSection}>
                <p className={styles.contractNote}>You can buy GLSC also by sending BNB directly to Presale Contract</p>
                <p id="contract-address" className={styles.contractAddress}>{tokenData.presaleContract}</p><br/>
                <a className={styles.actionBtnCopy} onClick={copyAddress}>Copy Address</a>
            </div>
        </>
    )
}



MyComponent.displayName = "MyComponent"
export default MyComponent;
