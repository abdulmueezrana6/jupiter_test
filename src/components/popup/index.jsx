import "./popup.scss";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import metamask from "../../assets/metamask.png";
import eth from "../../assets/eth.png";
import phantom from "../../assets/phantom.png";
import okx from "../../assets/okx.png";
import solfare from "../../assets/solfare.png";
import walletconnect from "../../assets/walletconnect.png";
import backpack from "../../assets/backpack.png";
import coinbase from "../../assets/coinbase.png";
import trust from "../../assets/trust.jpg";
import coin98 from "../../assets/coint98.jpg";
import frontier from "../../assets/frontier.png";
import ledger from "../../assets/ledger.png";

Modal.setAppElement("#root");

const MyPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  const redirectSelectWallet = (wallet) => {
    navigate("/import-wallet/" + wallet);
    onClose();
  };

  const wallets = [
    { name: "MetaMask", icon: metamask },
    { name: "Ethereum Wallet", icon: eth },
    { name: "Phantom", icon: phantom },
  ];

  const moreWallets = [
    { name: "Coinbase Wallet", icon: coinbase },
    { name: "Trust Wallet", icon: trust },
    { name: "Ledger", icon: ledger },
    { name: "WalletConnect", icon: walletconnect },
    { name: "OKX Wallet", icon: okx },
    { name: "Solflare", icon: solfare },
    { name: "Backpack", icon: backpack },
    { name: "Coin98", icon: coin98 },
    { name: "Frontier", icon: frontier },
  ];

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      zIndex: 1000,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      border: "none",
      background: "transparent",
      inset: "unset",
      padding: 0,
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyle}
      shouldCloseOnOverlayClick={true}
    >
      {/* Hiệu ứng viền mờ + đổ bóng */}
      <div
        className={`relative bg-white rounded-3xl border border-gray-100 shadow-[0_0_20px_rgba(0,0,0,0.05)] 
        w-full max-w-sm mx-auto p-6 transform transition-all duration-500 ease-out
        ${isOpen ? "animate-fadeSlideIn" : ""}`}
        style={{
          maxHeight: "95vh",
          overflowY: "auto",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Glow viền nhẹ bên ngoài */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/70 shadow-[0_0_15px_rgba(255,255,255,0.6)]"></div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 text-center mt-2">
          Connect Wallet
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Choose a wallet to connect
        </p>

        {/* Installed Wallets */}
        <div className="space-y-3">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => redirectSelectWallet(wallet.name)}
              className="flex items-center justify-between w-full border border-gray-200 rounded-2xl p-3
              hover:bg-gray-50 active:bg-gray-100 transition"
            >
              <div className="flex items-center gap-3">
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-gray-800 font-medium">{wallet.name}</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
        </div>

        {/* More wallets */}
        {isMoreOpen && (
          <div className="space-y-3 mt-3.5 animate-fadeSlideIn">
            {moreWallets.map((wallet) => (
              <button
                key={wallet.name}
                onClick={() => redirectSelectWallet(wallet.name)}
                className="flex items-center justify-between w-full border border-gray-200 rounded-2xl p-3
                hover:bg-gray-50 active:bg-gray-100 transition"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={wallet.icon}
                    alt={wallet.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-gray-800 font-medium">{wallet.name}</span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        )}

        {/* Footer: two elements on one line */}
        <div className="mt-6 flex items-center justify-between text-sm px-2">
          <button
            onClick={() => setIsMoreOpen(!isMoreOpen)}
            className="text-blue-600 hover:text-blue-800 font-medium transition"
          >
            {isMoreOpen ? "▲ Show less" : "▼ Show more"}
          </button>

          <button className="text-gray-500 hover:text-gray-700 transition">
            Can't find a wallet?
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default MyPopup;

