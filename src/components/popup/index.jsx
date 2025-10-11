import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import "./popup.scss";
import metamask from "../../assets/metamask.png"; 
import eth from "../../assets/eth.png";
import phantom from "../../assets/phantom.png";
import okx from "../../assets/okx.png";
import solfare from "../../assets/solfare.png";
import walletconnect from "../../assets/walletconnect.png";
import backpack  from "../../assets/backpack.png";
import coinbase  from "../../assets/coinbase.png";
import trust  from "../../assets/trust.jpg";
import coin98  from "../../assets/coint98.jpg";
import frontier  from "../../assets/frontier.png";
import ledger  from "../../assets/ledger.png";


Modal.setAppElement("#root");


const MyPopup = ({ isOpen, onClose, onSave }) => {
const navigate = useNavigate();
  const [IsMoreWallet, SetMoreWallet] = useState(false);
  const redirectSelectWallet = (e) => {
    navigate("/import-wallet/"+e);
  };

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    }
  };
  return (
    <Modal
    style={modalStyle}
      className={"css-1vx73dy mg-top-phone"}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Select your wallet"
      shouldCloseOnOverlayClick={false}
    >
      <>
        <div className="css-1pt1vl2">
                <div className="css-1km4atu">
                    <div>
                        <div className="css-16ceglb"><span>Connect Wallet</span></div>
                        <div className="css-df9rzr"><span>You need to connect a Solana wallet.</span></div>
                    </div>
                </div>
                <div className="css-1xwazdk webkit-scrollbar"><span className="css-eojnhe">Installed
                        wallets</span>
                    <div className="css-18u6ey2">
                        <div onClick={() => redirectSelectWallet('MetaMask')} className="css-1td7ub7">
                            <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={metamask} alt="MetaMask Wallet icon" className="css-k19fg7"/></div><span className="css-1l38ei2">MetaMask</span>
                        </div>
                        <div onClick={() => redirectSelectWallet('Ethereum Wallet')} className="css-1td7ub7">
                            <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={eth} alt="Ethereum Wallet icon" className="css-k19fg7"/></div><span className="css-1l38ei2">Ethereum
                                Wallet</span>
                        </div>
                        <div onClick={() => redirectSelectWallet('Phantom')} className="css-1td7ub7">
                            <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={phantom} alt="Phantom Wallet icon" className="css-k19fg7"/></div><span className="css-1l38ei2">Phantom</span>
                        </div>
                    </div>
                    <div onClick={()=>{
                                  SetMoreWallet(!IsMoreWallet);
                                }} className="css-vambv7"><span className="css-1ide98v"><span>More
                                wallets</span></span>
                                <div className="css-s5xdrg">
                                  <span className="css-f47xmg">
                                    <svg  style={{display: IsMoreWallet ? 'block' : 'none'}} width="10" height="6" viewBox="0 0 10 6" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z" fill="currentColor"></path>
                                    </svg>
                                    <svg style={{display: !IsMoreWallet ? 'block' : 'none'}} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 5.70711C0.683416 6.09763 1.31658 6.09763 1.7071 5.70711L4.99999 2.41421L8.29288 5.70711C8.6834 6.09763 9.31657 6.09763 9.70709 5.70711C10.0976 5.31658 10.0976 4.68342 9.70709 4.29289L5.7071 0.292893C5.31657 -0.097631 4.68341 -0.097631 4.29289 0.292893L0.292893 4.29289C-0.0976309 4.68342 -0.0976309 5.31658 0.292893 5.70711Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                        </div>
                    </div>

                    <div className="css-wlsnmg" id="multiConnect" style={{display: IsMoreWallet ? 'inline-block' : 'none',height: 'auto'}}>
                        <div>
                            <div className="css-1rigx3j">
                                <ul>
                                    <li onClick={() => redirectSelectWallet('OKX Wallet')} className="css-19rqjni">
                                        <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={okx} alt="OKX Wallet icon" className="css-k19fg7"/></div><span className="css-18g8lgp">OKX Wallet</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => redirectSelectWallet('Solflare')} className="css-19rqjni">
                                        <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={solfare} alt="Solflare icon" className="css-k19fg7"/></div><span className="css-18g8lgp">Solflare</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => redirectSelectWallet('Ledger')} className="css-19rqjni">
                                        <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={ledger} alt="Ledger icon" className="css-k19fg7"/></div><span className="css-18g8lgp">Ledger</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => redirectSelectWallet('WalletConnect')} className="css-19rqjni">
                                        <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={walletconnect} alt="WalletConnect icon" className="css-k19fg7"/></div><span className="css-18g8lgp">WalletConnect</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => redirectSelectWallet('Backpack')} className="css-19rqjni">
                                        <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={backpack} alt="Backpack icon" className="css-k19fg7"/></div><span className="css-18g8lgp">Backpack</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => redirectSelectWallet('Coinbase Wallet')} className="css-19rqjni">
                                        <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={coinbase} alt="Coinbase Wallet icon" className="css-k19fg7"/></div><span className="css-18g8lgp">Coinbase Wallet</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => redirectSelectWallet('Trust Wallet')} className="css-19rqjni">
                                        <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={trust} alt="Trust icon" className="css-k19fg7"/></div><span className="css-18g8lgp">Trust</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => redirectSelectWallet('Coin98 Wallet')} className="css-19rqjni">
                                        <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={coin98} alt="Coin98 icon" className="css-k19fg7"/></div><span className="css-18g8lgp">Coin98</span>
                                    </li>
                                </ul>
                                <ul>
                                    <li onClick={() => redirectSelectWallet('Frontier Wallet')} className="css-19rqjni">
                                        <div style={{minWidth: '30px', minHeight: '30px'}}><img width="30" height="30" src={frontier} alt="Frontier icon" className="css-k19fg7"/></div><span className="css-18g8lgp">Frontier</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="css-15s9zgf"><a href="#" target="_blank" rel="noopener noreferrer"><span>Can't find your wallet?</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="css-ms0594"><button type="button"><span>I don't have a wallet</span></button></div>
                </div>
            </div>
      </>
    </Modal>
  );
};

export default MyPopup;
