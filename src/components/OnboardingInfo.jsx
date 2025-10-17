
import React from 'react';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";

const OnboardingInfo = () => {
      const navigate = useNavigate();
      const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/import-wallet/Unknown");
  };
  return (
    <div className="flex-shrink-0 pb-6 pt-2 text-center">
      <h1 className="text-3xl font-bold tracking-tight text-white leading-tight">
        Introducing
        <br />
        <span className="bg-gradient-to-r from-[#4DFFBF] to-[#C5F313] text-transparent bg-clip-text">
          the DeFi Superapp
        </span>
      </h1>
      <p className="mt-4 text-gray-300 text-base max-w-xs mx-auto">
        Everything you love about Jupiter. Trading, DeFi, and wallets at your fingertips.
      </p>
      <div className="flex justify-center items-center gap-2 my-8">
        {/* <div className="w-6 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div>
        <div className="w-2 h-2 rounded-full bg-gray-600"></div> */}
      </div>
      <button onClick={handleSubmit} className="w-full bg-[#19f3c5] text-black text-lg font-bold py-3 rounded-2xl shadow-[0_0_20px_rgba(25,243,197,0.4)] hover:bg-[#34ffda] transition-all duration-300">
        Add/Connect Wallet
      </button>
    </div>
  );
};

export default OnboardingInfo;
