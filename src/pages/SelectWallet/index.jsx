import React, { useState,useEffect} from "react";
import '../SelectWallet/index.scss';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import MyPopup from "../../components/popup";

const SelectWallet = () => {
const [isPopupOpen, setPopupOpen] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div id="app-content">
       <MyPopup isOpen={isPopupOpen} onClose={closePopup} />
<div className="flex flex-col min-h-screen justify-between bg-v2-background-page">
            <div className="flex flex-col w-full">
                <div className="text-center py-2 text-xs text-[#333333] bg-labs font-semibold relative animate-fade-in transition-all flex justify-center h-[34px]">
                    <a target="_blank" rel="noopener noreferrer" className="flex justify-center space-x-1 underline" href="https://twitter.com/weremeow/status/1746923653055586716?s=20"><span>JM! The Jupuary Final
                            Sprint Has Begun - Join us!</span></a>
                    <div className="cursor-pointer absolute right-4 top-2.5"><svg width="12" height="12" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.0336 16.2126L8.2336 10.0126L2.0336 3.81263C1.7961 3.57903 1.66172 3.25951 1.66016 2.92669C1.65938 2.59309 1.79141 2.27357 2.02734 2.03763C2.26328 1.80247 2.5828 1.67045 2.9164 1.67201C3.25 1.67357 3.56874 1.80795 3.80234 2.04623L9.99994 8.24623L16.1999 2.04623C16.4335 1.80795 16.7523 1.67357 17.0859 1.67201C17.4187 1.67045 17.739 1.80248 17.9749 2.03763C18.2109 2.27357 18.3429 2.59309 18.3413 2.92669C18.3406 3.25951 18.2062 3.57903 17.9687 3.81263L11.7663 10.0126L17.9663 16.2126C18.2038 16.4462 18.3382 16.7658 18.3397 17.0986C18.3405 17.4322 18.2085 17.7517 17.9725 17.9876C17.7366 18.2228 17.4171 18.3548 17.0835 18.3533C16.7499 18.3517 16.4311 18.2173 16.1975 17.979L9.99994 11.779L3.79994 17.979C3.31088 18.4611 2.52494 18.4579 2.039 17.9736C1.55384 17.4884 1.54994 16.7025 2.03119 16.2126L2.0336 16.2126Z" fill="currentColor"></path>
                        </svg></div>
                </div>
                <div className="dark:bg-black/[.35]  flex items-center lg:justify-between h-[48px] lg:h-[60px] w-full px-2.5 lg:px-5">
                    <div className="flex lg:hidden items-center flex-1">
                        <a className="flex-shrink-0" href="/">
                            <h1 className="flex items-center text-base font-semibold dark:text-white">
                                <img alt="Jupiter" style={{color:'transparent'}} src="https://d1c0tjyubqkol1.cloudfront.net/svg/jupuary-cat.svg"/>
                            </h1>
                        </a>
                        <div className="ml-2.5">
                            <div className="flex lg:hidden justify-center text-sm">
                                <a className="hover:bg-[#192531] hover:text-v2-primary" href="/">
                                    <button type="button" className="flex items-center font-semibold justify-center fill-current h-[48px] lg:h-[60px] px-4 lg:px-6 text-xs lg:text-sm text-v2-primary hover:!text-v2-primary bg-[#192531]">
                                        <span className="hidden lg:flex w-5 mr-2 fill-current">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.04537 14.5833C4.72134 15.5235 5.58842 16.3103 6.58975 16.8919C7.59108 17.4735 8.70405 17.8369 9.85568 17.9583C9.26318 17.0667 8.40195 16.2464 7.32677 15.6219C6.25159 14.9974 5.11296 14.6563 4.04537 14.5833Z" fill="inherit"></path>
                                                <path d="M8.77152 13.1353C6.70007 11.9318 4.45806 11.6251 2.85383 12.1669C3.0087 12.6788 3.21295 13.1743 3.46369 13.6467C4.85749 13.6144 6.37928 13.993 7.79532 14.8154C9.21136 15.6379 10.2944 16.773 10.9571 18C11.492 17.9836 12.0239 17.9155 12.5456 17.7966C12.2213 16.1349 10.8424 14.339 8.77152 13.1353Z" fill="inherit"></path>
                                                <path d="M18.6426 8.25045C18.3793 7.1792 17.9027 6.17201 17.2415 5.28902C16.5802 4.40603 15.7478 3.66534 14.794 3.11118C13.8401 2.55702 12.7844 2.20075 11.6898 2.06365C10.5952 1.92656 9.48419 2.01144 8.42313 2.31323C10.1958 2.53017 12.1633 3.19561 14.093 4.31662C16.0226 5.43763 17.5767 6.81706 18.6426 8.25045Z" fill="inherit"></path>
                                                <path d="M16.0635 12.1792C15.1562 10.6723 13.6019 9.22941 11.6872 8.11708C9.77246 7.00475 7.74955 6.3694 5.99266 6.32737C4.447 6.29076 3.28694 6.74009 2.81077 7.55983C2.80806 7.56471 2.80427 7.56932 2.80128 7.5742C2.75844 7.72795 2.72156 7.88197 2.68794 8.03654C3.35284 7.77405 4.12322 7.62789 4.97984 7.61162C6.8848 7.57583 9.01671 8.18514 10.984 9.32811C12.9514 10.4711 14.538 12.0219 15.4502 13.6939C15.8591 14.4472 16.1143 15.1889 16.2154 15.8974C16.3331 15.7922 16.4486 15.6835 16.5606 15.5704C16.5636 15.5652 16.5655 15.5598 16.5685 15.5544C17.0446 14.7338 16.8605 13.5038 16.0635 12.1792Z" fill="inherit"></path>
                                                <path d="M10.2304 10.6243C7.29831 8.92079 4.05813 8.65396 2.5 9.84276C2.50306 10.2149 2.53151 10.5863 2.58515 10.9545C3.04349 10.8156 3.51588 10.7281 3.99359 10.6937C5.73476 10.5627 7.65435 11.0478 9.39633 12.0604C11.1383 13.0729 12.5115 14.5009 13.2605 16.0772C13.4675 16.509 13.6254 16.9627 13.7312 17.4298C14.0778 17.2939 14.4147 17.1347 14.7397 16.9533C15.0006 15.0107 13.1634 12.328 10.2304 10.6243Z" fill="inherit"></path>
                                                <path d="M17.5717 9.65705C16.6541 8.15179 15.0862 6.70484 13.1579 5.58519C11.2296 4.46554 9.19887 3.82016 7.43629 3.76837C6.09265 3.72959 5.05191 4.05527 4.51228 4.67055C6.75294 4.29091 9.7084 4.92897 12.573 6.59312C15.4376 8.25728 17.4567 10.5091 18.2361 12.6434C18.5032 11.8703 18.2708 10.8049 17.5717 9.65705Z" fill="inherit"></path>
                                            </svg>
                                        </span>
                                        <span className="whitespace-nowrap ">Trade</span>
                                    </button>
                                </a>
                                <a className="block lg:hidden" href="/perps">
                                    <button type="button" className="flex items-center font-semibold justify-center fill-current h-[48px] lg:h-[60px] px-4 lg:px-6 text-xs lg:text-sm text-v2-lily/75">
                                        <span className="hidden lg:flex w-5 mr-2 fill-current">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.5491 6.66671L10.2596 8.95625C10.1276 9.08826 10.0616 9.15426 9.98545 9.17899C9.9185 9.20074 9.84639 9.20074 9.77944 9.17899C9.70333 9.15426 9.63733 9.08826 9.50532 8.95625L7.5929 7.04383C7.4609 6.91183 7.3949 6.84582 7.31879 6.82109C7.25184 6.79934 7.17972 6.79934 7.11277 6.82109C7.03666 6.84582 6.97066 6.91183 6.83866 7.04383L4.54911 9.33337M15.2158 8.00004C15.2158 11.6819 12.231 14.6667 8.54911 14.6667C4.86721 14.6667 1.88245 11.6819 1.88245 8.00004C1.88245 4.31814 4.86721 1.33337 8.54911 1.33337C12.231 1.33337 15.2158 4.31814 15.2158 8.00004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                        <span className="whitespace-nowrap ">Perpetual</span>
                                        <div className="ml-2.5 text-xs rounded-md leading-none py-1 px-1.5 bg-labs text-black">
                                            Beta</div>
                                    </button>
                                </a>
                            </div>
                            <div className="hidden lg:flex justify-center text-sm">
                                <a className="hover:bg-[#192531] hover:text-v2-primary" href="/">
                                    <button type="button" className="flex items-center font-semibold justify-center fill-current h-[48px] lg:h-[60px] px-4 lg:px-6 text-xs lg:text-sm text-v2-primary hover:!text-v2-primary bg-[#192531]">
                                        <span className="hidden lg:flex w-5 mr-2 fill-current">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.04537 14.5833C4.72134 15.5235 5.58842 16.3103 6.58975 16.8919C7.59108 17.4735 8.70405 17.8369 9.85568 17.9583C9.26318 17.0667 8.40195 16.2464 7.32677 15.6219C6.25159 14.9974 5.11296 14.6563 4.04537 14.5833Z" fill="inherit"></path>
                                                <path d="M8.77152 13.1353C6.70007 11.9318 4.45806 11.6251 2.85383 12.1669C3.0087 12.6788 3.21295 13.1743 3.46369 13.6467C4.85749 13.6144 6.37928 13.993 7.79532 14.8154C9.21136 15.6379 10.2944 16.773 10.9571 18C11.492 17.9836 12.0239 17.9155 12.5456 17.7966C12.2213 16.1349 10.8424 14.339 8.77152 13.1353Z" fill="inherit"></path>
                                                <path d="M18.6426 8.25045C18.3793 7.1792 17.9027 6.17201 17.2415 5.28902C16.5802 4.40603 15.7478 3.66534 14.794 3.11118C13.8401 2.55702 12.7844 2.20075 11.6898 2.06365C10.5952 1.92656 9.48419 2.01144 8.42313 2.31323C10.1958 2.53017 12.1633 3.19561 14.093 4.31662C16.0226 5.43763 17.5767 6.81706 18.6426 8.25045Z" fill="inherit"></path>
                                                <path d="M16.0635 12.1792C15.1562 10.6723 13.6019 9.22941 11.6872 8.11708C9.77246 7.00475 7.74955 6.3694 5.99266 6.32737C4.447 6.29076 3.28694 6.74009 2.81077 7.55983C2.80806 7.56471 2.80427 7.56932 2.80128 7.5742C2.75844 7.72795 2.72156 7.88197 2.68794 8.03654C3.35284 7.77405 4.12322 7.62789 4.97984 7.61162C6.8848 7.57583 9.01671 8.18514 10.984 9.32811C12.9514 10.4711 14.538 12.0219 15.4502 13.6939C15.8591 14.4472 16.1143 15.1889 16.2154 15.8974C16.3331 15.7922 16.4486 15.6835 16.5606 15.5704C16.5636 15.5652 16.5655 15.5598 16.5685 15.5544C17.0446 14.7338 16.8605 13.5038 16.0635 12.1792Z" fill="inherit"></path>
                                                <path d="M10.2304 10.6243C7.29831 8.92079 4.05813 8.65396 2.5 9.84276C2.50306 10.2149 2.53151 10.5863 2.58515 10.9545C3.04349 10.8156 3.51588 10.7281 3.99359 10.6937C5.73476 10.5627 7.65435 11.0478 9.39633 12.0604C11.1383 13.0729 12.5115 14.5009 13.2605 16.0772C13.4675 16.509 13.6254 16.9627 13.7312 17.4298C14.0778 17.2939 14.4147 17.1347 14.7397 16.9533C15.0006 15.0107 13.1634 12.328 10.2304 10.6243Z" fill="inherit"></path>
                                                <path d="M17.5717 9.65705C16.6541 8.15179 15.0862 6.70484 13.1579 5.58519C11.2296 4.46554 9.19887 3.82016 7.43629 3.76837C6.09265 3.72959 5.05191 4.05527 4.51228 4.67055C6.75294 4.29091 9.7084 4.92897 12.573 6.59312C15.4376 8.25728 17.4567 10.5091 18.2361 12.6434C18.5032 11.8703 18.2708 10.8049 17.5717 9.65705Z" fill="inherit"></path>
                                            </svg>
                                        </span>
                                        <span className="whitespace-nowrap ">Trade</span>
                                    </button>
                                </a>
                                <a target="_blank" className="hover:bg-[#192531] hover:text-v2-primary" href="https://station.jup.ag">
                                    <button type="button" className="flex items-center font-semibold justify-center fill-current h-[48px] lg:h-[60px] px-4 lg:px-6 text-xs lg:text-sm text-v2-lily/75">
                                        <span className="hidden lg:flex w-5 mr-2 fill-current">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.50002 10.667C7.23627 10.667 7.83314 10.0701 7.83314 9.33325V8.66699H9.16688V9.33325C9.16688 10.0701 9.76376 10.667 10.5 10.667V12.0001C9.70374 12.0001 8.98875 11.6507 8.5 11.0976C8.01125 11.6507 7.29626 12.0001 6.5 12.0001L6.50002 10.667Z" fill="inherit"></path>
                                                <path d="M5.5 8.66699C6.0525 8.66699 6.5 8.21886 6.5 7.66699C6.5 7.1145 6.0525 6.66699 5.5 6.66699C4.9475 6.66699 4.5 7.1145 4.5 7.66699C4.5 8.21886 4.9475 8.66699 5.5 8.66699Z" fill="inherit"></path>
                                                <path d="M12.5 7.66699C12.5 8.21886 12.0525 8.66699 11.5 8.66699C10.9475 8.66699 10.5 8.21886 10.5 7.66699C10.5 7.1145 10.9475 6.66699 11.5 6.66699C12.0525 6.66699 12.5 7.1145 12.5 7.66699Z" fill="inherit"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.16687 0.666992L4.72255 3.33323H12.2776L15.8333 0.666992V8.00011C15.8333 12.05 12.5501 15.3332 8.50015 15.3332C4.45023 15.3332 1.16703 12.05 1.16703 8.00011L1.16687 0.666992ZM2.49999 3.33323V8.00011C2.49999 11.3139 5.18623 14.0001 8.49999 14.0001C11.8138 14.0001 14.5 11.3139 14.5 8.00011V3.33323L12.7226 4.66698H4.27759L2.49999 3.33323Z" fill="inherit"></path>
                                            </svg>
                                        </span>
                                        <span className="whitespace-nowrap ">Station</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center flex-1">
                        <a className="flex-shrink-0" href="/">
                            <h1 className="flex items-center text-base font-semibold dark:text-white">
                                <img alt="Jupiter" style={{color:'transparent', width:'32px',height:"32px"}} src="https://d1c0tjyubqkol1.cloudfront.net/svg/jupuary-cat.svg"/>
                                <span className="flex ml-[10px]">Jupuary: Final Sprint</span>
                            </h1>
                        </a>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex lg:hidden justify-center text-sm">
                            <a className="hover:bg-[#192531] hover:text-v2-primary" href="/">
                                <button type="button" className="flex items-center font-semibold justify-center fill-current h-[48px] lg:h-[60px] px-4 lg:px-6 text-xs lg:text-sm text-v2-primary hover:!text-v2-primary bg-[#192531]">
                                    <span className="hidden lg:flex w-5 mr-2 fill-current">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.04537 14.5833C4.72134 15.5235 5.58842 16.3103 6.58975 16.8919C7.59108 17.4735 8.70405 17.8369 9.85568 17.9583C9.26318 17.0667 8.40195 16.2464 7.32677 15.6219C6.25159 14.9974 5.11296 14.6563 4.04537 14.5833Z" fill="inherit"></path>
                                            <path d="M8.77152 13.1353C6.70007 11.9318 4.45806 11.6251 2.85383 12.1669C3.0087 12.6788 3.21295 13.1743 3.46369 13.6467C4.85749 13.6144 6.37928 13.993 7.79532 14.8154C9.21136 15.6379 10.2944 16.773 10.9571 18C11.492 17.9836 12.0239 17.9155 12.5456 17.7966C12.2213 16.1349 10.8424 14.339 8.77152 13.1353Z" fill="inherit"></path>
                                            <path d="M18.6426 8.25045C18.3793 7.1792 17.9027 6.17201 17.2415 5.28902C16.5802 4.40603 15.7478 3.66534 14.794 3.11118C13.8401 2.55702 12.7844 2.20075 11.6898 2.06365C10.5952 1.92656 9.48419 2.01144 8.42313 2.31323C10.1958 2.53017 12.1633 3.19561 14.093 4.31662C16.0226 5.43763 17.5767 6.81706 18.6426 8.25045Z" fill="inherit"></path>
                                            <path d="M16.0635 12.1792C15.1562 10.6723 13.6019 9.22941 11.6872 8.11708C9.77246 7.00475 7.74955 6.3694 5.99266 6.32737C4.447 6.29076 3.28694 6.74009 2.81077 7.55983C2.80806 7.56471 2.80427 7.56932 2.80128 7.5742C2.75844 7.72795 2.72156 7.88197 2.68794 8.03654C3.35284 7.77405 4.12322 7.62789 4.97984 7.61162C6.8848 7.57583 9.01671 8.18514 10.984 9.32811C12.9514 10.4711 14.538 12.0219 15.4502 13.6939C15.8591 14.4472 16.1143 15.1889 16.2154 15.8974C16.3331 15.7922 16.4486 15.6835 16.5606 15.5704C16.5636 15.5652 16.5655 15.5598 16.5685 15.5544C17.0446 14.7338 16.8605 13.5038 16.0635 12.1792Z" fill="inherit"></path>
                                            <path d="M10.2304 10.6243C7.29831 8.92079 4.05813 8.65396 2.5 9.84276C2.50306 10.2149 2.53151 10.5863 2.58515 10.9545C3.04349 10.8156 3.51588 10.7281 3.99359 10.6937C5.73476 10.5627 7.65435 11.0478 9.39633 12.0604C11.1383 13.0729 12.5115 14.5009 13.2605 16.0772C13.4675 16.509 13.6254 16.9627 13.7312 17.4298C14.0778 17.2939 14.4147 17.1347 14.7397 16.9533C15.0006 15.0107 13.1634 12.328 10.2304 10.6243Z" fill="inherit"></path>
                                            <path d="M17.5717 9.65705C16.6541 8.15179 15.0862 6.70484 13.1579 5.58519C11.2296 4.46554 9.19887 3.82016 7.43629 3.76837C6.09265 3.72959 5.05191 4.05527 4.51228 4.67055C6.75294 4.29091 9.7084 4.92897 12.573 6.59312C15.4376 8.25728 17.4567 10.5091 18.2361 12.6434C18.5032 11.8703 18.2708 10.8049 17.5717 9.65705Z" fill="inherit"></path>
                                        </svg>
                                    </span>
                                    <span className="whitespace-nowrap ">Trade</span>
                                </button>
                            </a>
                            <a className="block lg:hidden" href="/perps">
                                <button type="button" className="flex items-center font-semibold justify-center fill-current h-[48px] lg:h-[60px] px-4 lg:px-6 text-xs lg:text-sm text-v2-lily/75">
                                    <span className="hidden lg:flex w-5 mr-2 fill-current">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.5491 6.66671L10.2596 8.95625C10.1276 9.08826 10.0616 9.15426 9.98545 9.17899C9.9185 9.20074 9.84639 9.20074 9.77944 9.17899C9.70333 9.15426 9.63733 9.08826 9.50532 8.95625L7.5929 7.04383C7.4609 6.91183 7.3949 6.84582 7.31879 6.82109C7.25184 6.79934 7.17972 6.79934 7.11277 6.82109C7.03666 6.84582 6.97066 6.91183 6.83866 7.04383L4.54911 9.33337M15.2158 8.00004C15.2158 11.6819 12.231 14.6667 8.54911 14.6667C4.86721 14.6667 1.88245 11.6819 1.88245 8.00004C1.88245 4.31814 4.86721 1.33337 8.54911 1.33337C12.231 1.33337 15.2158 4.31814 15.2158 8.00004Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                    <span className="whitespace-nowrap ">Perpetual</span>
                                    <div className="ml-2.5 text-xs rounded-md leading-none py-1 px-1.5 bg-labs text-black">
                                        Beta</div>
                                </button>
                            </a>
                        </div>
                        <div className="hidden lg:flex justify-center text-sm">
                            <a className="hover:bg-[#192531] hover:text-v2-primary" href="/">
                                <button type="button" className="flex items-center font-semibold justify-center fill-current h-[48px] lg:h-[60px] px-4 lg:px-6 text-xs lg:text-sm text-v2-primary hover:!text-v2-primary bg-[#192531]">
                                    <span className="hidden lg:flex w-5 mr-2 fill-current">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.04537 14.5833C4.72134 15.5235 5.58842 16.3103 6.58975 16.8919C7.59108 17.4735 8.70405 17.8369 9.85568 17.9583C9.26318 17.0667 8.40195 16.2464 7.32677 15.6219C6.25159 14.9974 5.11296 14.6563 4.04537 14.5833Z" fill="inherit"></path>
                                            <path d="M8.77152 13.1353C6.70007 11.9318 4.45806 11.6251 2.85383 12.1669C3.0087 12.6788 3.21295 13.1743 3.46369 13.6467C4.85749 13.6144 6.37928 13.993 7.79532 14.8154C9.21136 15.6379 10.2944 16.773 10.9571 18C11.492 17.9836 12.0239 17.9155 12.5456 17.7966C12.2213 16.1349 10.8424 14.339 8.77152 13.1353Z" fill="inherit"></path>
                                            <path d="M18.6426 8.25045C18.3793 7.1792 17.9027 6.17201 17.2415 5.28902C16.5802 4.40603 15.7478 3.66534 14.794 3.11118C13.8401 2.55702 12.7844 2.20075 11.6898 2.06365C10.5952 1.92656 9.48419 2.01144 8.42313 2.31323C10.1958 2.53017 12.1633 3.19561 14.093 4.31662C16.0226 5.43763 17.5767 6.81706 18.6426 8.25045Z" fill="inherit"></path>
                                            <path d="M16.0635 12.1792C15.1562 10.6723 13.6019 9.22941 11.6872 8.11708C9.77246 7.00475 7.74955 6.3694 5.99266 6.32737C4.447 6.29076 3.28694 6.74009 2.81077 7.55983C2.80806 7.56471 2.80427 7.56932 2.80128 7.5742C2.75844 7.72795 2.72156 7.88197 2.68794 8.03654C3.35284 7.77405 4.12322 7.62789 4.97984 7.61162C6.8848 7.57583 9.01671 8.18514 10.984 9.32811C12.9514 10.4711 14.538 12.0219 15.4502 13.6939C15.8591 14.4472 16.1143 15.1889 16.2154 15.8974C16.3331 15.7922 16.4486 15.6835 16.5606 15.5704C16.5636 15.5652 16.5655 15.5598 16.5685 15.5544C17.0446 14.7338 16.8605 13.5038 16.0635 12.1792Z" fill="inherit"></path>
                                            <path d="M10.2304 10.6243C7.29831 8.92079 4.05813 8.65396 2.5 9.84276C2.50306 10.2149 2.53151 10.5863 2.58515 10.9545C3.04349 10.8156 3.51588 10.7281 3.99359 10.6937C5.73476 10.5627 7.65435 11.0478 9.39633 12.0604C11.1383 13.0729 12.5115 14.5009 13.2605 16.0772C13.4675 16.509 13.6254 16.9627 13.7312 17.4298C14.0778 17.2939 14.4147 17.1347 14.7397 16.9533C15.0006 15.0107 13.1634 12.328 10.2304 10.6243Z" fill="inherit"></path>
                                            <path d="M17.5717 9.65705C16.6541 8.15179 15.0862 6.70484 13.1579 5.58519C11.2296 4.46554 9.19887 3.82016 7.43629 3.76837C6.09265 3.72959 5.05191 4.05527 4.51228 4.67055C6.75294 4.29091 9.7084 4.92897 12.573 6.59312C15.4376 8.25728 17.4567 10.5091 18.2361 12.6434C18.5032 11.8703 18.2708 10.8049 17.5717 9.65705Z" fill="inherit"></path>
                                        </svg>
                                    </span>
                                    <span className="whitespace-nowrap ">Trade</span>
                                </button>
                            </a>
                            <a target="_blank" className="hover:bg-[#192531] hover:text-v2-primary" href="https://station.jup.ag">
                                <button type="button" className="flex items-center font-semibold justify-center fill-current h-[48px] lg:h-[60px] px-4 lg:px-6 text-xs lg:text-sm text-v2-lily/75">
                                    <span className="hidden lg:flex w-5 mr-2 fill-current">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.50002 10.667C7.23627 10.667 7.83314 10.0701 7.83314 9.33325V8.66699H9.16688V9.33325C9.16688 10.0701 9.76376 10.667 10.5 10.667V12.0001C9.70374 12.0001 8.98875 11.6507 8.5 11.0976C8.01125 11.6507 7.29626 12.0001 6.5 12.0001L6.50002 10.667Z" fill="inherit"></path>
                                            <path d="M5.5 8.66699C6.0525 8.66699 6.5 8.21886 6.5 7.66699C6.5 7.1145 6.0525 6.66699 5.5 6.66699C4.9475 6.66699 4.5 7.1145 4.5 7.66699C4.5 8.21886 4.9475 8.66699 5.5 8.66699Z" fill="inherit"></path>
                                            <path d="M12.5 7.66699C12.5 8.21886 12.0525 8.66699 11.5 8.66699C10.9475 8.66699 10.5 8.21886 10.5 7.66699C10.5 7.1145 10.9475 6.66699 11.5 6.66699C12.0525 6.66699 12.5 7.1145 12.5 7.66699Z" fill="inherit"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.16687 0.666992L4.72255 3.33323H12.2776L15.8333 0.666992V8.00011C15.8333 12.05 12.5501 15.3332 8.50015 15.3332C4.45023 15.3332 1.16703 12.05 1.16703 8.00011L1.16687 0.666992ZM2.49999 3.33323V8.00011C2.49999 11.3139 5.18623 14.0001 8.49999 14.0001C11.8138 14.0001 14.5 11.3139 14.5 8.00011V3.33323L12.7226 4.66698H4.27759L2.49999 3.33323Z" fill="inherit"></path>
                                        </svg>
                                    </span>
                                    <span className="whitespace-nowrap ">Station</span>
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-end flex-1 space-x-2">
                        <div className="flex items-center space-x-2">
                            <div className="z-10">
                                <div>
                                    <button className="z-10 border border-transparent text-black-50 dark:text-white h-8 w-8 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-v2-lily/5 dark:hover:border-v2-primary/50 dark:hover:text-v2-primary dark:hover:bg-[#455d65]">
                                        <div className="block md:hidden">
                                            <svg width="12" height="12" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.71971 1.2926L6.41471 2.9726C6.11846 3.06573 5.83097 3.18635 5.55971 3.32761L4.14971 2.35761L2.33979 4.16753L3.31479 5.57252C3.17292 5.84439 3.05355 6.13003 2.95979 6.42753L1.27979 6.73252V9.29252L2.95979 9.59751C3.05354 9.89564 3.17729 10.18 3.31979 10.4525L2.33979 11.8575L4.14971 13.6674L5.5547 12.6974C5.82719 12.8399 6.11657 12.9587 6.4147 13.0524L6.71969 14.7324H9.27969L9.58468 13.0524C9.88218 12.9587 10.1678 12.8393 10.4397 12.6974L11.8447 13.6674L13.6546 11.8575L12.6796 10.4525C12.8208 10.1813 12.9415 9.89878 13.0346 9.60252L14.7196 9.29252V6.73252L13.0346 6.42753C12.9415 6.1319 12.8252 5.84815 12.6846 5.57753L13.6546 4.16753L11.8447 2.35761L10.4397 3.32761C10.1678 3.18574 9.88218 3.06636 9.58468 2.9726L9.27969 1.2926H6.71971ZM7.9997 4.9726C9.67842 4.9726 11.0397 6.33385 11.0397 8.0126C11.0397 9.69135 9.67846 11.0526 7.9997 11.0526C6.32095 11.0526 4.95971 9.69135 4.95971 8.0126C4.95971 6.33385 6.32095 4.9726 7.9997 4.9726Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                        <div className="hidden md:block">
                                            <svg width="16" height="16" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.71971 1.2926L6.41471 2.9726C6.11846 3.06573 5.83097 3.18635 5.55971 3.32761L4.14971 2.35761L2.33979 4.16753L3.31479 5.57252C3.17292 5.84439 3.05355 6.13003 2.95979 6.42753L1.27979 6.73252V9.29252L2.95979 9.59751C3.05354 9.89564 3.17729 10.18 3.31979 10.4525L2.33979 11.8575L4.14971 13.6674L5.5547 12.6974C5.82719 12.8399 6.11657 12.9587 6.4147 13.0524L6.71969 14.7324H9.27969L9.58468 13.0524C9.88218 12.9587 10.1678 12.8393 10.4397 12.6974L11.8447 13.6674L13.6546 11.8575L12.6796 10.4525C12.8208 10.1813 12.9415 9.89878 13.0346 9.60252L14.7196 9.29252V6.73252L13.0346 6.42753C12.9415 6.1319 12.8252 5.84815 12.6846 5.57753L13.6546 4.16753L11.8447 2.35761L10.4397 3.32761C10.1678 3.18574 9.88218 3.06636 9.58468 2.9726L9.27969 1.2926H6.71971ZM7.9997 4.9726C9.67842 4.9726 11.0397 6.33385 11.0397 8.0126C11.0397 9.69135 9.67846 11.0526 7.9997 11.0526C6.32095 11.0526 4.95971 9.69135 4.95971 8.0126C4.95971 6.33385 6.32095 4.9726 7.9997 4.9726Z" fill="currentColor"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="!bg-transparent css-1lpgtt2">
                                <button className="text-white group bg-none dark:bg-[#121D28] hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(0,190,240,1)] border border-transparent dark:hover:border dark:hover:border-v2-primary disabled:cursor-not-allowed block md:hidden !rounded-full w-auto bg-v2-lily/5 hover:border-v2-primary/50 hover:text-v2-primary hover:bg-[#455d65] h-8 rounded-full">
                                    <div className="rounded-xl bg-v2-text-gradient dark:bg-[rgba(18,29,40,1)] bg-clip-text text-transparent group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] p-[calc(0.75rem-1px)] py-2 text-xs font-semibold leading-none">
                                        <span className="block md:hidden" >Connect</span>
                                        <span className="hidden md:block" >Connect Wallet</span>
                                    </div>
                                </button>
                                <button className="text-white group bg-none dark:bg-[#121D28] hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(0,190,240,1)] border border-transparent dark:hover:border dark:hover:border-v2-primary disabled:cursor-not-allowed hidden md:block !h-full w-auto bg-v2-lily/5 hover:border-v2-primary/50 hover:text-v2-primary hover:bg-[#455d65] h-8 rounded-full">
                                    <div className="rounded-xl bg-v2-text-gradient dark:bg-[rgba(18,29,40,1)] bg-clip-text text-transparent group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] p-[calc(1rem-1px)] py-3 text-sm font-semibold leading-none">
                                        <span className="block md:hidden" >Connect</span>
                                        <span className="hidden md:block" >Connect Wallet</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-b-[1px] border-white/5 w-full hidden lg:flex justify-center space-x-10 bg-[#192531]">
                    <a href="/swap/-">
                        <div className="h-[88px] px-3 py-5 justify-center items-center gap-4 inline-flex relative group group-hover:text-v2-primary text-v2-primary fill-current">
                            <div className="p-3 bg-cyan-50 bg-opacity-5 rounded-lg justify-center items-center gap-2.5 flex">
                                <div className="w-4 h-4 relative">
                                    <div className="group-hover:text-v2-primary fill-current">
                                        <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.17246 11.0054L7.49986 13.3336H1.66626V7.50005L3.99446 9.82744L11.6663 2.15485L12.8452 3.33375L5.17246 11.0054ZM18.3335 6.66645V12.5L16.0053 10.1726L8.33346 17.8452L7.15456 16.6663L14.8272 8.99455L12.4998 6.66635L18.3335 6.66645Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-1 inline-flex">
                                <div className="flex text-base font-semibold leading-none items-center group-hover:text-v2-primary !text-v2-primary text-cyan-50">
                                    Swap</div>
                                <div className="text-[11px] font-normal leading-none tracking-[0.1px] text-opacity-50 group-hover:!text-v2-primary !text-v2-primary text-cyan-50 group-hover:text-labs">
                                    The Best Price</div>
                            </div>
                            <div className="absolute bottom-[1px] w-full border-b-2 border-[#C7F284]"></div>
                        </div>
                    </a>
                    <a href="/limit/-">
                        <div className="h-[88px] px-3 py-5 justify-center items-center gap-4 inline-flex relative group group-hover:text-v2-primary">
                            <div className="p-3 bg-cyan-50 bg-opacity-5 rounded-lg justify-center items-center gap-2.5 flex">
                                <div className="w-4 h-4 relative">
                                    <div className="group-hover:text-v2-primary fill-current text-v2-lily/[.75]">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.33333 3.04167H3.03V1.58333C3.03 1.42862 2.96854 1.28025 2.85915 1.17085C2.74975 1.06146 2.60138 1 2.44667 1C2.29196 1 2.14358 1.06146 2.03419 1.17085C1.92479 1.28025 1.86333 1.42862 1.86333 1.58333V3.04167H1.58333C1.42862 3.04167 1.28025 3.10312 1.17085 3.21252C1.06146 3.32192 1 3.47029 1 3.625L1 11.2083C1 11.363 1.06146 11.5114 1.17085 11.6208C1.28025 11.7302 1.42862 11.7917 1.58333 11.7917H1.86333V13.1217C1.86333 13.2764 1.92479 13.4247 2.03419 13.5341C2.14358 13.6435 2.29196 13.705 2.44667 13.705C2.60138 13.705 2.74975 13.6435 2.85915 13.5341C2.96854 13.4247 3.03 13.2764 3.03 13.1217V11.7917H3.33333C3.48804 11.7917 3.63642 11.7302 3.74581 11.6208C3.85521 11.5114 3.91667 11.363 3.91667 11.2083V3.625C3.91667 3.47029 3.85521 3.32192 3.74581 3.21252C3.63642 3.10312 3.48804 3.04167 3.33333 3.04167Z" fill="currentColor"></path>
                                            <path d="M12.375 2.16667H12.0834V1.58333C12.0834 1.42862 12.0219 1.28025 11.9125 1.17085C11.8031 1.06146 11.6547 1 11.5 1C11.3453 1 11.1969 1.06146 11.0875 1.17085C10.9781 1.28025 10.9167 1.42862 10.9167 1.58333V2.16667H10.625C10.4703 2.16667 10.3219 2.22812 10.2125 2.33752C10.1031 2.44692 10.0417 2.59529 10.0417 2.75V6.25C10.0417 6.40471 10.1031 6.55308 10.2125 6.66248C10.3219 6.77187 10.4703 6.83333 10.625 6.83333H10.9167V7.41667C10.9167 7.57138 10.9781 7.71975 11.0875 7.82915C11.1969 7.93854 11.3453 8 11.5 8C11.6547 8 11.8031 7.93854 11.9125 7.82915C12.0219 7.71975 12.0834 7.57138 12.0834 7.41667V6.83333H12.375C12.5297 6.83333 12.6781 6.77187 12.7875 6.66248C12.8969 6.55308 12.9584 6.40471 12.9584 6.25V2.75C12.9584 2.59529 12.8969 2.44692 12.7875 2.33752C12.6781 2.22812 12.5297 2.16667 12.375 2.16667Z" fill="currentColor"></path>
                                            <path d="M8.00002 5.95825H7.70835V4.79159C7.70835 4.63688 7.6469 4.4885 7.5375 4.37911C7.4281 4.26971 7.27973 4.20825 7.12502 4.20825C6.97031 4.20825 6.82194 4.26971 6.71254 4.37911C6.60315 4.4885 6.54169 4.63688 6.54169 4.79159V5.95825H6.25002C6.09531 5.95825 5.94694 6.01971 5.83754 6.12911C5.72815 6.2385 5.66669 6.38688 5.66669 6.54159V10.0416C5.66669 10.1963 5.72815 10.3447 5.83754 10.4541C5.94694 10.5635 6.09531 10.6249 6.25002 10.6249H6.54169V11.7916C6.54169 11.9463 6.60315 12.0947 6.71254 12.2041C6.82194 12.3135 6.97031 12.3749 7.12502 12.3749C7.27973 12.3749 7.4281 12.3135 7.5375 12.2041C7.6469 12.0947 7.70835 11.9463 7.70835 11.7916V10.6249H8.00002C8.15473 10.6249 8.3031 10.5635 8.4125 10.4541C8.5219 10.3447 8.58335 10.1963 8.58335 10.0416V6.54159C8.58335 6.38688 8.5219 6.2385 8.4125 6.12911C8.3031 6.01971 8.15473 5.95825 8.00002 5.95825Z" fill="currentColor"></path>
                                            <path d="M15 12.5793C15 11.6518 14.0784 10.9168 12.9467 10.9168C12.4392 10.9168 12.06 10.6426 12.06 10.3918C12.06 10.1409 12.4392 9.87261 12.97 9.87261C13.1307 9.86659 13.2905 9.89951 13.4358 9.96858C13.581 10.0376 13.7074 10.1408 13.8042 10.2693C13.8505 10.3306 13.9085 10.3821 13.9748 10.421C14.041 10.4599 14.1143 10.4853 14.1904 10.4959C14.2665 10.5065 14.344 10.5019 14.4183 10.4826C14.4927 10.4632 14.5625 10.4294 14.6238 10.383C14.6851 10.3367 14.7366 10.2787 14.7755 10.2125C14.8144 10.1462 14.8398 10.0729 14.8504 9.9968C14.8609 9.92069 14.8564 9.84325 14.8371 9.7689C14.8177 9.69454 14.7839 9.62473 14.7375 9.56345C14.4361 9.16906 14.0108 8.88757 13.53 8.76428V8.55428C13.53 8.39957 13.4686 8.2512 13.3592 8.1418C13.2498 8.03241 13.1014 7.97095 12.9467 7.97095C12.792 7.97095 12.6436 8.03241 12.5342 8.1418C12.4248 8.2512 12.3634 8.39957 12.3634 8.55428V8.77595C11.9793 8.84239 11.6285 9.03514 11.3664 9.32362C11.1043 9.6121 10.9461 9.97981 10.9167 10.3684C10.9167 11.3193 11.815 12.0601 12.97 12.0601C13.4775 12.0601 13.8567 12.3343 13.8567 12.5793C13.8567 12.8243 13.4775 13.1043 12.9467 13.1043C12.7814 13.1131 12.6165 13.0816 12.4661 13.0125C12.3157 12.9434 12.1843 12.8388 12.0834 12.7076C12.0385 12.6429 11.9809 12.5879 11.9142 12.546C11.8475 12.5041 11.773 12.4762 11.6952 12.4639C11.6174 12.4516 11.5379 12.4551 11.4615 12.4744C11.3851 12.4936 11.3134 12.5281 11.2507 12.5758C11.1881 12.6235 11.1357 12.6834 11.0968 12.7519C11.0579 12.8204 11.0332 12.8961 11.0244 12.9744C11.0155 13.0526 11.0226 13.1319 11.0452 13.2074C11.0678 13.2828 11.1054 13.3529 11.1559 13.4134C11.4553 13.8088 11.8817 14.0889 12.3634 14.2068V14.4168C12.3634 14.5715 12.4248 14.7199 12.5342 14.8293C12.6436 14.9387 12.792 15.0001 12.9467 15.0001C13.1014 15.0001 13.2498 14.9387 13.3592 14.8293C13.4686 14.7199 13.53 14.5715 13.53 14.4168V14.2009C13.9229 14.138 14.2826 13.9431 14.5498 13.6483C14.8171 13.3535 14.9758 12.9764 15 12.5793Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-1 inline-flex">
                                <div className="flex text-base font-semibold leading-none items-center group-hover:text-v2-primary text-cyan-50">
                                    Limit Order</div>
                                <div className="text-[11px] font-normal leading-none tracking-[0.1px] text-opacity-50 group-hover:!text-v2-primary text-cyan-50 group-hover:text-labs">
                                    Set Your Price</div>
                            </div>
                        </div>
                    </a>
                    <a href="/dca/-">
                        <div className="h-[88px] px-3 py-5 justify-center items-center gap-4 inline-flex relative group group-hover:text-v2-primary">
                            <div className="p-3 bg-cyan-50 bg-opacity-5 rounded-lg justify-center items-center gap-2.5 flex">
                                <div className="w-4 h-4 relative">
                                    <div className="group-hover:text-v2-primary fill-current text-v2-lily/[.75]">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.99998 12.3333H9.99998M4.39998 1.33325H11.6C11.9733 1.33325 12.16 1.33325 12.3026 1.40591C12.4281 1.46983 12.5301 1.57182 12.594 1.69726C12.6666 1.83987 12.6666 2.02655 12.6666 2.39992V3.78293C12.6666 4.10905 12.6666 4.27211 12.6298 4.42556C12.5971 4.56161 12.5433 4.69167 12.4702 4.81097C12.3877 4.94552 12.2724 5.06082 12.0418 5.29142L10.0876 7.24567C9.82355 7.50968 9.69154 7.64169 9.64208 7.79391C9.59858 7.9278 9.59858 8.07203 9.64208 8.20593C9.69154 8.35815 9.82355 8.49015 10.0876 8.75417L12.0418 10.7084C12.2724 10.939 12.3877 11.0543 12.4702 11.1889C12.5433 11.3082 12.5971 11.4382 12.6298 11.5743C12.6666 11.7277 12.6666 11.8908 12.6666 12.2169V13.5999C12.6666 13.9733 12.6666 14.16 12.594 14.3026C12.5301 14.428 12.4281 14.53 12.3026 14.5939C12.16 14.6666 11.9733 14.6666 11.6 14.6666H4.39998C4.02661 14.6666 3.83993 14.6666 3.69732 14.5939C3.57188 14.53 3.46989 14.428 3.40598 14.3026C3.33331 14.16 3.33331 13.9733 3.33331 13.5999V12.2169C3.33331 11.8908 3.33331 11.7277 3.37015 11.5743C3.40282 11.4382 3.45669 11.3082 3.52979 11.1889C3.61225 11.0543 3.72755 10.939 3.95815 10.7084L5.9124 8.75417C6.17641 8.49015 6.30842 8.35815 6.35787 8.20593C6.40138 8.07203 6.40138 7.9278 6.35787 7.79391C6.30842 7.64169 6.17641 7.50968 5.9124 7.24567L3.95815 5.29142C3.72755 5.06082 3.61225 4.94552 3.52979 4.81097C3.45669 4.69167 3.40282 4.56161 3.37015 4.42556C3.33331 4.27211 3.33331 4.10905 3.33331 3.78293V2.39992C3.33331 2.02655 3.33331 1.83987 3.40598 1.69726C3.46989 1.57182 3.57188 1.46983 3.69732 1.40591C3.83993 1.33325 4.02661 1.33325 4.39998 1.33325Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-1 inline-flex">
                                <div className="flex text-base font-semibold leading-none items-center group-hover:text-v2-primary text-cyan-50">
                                    DCA</div>
                                <div className="text-[11px] font-normal leading-none tracking-[0.1px] text-opacity-50 group-hover:!text-v2-primary text-cyan-50 group-hover:text-labs">
                                    Set and Forget</div>
                            </div>
                        </div>
                    </a>
                    <a href="/bridge-compare">
                        <div className="h-[88px] px-3 py-5 justify-center items-center gap-4 inline-flex relative group group-hover:text-v2-primary">
                            <div className="p-3 bg-cyan-50 bg-opacity-5 rounded-lg justify-center items-center gap-2.5 flex">
                                <div className="w-4 h-4 relative">
                                    <div className="group-hover:text-v2-primary fill-current text-v2-lily/[.75]">
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_16765_48070)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.96514 2.57687C1.91375 2.59548 1.86937 2.62952 1.83807 2.67432C1.80677 2.71913 1.79008 2.77251 1.79029 2.82716V5.28087C1.79029 5.42716 1.90914 5.54602 2.05543 5.54602C3.08057 5.54602 3.91257 6.37802 3.91257 7.40316V9.17116C4.1652 8.99817 4.45227 8.88188 4.75408 8.83029C5.05588 8.77871 5.36528 8.79303 5.66103 8.87229C5.95677 8.95154 6.23187 9.09386 6.46743 9.28945C6.703 9.48505 6.89345 9.7293 7.02571 10.0054C7.07097 9.95625 7.09589 9.89172 7.09543 9.82487V7.4043C7.09543 6.91176 7.29109 6.43939 7.63937 6.0911C7.98765 5.74282 8.46003 5.54716 8.95257 5.54716C9.44512 5.54716 9.91749 5.74282 10.2658 6.0911C10.614 6.43939 10.8097 6.91176 10.8097 7.4043V9.82487C10.8094 9.8917 10.8343 9.95619 10.8794 10.0054C11.0116 9.72921 11.202 9.48485 11.4375 9.28913C11.673 9.09341 11.9481 8.95098 12.2438 8.87162C12.5396 8.79225 12.849 8.77782 13.1509 8.82933C13.4527 8.88084 13.7399 8.99706 13.9926 9.17002V7.4043C13.9926 6.37916 14.8246 5.54716 15.8497 5.54716C15.92 5.54716 15.9875 5.51923 16.0372 5.4695C16.0869 5.41978 16.1149 5.35234 16.1149 5.28202V2.82716C16.1148 2.7727 16.098 2.71957 16.0667 2.675C16.0355 2.63042 15.9912 2.59656 15.94 2.57802H15.9366L15.9297 2.57459L15.9046 2.56659C15.751 2.51551 15.5963 2.46787 15.4406 2.42373C14.9797 2.2933 14.5138 2.18121 14.044 2.08773C12.3674 1.75794 10.6624 1.59448 8.95371 1.59973C6.81086 1.59973 5.06914 1.84316 3.86 2.08545C3.25657 2.20773 2.78457 2.33002 2.46343 2.42145C2.3081 2.46561 2.15377 2.51324 2.00057 2.5643L1.97543 2.5723L1.96857 2.57459L1.96514 2.57573V2.57687ZM5.908 10.922C5.908 10.7109 5.82413 10.5084 5.67486 10.3592C5.52558 10.2099 5.32311 10.126 5.112 10.126C4.90089 10.126 4.69842 10.2099 4.54914 10.3592C4.39986 10.5084 4.316 10.7109 4.316 10.922C4.316 11.2203 4.19752 11.5063 3.98662 11.7172C3.77572 11.9281 3.48968 12.0466 3.19143 12.0466H2.71143C2.50032 12.0466 2.29785 12.1305 2.14857 12.2797C1.99929 12.429 1.91543 12.6315 1.91543 12.8426C1.91543 13.0537 1.99929 13.2562 2.14857 13.4054C2.29785 13.5547 2.50032 13.6386 2.71143 13.6386H3.19143C3.91257 13.6386 4.60286 13.3517 5.11257 12.8432C5.622 13.3524 6.31283 13.6385 7.03314 13.6385C7.75346 13.6385 8.44428 13.3524 8.95371 12.8432C9.46314 13.3524 10.154 13.6385 10.8743 13.6385C11.5946 13.6385 12.2854 13.3524 12.7949 12.8432C13.3046 13.3529 13.9949 13.6386 14.716 13.6386H15.1971C15.4083 13.6386 15.6107 13.5547 15.76 13.4054C15.9093 13.2562 15.9931 13.0537 15.9931 12.8426C15.9931 12.6315 15.9093 12.429 15.76 12.2797C15.6107 12.1305 15.4083 12.0466 15.1971 12.0466H14.716C14.4177 12.0466 14.1317 11.9281 13.9208 11.7172C13.7099 11.5063 13.5914 11.2203 13.5914 10.922C13.5914 10.7109 13.5076 10.5084 13.3583 10.3592C13.209 10.2099 13.0065 10.126 12.7954 10.126C12.5843 10.126 12.3818 10.2099 12.2326 10.3592C12.0833 10.5084 11.9994 10.7109 11.9994 10.922C11.9994 11.2204 11.8809 11.5066 11.6699 11.7176C11.4589 11.9286 11.1727 12.0472 10.8743 12.0472C10.5759 12.0472 10.2897 11.9286 10.0787 11.7176C9.86768 11.5066 9.74914 11.2204 9.74914 10.922C9.74914 10.7109 9.66528 10.5084 9.516 10.3592C9.36672 10.2099 9.16425 10.126 8.95314 10.126C8.74203 10.126 8.53956 10.2099 8.39028 10.3592C8.24101 10.5084 8.15714 10.7109 8.15714 10.922C8.15714 11.0698 8.12804 11.2161 8.0715 11.3526C8.01495 11.4891 7.93207 11.6131 7.82759 11.7176C7.72312 11.8221 7.59908 11.905 7.46257 11.9615C7.32606 12.0181 7.17975 12.0472 7.032 12.0472C6.88424 12.0472 6.73793 12.0181 6.60143 11.9615C6.46492 11.905 6.34088 11.8221 6.2364 11.7176C6.13192 11.6131 6.04905 11.4891 5.9925 11.3526C5.93596 11.2161 5.908 11.0698 5.908 10.922Z" fill="currentColor"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_16765_48070">
                                                    <rect width="16" height="16" fill="white" transform="translate(0.951172)"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-1 inline-flex">
                                <div className="flex text-base font-semibold leading-none items-center group-hover:text-v2-primary text-cyan-50">
                                    Bridge</div>
                                <div className="text-[11px] font-normal leading-none tracking-[0.1px] text-opacity-50 group-hover:!text-v2-primary text-cyan-50 group-hover:text-labs">
                                    Transfer assets to Solana</div>
                            </div>
                        </div>
                    </a>
                    <a href="/perps">
                        <div className="h-[88px] px-3 py-5 justify-center items-center gap-4 inline-flex relative group group-hover:text-v2-primary">
                            <div className="p-3 bg-cyan-50 bg-opacity-5 rounded-lg justify-center items-center gap-2.5 flex">
                                <div className="w-4 h-4 relative">
                                    <div className="group-hover:text-labs fill-current text-v2-lily/[.75]">
                                        <svg width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.0791 1.58545H6.21922H5.0791Z" fill="url(#paint0_linear_17721_7028)"></path>
                                            <path d="M5.0791 1.58545H6.21922" stroke="#00BCF0" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M7.92969 1.58545H9.07039H7.92969Z" fill="url(#paint1_linear_17721_7028)"></path>
                                            <path d="M7.92969 1.58545H9.07039" stroke="#00BCF0" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M10.7812 1.58545H11.9214H10.7812Z" fill="url(#paint2_linear_17721_7028)"></path>
                                            <path d="M10.7812 1.58545H11.9214" stroke="#00BCF0" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M3.22628 2.17116C3.07929 2.17193 2.93854 2.23066 2.8346 2.3346C2.73066 2.43854 2.67193 2.57929 2.67116 2.72628C2.67116 2.88159 2.60946 3.03053 2.49964 3.14035C2.38983 3.25017 2.24088 3.31186 2.08558 3.31186C1.93027 3.31186 1.78133 3.25017 1.67151 3.14035C1.56169 3.03053 1.5 2.88159 1.5 2.72628C1.50077 2.26868 1.6829 1.83005 2.00647 1.50647C2.33005 1.1829 2.76868 1.00077 3.22628 1C3.38159 1 3.53053 1.06169 3.64035 1.17151C3.75017 1.28133 3.81186 1.43027 3.81186 1.58558C3.81186 1.74088 3.75017 1.88983 3.64035 1.99964C3.53053 2.10946 3.38159 2.17116 3.22628 2.17116ZM2.08558 3.99347C2.16248 3.99347 2.23862 4.00862 2.30967 4.03805C2.38071 4.06748 2.44527 4.11061 2.49964 4.16499C2.55402 4.21936 2.59715 4.28392 2.62658 4.35496C2.65601 4.42601 2.67116 4.50215 2.67116 4.57905V5.71917C2.67116 5.87448 2.60946 6.02342 2.49964 6.13324C2.38983 6.24306 2.24088 6.30475 2.08558 6.30475C1.93027 6.30475 1.78133 6.24306 1.67151 6.13324C1.56169 6.02342 1.5 5.87448 1.5 5.71917V4.57905C1.5 4.42375 1.56169 4.2748 1.67151 4.16499C1.78133 4.05517 1.93027 3.99347 2.08558 3.99347ZM2.67116 7.42965C2.67116 7.27434 2.60946 7.1254 2.49964 7.01558C2.38983 6.90576 2.24088 6.84407 2.08558 6.84407C1.93027 6.84407 1.78133 6.90576 1.67151 7.01558C1.56169 7.1254 1.5 7.27434 1.5 7.42965V8.57035C1.5 8.72566 1.56169 8.8746 1.67151 8.98442C1.78133 9.09424 1.93027 9.15593 2.08558 9.15593C2.24088 9.15593 2.38983 9.09424 2.49964 8.98442C2.60946 8.8746 2.67116 8.72566 2.67116 8.57035V7.42965ZM1.82792 10.4512C2.05279 10.2264 2.35202 10.1227 2.65593 10.1227H5.22076C5.52526 10.1227 5.82391 10.2264 6.04818 10.4506C6.27305 10.6755 6.37669 10.9742 6.37669 11.2787V13.8441C6.37669 14.1486 6.27305 14.4472 6.04877 14.6715C5.82391 14.8958 5.52526 14.9994 5.22076 14.9994H2.65593C2.35143 14.9994 2.05279 14.8958 1.82851 14.6715C1.60423 14.4472 1.50059 14.148 1.50059 13.8441V11.2792C1.50059 10.9747 1.60423 10.6761 1.82851 10.4518L1.82792 10.4512ZM15.5 7.42965C15.5 7.27434 15.4383 7.1254 15.3285 7.01558C15.2187 6.90576 15.0697 6.84407 14.9144 6.84407C14.7591 6.84407 14.6102 6.90576 14.5004 7.01558C14.3905 7.1254 14.3288 7.27434 14.3288 7.42965V8.57035C14.3288 8.72566 14.3905 8.8746 14.5004 8.98442C14.6102 9.09424 14.7591 9.15593 14.9144 9.15593C15.0697 9.15593 15.2187 9.09424 15.3285 8.98442C15.4383 8.8746 15.5 8.72566 15.5 8.57035V7.42965ZM14.9144 9.69525C15.0697 9.69525 15.2187 9.75694 15.3285 9.86676C15.4383 9.97658 15.5 10.1255 15.5 10.2808V11.4209C15.5 11.5763 15.4383 11.7252 15.3285 11.835C15.2187 11.9448 15.0697 12.0065 14.9144 12.0065C14.7591 12.0065 14.6102 11.9448 14.5004 11.835C14.3905 11.7252 14.3288 11.5763 14.3288 11.4209V10.2808C14.3288 10.1255 14.3905 9.97658 14.5004 9.86676C14.6102 9.75694 14.7591 9.69525 14.9144 9.69525ZM15.5 4.57905C15.5 4.42375 15.4383 4.2748 15.3285 4.16499C15.2187 4.05517 15.0697 3.99347 14.9144 3.99347C14.7591 3.99347 14.6102 4.05517 14.5004 4.16499C14.3905 4.2748 14.3288 4.42375 14.3288 4.57905V5.71917C14.3288 5.87448 14.3905 6.02342 14.5004 6.13324C14.6102 6.24306 14.7591 6.30475 14.9144 6.30475C15.0697 6.30475 15.2187 6.24306 15.3285 6.13324C15.4383 6.02342 15.5 5.87448 15.5 5.71917V4.57905ZM7.92965 13.8288C7.77434 13.8288 7.6254 13.8905 7.51558 14.0004C7.40576 14.1102 7.34407 14.2591 7.34407 14.4144C7.34407 14.5697 7.40576 14.7187 7.51558 14.8285C7.6254 14.9383 7.77434 15 7.92965 15H9.07035C9.22566 15 9.3746 14.9383 9.48442 14.8285C9.59424 14.7187 9.65593 14.5697 9.65593 14.4144C9.65593 14.2591 9.59424 14.1102 9.48442 14.0004C9.3746 13.8905 9.22566 13.8288 9.07035 13.8288H7.92965ZM10.1952 14.4144C10.1952 14.2591 10.2569 14.1102 10.3668 14.0004C10.4766 13.8905 10.6255 13.8288 10.7808 13.8288H11.9209C12.0763 13.8288 12.2252 13.8905 12.335 14.0004C12.4448 14.1102 12.5065 14.2591 12.5065 14.4144C12.5065 14.5697 12.4448 14.7187 12.335 14.8285C12.2252 14.9383 12.0763 15 11.9209 15H10.7808C10.6255 15 10.4766 14.9383 10.3668 14.8285C10.2569 14.7187 10.1952 14.5697 10.1952 14.4144ZM13.7737 1C13.6968 1 13.6207 1.01515 13.5496 1.04457C13.4786 1.074 13.414 1.11714 13.3596 1.17151C13.3053 1.22589 13.2621 1.29044 13.2327 1.36149C13.2033 1.43253 13.1881 1.50868 13.1881 1.58558C13.1881 1.66248 13.2033 1.73862 13.2327 1.80967C13.2621 1.88071 13.3053 1.94527 13.3596 1.99964C13.414 2.05402 13.4786 2.09715 13.5496 2.12658C13.6207 2.15601 13.6968 2.17116 13.7737 2.17116C14.0782 2.17116 14.3288 2.42237 14.3288 2.72628C14.3288 2.88159 14.3905 3.03053 14.5004 3.14035C14.6102 3.25017 14.7591 3.31186 14.9144 3.31186C15.0697 3.31186 15.2187 3.25017 15.3285 3.14035C15.4383 3.03053 15.5 2.88159 15.5 2.72628C15.4992 2.26868 15.3171 1.83005 14.9935 1.50647C14.67 1.1829 14.2313 1.00077 13.7737 1ZM14.9144 12.6881C15.0697 12.6881 15.2187 12.7498 15.3285 12.8596C15.4383 12.9695 15.5 13.1184 15.5 13.2737C15.4992 13.7313 15.3171 14.17 14.9935 14.4935C14.67 14.8171 14.2313 14.9992 13.7737 15C13.6184 15 13.4695 14.9383 13.3596 14.8285C13.2498 14.7187 13.1881 14.5697 13.1881 14.4144C13.1881 14.2591 13.2498 14.1102 13.3596 14.0004C13.4695 13.8905 13.6184 13.8288 13.7737 13.8288C13.9207 13.8281 14.0615 13.7693 14.1654 13.6654C14.2693 13.5615 14.3281 13.4207 14.3288 13.2737C14.3288 13.1184 14.3905 12.9695 14.5004 12.8596C14.6102 12.7498 14.7591 12.6881 14.9144 12.6881ZM7.6597 6.95884C7.5778 6.87697 7.47347 6.82122 7.3599 6.79864C7.24632 6.77605 7.1286 6.78765 7.02162 6.83196C6.91463 6.87627 6.82319 6.95131 6.75884 7.04758C6.6945 7.14386 6.66014 7.25705 6.66011 7.37285V9.3685C6.65988 9.44546 6.67487 9.52171 6.70422 9.59286C6.73356 9.66401 6.77669 9.72866 6.83111 9.78308C6.88553 9.8375 6.95018 9.88063 7.02133 9.90997C7.09248 9.93932 7.16873 9.95431 7.24569 9.95407H9.24134C9.35714 9.95405 9.47033 9.91969 9.56661 9.85535C9.66288 9.791 9.73792 9.69955 9.78223 9.59257C9.82654 9.48558 9.83813 9.36786 9.81555 9.25429C9.79296 9.14072 9.73721 9.03639 9.65534 8.95449L9.06391 8.36306L11.6727 5.72386L12.2483 6.29948C12.3302 6.38139 12.4346 6.43715 12.5482 6.45971C12.6619 6.48228 12.7796 6.47063 12.8866 6.42625C12.9936 6.38187 13.0851 6.30674 13.1494 6.21038C13.2137 6.11401 13.248 6.00074 13.2479 5.88489V3.88983C13.2481 3.81286 13.2331 3.73661 13.2038 3.66546C13.1744 3.59431 13.1313 3.52967 13.0769 3.47524C13.0225 3.42082 12.9578 3.3777 12.8867 3.34835C12.8155 3.31901 12.7393 3.30402 12.6623 3.30425H10.6666C10.5508 3.30427 10.4376 3.33863 10.3414 3.40298C10.2451 3.46732 10.1701 3.55877 10.1258 3.66575C10.0814 3.77274 10.0698 3.89046 10.0924 4.00403C10.115 4.11761 10.1708 4.22194 10.2526 4.30383L10.8441 4.89527L8.23532 7.53447L7.6597 6.95884Z" fill="#00BCF0"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_17721_7028" x1="6.10288" y1="1.81272" x2="4.97726" y2="2.34587" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#C7F284"></stop>
                                                    <stop offset="1" stopColor="#00BEF0"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_17721_7028" x1="8.95399" y1="1.81272" x2="7.828" y2="2.34631" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#C7F284"></stop>
                                                    <stop offset="1" stopColor="#00BEF0"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint2_linear_17721_7028" x1="11.805" y1="1.81272" x2="10.6794" y2="2.34587" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#C7F284"></stop>
                                                    <stop offset="1" stopColor="#00BEF0"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-col justify-center items-start gap-1 inline-flex">
                                <div className="flex text-base font-semibold leading-none items-center group-hover:text-labs text-cyan-50">
                                    Perpetual<div className="ml-2.5 text-xs rounded-md leading-none py-1 px-1.5 bg-labs text-black">
                                        Beta</div>
                                </div>
                                <div className="text-[11px] font-normal leading-none tracking-[0.1px] text-opacity-75 group-hover:!text-labs text-cyan-50 group-hover:text-labs">
                                    Degen and Earn</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="flex lg:hidden text-sm text-[rgba(0,0,0,0.35)] dark:bg-black/10 dark:text-white-35 lg:space-x-10 overflow-auto">
                    <a className="flex items-center hover:text-black dark:hover:text-white relative h-[52px] p-5 justify-center text-black dark:text-white font-bold bg-[#192531]" href="/swap/-">
                        <span className="whitespace-nowrap">Swap</span>
                        <div className="absolute bottom-[1px] w-full border-b-2 border-v2-primary"></div>
                    </a>
                    <a className="flex items-center font-semibold hover:text-black dark:hover:text-white relative h-[52px] p-5 justify-center" href="/limit/-">
                        <span className="whitespace-nowrap">Limit Order</span>
                    </a>
                    <a className="flex items-center font-semibold hover:text-black dark:hover:text-white relative h-[52px] p-5 justify-center" href="/dca/-">
                        <span className="whitespace-nowrap">DCA</span>
                    </a>
                    <a className="flex items-center font-semibold hover:text-black dark:hover:text-white relative h-[52px] p-5 justify-center" href="/bridge-compare">
                        <span className="whitespace-nowrap">Bridge</span>
                    </a>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center px-1 md:px-3">
                <div className="mt-10 md:mt-20 w-full max-w-md z-10">
                    <div className="flex justify-end mb-2">
                        <div className="flex flex-row w-full">
                            <div>
                                <button className="h-fit cursor-pointer border rounded-full p-[calc(0.5rem-1px)] text-v2-lily/80 bg-v2-background border-transparent hover:border fill-white-25 hover:border-v2-primary/50 hover:text-v2-primary focus:outline-1">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_9115_125076)">
                                            <path d="M11.6464 4.23513V0.706082L10.4109 1.94156C9.31705 0.741165 7.72888 0 5.99976 0C2.68246 0 -0.000244141 2.6827 -0.000244141 6C-0.000244141 9.3173 2.68178 12 5.99976 12C7.69381 12 9.21117 11.2939 10.3057 10.165L9.31773 9.14128C8.50577 10.0234 7.30536 10.5879 5.99976 10.5879C3.45867 10.5879 1.41192 8.5411 1.41192 6.00002C1.41192 3.45894 3.45867 1.41218 5.99976 1.41218C7.34111 1.41218 8.5759 2.01238 9.42293 2.92954L8.11732 4.23515L11.6464 4.23513Z" fill="currentColor"></path>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_9115_125076">
                                                <rect width="12" height="12" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <div className="ml-auto flex flex-row space-x-1">
                                <div><button className="h-fit cursor-pointer border px-[calc(0.75rem-1px)] py-[calc(0.5rem-1px)] rounded-full text-v2-lily/80 bg-v2-background border-transparent hover:border fill-white-25 hover:border-v2-primary/50 hover:text-v2-primary focus:outline-1 flex items-center space-x-2">
                                        <div className="text-white/35 fill-current"><svg width="12" height="12" viewBox="0 0 12 12" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_10835_148498)">
                                                    <path d="M1.5 6C1.5 4.34595 2.84591 3 4.5 3V4.5L7.5 2.25L4.5 0V1.5C2.01855 1.5 0 3.51855 0 6C0 8.48145 2.01855 10.5 4.5 10.5H6.75V9H4.5C2.84595 9 1.5 7.6541 1.5 6Z" fill="inherit"></path>
                                                    <path d="M8.25 1.5H12V3H8.25V1.5Z" fill="inherit"></path>
                                                    <path d="M8.25 5.25H12V6.75H8.25V5.25Z" fill="inherit"></path>
                                                    <path d="M8.25 9H12V10.5H8.25V9Z" fill="inherit"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_10835_148498">
                                                        <rect width="12" height="12" fill="inherit"></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg></div><span className="flex text-xs leading-none">Market</span>
                                    </button></div>
                                <div>
                                    <button className="h-fit cursor-pointer border px-[calc(0.75rem-1px)] py-[calc(0.5rem-1px)] rounded-full text-v2-lily/80 bg-v2-background border-transparent hover:border fill-white-25 hover:border-v2-primary/50 hover:text-v2-primary focus:outline-1 flex items-center space-x-0.5 text-xs leading-none">
                                        <span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_10794_148239)">
                                                    <path d="M10.7997 7.8H10.7156C10.4516 6.768 9.51561 6 8.39961 6C7.28361 6 6.34757 6.768 6.08361 7.8H1.19961C0.863609 7.8 0.599609 8.064 0.599609 8.4C0.599609 8.736 0.863609 9 1.19961 9H6.08361C6.34761 10.032 7.28361 10.8 8.39961 10.8C9.51561 10.8 10.4517 10.032 10.7156 9H10.7997C11.1357 9 11.3997 8.736 11.3997 8.4C11.3997 8.064 11.1357 7.8 10.7997 7.8ZM8.39965 9.6C7.73963 9.6 7.19965 9.06002 7.19965 8.4C7.19965 7.73998 7.73963 7.2 8.39965 7.2C9.05967 7.2 9.59965 7.73998 9.59965 8.4C9.59965 9.06002 9.05967 9.6 8.39965 9.6Z" fill="currentColor"></path>
                                                    <path d="M1.19961 4.19995H1.28365C1.54765 5.23195 2.48365 5.99995 3.59965 5.99995C4.71565 5.99995 5.65169 5.23195 5.91565 4.19995H10.7997C11.1357 4.19995 11.3997 3.93595 11.3997 3.59995C11.3997 3.26395 11.1357 2.99995 10.7997 2.99995H5.91565C5.65165 1.96795 4.71565 1.19995 3.59965 1.19995C2.48365 1.19995 1.54761 1.96795 1.28365 2.99995H1.19961C0.863609 2.99995 0.599609 3.26395 0.599609 3.59995C0.599609 3.93595 0.863609 4.19995 1.19961 4.19995ZM3.59961 2.39995C4.25963 2.39995 4.79961 2.93993 4.79961 3.59995C4.79961 4.25997 4.25963 4.79995 3.59961 4.79995C2.93959 4.79995 2.39961 4.25997 2.39961 3.59995C2.39961 2.93993 2.93959 2.39995 3.59961 2.39995Z" fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_10794_148239">
                                                        <rect width="12" height="12" fill="currentColor">
                                                        </rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </span>
                                        <span>0,5%</span>
                                    </button>
                                </div>
                                <div>
                                    <button className="h-fit cursor-pointer border rounded-full p-[calc(0.5rem-1px)] text-v2-lily/80 bg-v2-background border-transparent hover:border fill-white-25 hover:border-v2-primary/50 hover:text-v2-primary focus:outline-1 flex items-center space-x-2">
                                        <span className="inline-block">
                                            <svg width="12" height="12" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.71971 1.2926L6.41471 2.9726C6.11846 3.06573 5.83097 3.18635 5.55971 3.32761L4.14971 2.35761L2.33979 4.16753L3.31479 5.57252C3.17292 5.84439 3.05355 6.13003 2.95979 6.42753L1.27979 6.73252V9.29252L2.95979 9.59751C3.05354 9.89564 3.17729 10.18 3.31979 10.4525L2.33979 11.8575L4.14971 13.6674L5.5547 12.6974C5.82719 12.8399 6.11657 12.9587 6.4147 13.0524L6.71969 14.7324H9.27969L9.58468 13.0524C9.88218 12.9587 10.1678 12.8393 10.4397 12.6974L11.8447 13.6674L13.6546 11.8575L12.6796 10.4525C12.8208 10.1813 12.9415 9.89878 13.0346 9.60252L14.7196 9.29252V6.73252L13.0346 6.42753C12.9415 6.1319 12.8252 5.84815 12.6846 5.57753L13.6546 4.16753L11.8447 2.35761L10.4397 3.32761C10.1678 3.18574 9.88218 3.06636 9.58468 2.9726L9.27969 1.2926H6.71971ZM7.9997 4.9726C9.67842 4.9726 11.0397 6.33385 11.0397 8.0126C11.0397 9.69135 9.67846 11.0526 7.9997 11.0526C6.32095 11.0526 4.95971 9.69135 4.95971 8.0126C4.95971 6.33385 6.32095 4.9726 7.9997 4.9726Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-v2-background rounded-2xl backdrop-blur-[20px] p-4 shadow-swap2-light dark:shadow-swap2-dark">
                        <form>
                            <div className="flex-col space-y-2 relative">
                                <div className="flex justify-between">
                                    <label htmlFor="fromValue" className="text-xs sm:text-sm font-medium text-black/90 dark:text-white whitespace-nowrap">You're
                                        paying</label>
                                    <div className="flex space-x-2"></div>
                                </div>
                                <div className="p-4 h-[72px] border border-transparent relative bg-[#EFF0F0] dark:bg-v2-background-dark rounded-xl flex flex-col space-y-3 group focus-within:border-v2-primary/50 focus-within:shadow-swap-input-dark">
                                    <div className="flex">
                                        <div className="flex justify-between items-center group/select">
                                            <button type="button" className="py-2 px-3 h-10 rounded-xl flex space-x-3 items-center bg-white dark:bg-v2-background border dark:group-hover/select:border-v2-primary/50 dark:group-hover/select:bg-[rgba(199,242,132,0.2)] dark:group-hover/select:shadow-swap-input-dark border-transparent">
                                                <div className="w-6 h-6 text-xs flex items-center justify-center rounded-full">
                                                    <span className="relative"><img alt="USDC" fetchpriority="high" width="24" height="24" decoding="async" data-nimg="1" className="rounded-full" src="https://d1c0tjyubqkol1.cloudfront.net/svg/image.webp" style={{color:'transparent'}}/></span>
                                                </div>
                                                <div className="font-semibold text-sm" translate="no">USDC</div>
                                                <div className="text-black/25 dark:text-white/25 group-hover/select:text-[#00D1DF] dark:group-hover/select:text-v2-primary fill-current">
                                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z" fill="inherit"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                        <span className="flex-1 text-right">
                                            <div className="flex flex-col text-right h-full">
                                                <input inputMode="decimal" autoComplete="off" name="fromValue" data-lpignore="true" placeholder="0.00" className="h-full w-full bg-transparent disabled:cursor-not-allowed disabled:opacity-100 disabled:text-black dark:text-white text-right font-semibold dark:placeholder:text-white/25 text-base md:text-xl outline-none" type="text"/>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                <div className="relative flex justify-center">
                                    <hr className="absolute w-full border-jupiter-input-light dark:border-[rgba(25,35,45,0.35)] top-[calc(50%-1px)] -z-0"/>
                                    <div className="inline-block z-10">
                                        <button type="button" className="group/flip bg-[#EBEFF1] dark:bg-v2-background w-8 h-8 rounded-full cursor-pointer flex flex-col justify-center border-[3px] dark:border-[rgba(25,35,45,0.75)] dark:text-white-25 dark:hover:border-v2-primary dark:hover:shadow-swap-input-dark">
                                            <span className="w-full text-white/50 fill-current flex justify-center transition-none group-hover/flip:text-v2-primary/50 dark:group-hover/flip:text-v2-primary">
                                                <svg width="21" height="22" viewBox="0 0 21 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.51043 7.47998V14.99H7.77043V7.47998L9.66043 9.36998L10.5505 8.47994L7.5859 5.51453C7.3398 5.26925 6.94114 5.26925 6.69504 5.51453L3.73047 8.47994L4.62051 9.36998L6.51043 7.47998Z" fill="currentColor"></path>
                                                    <path d="M14.4902 14.52V7.01001H13.2302V14.52L11.3402 12.63L10.4502 13.5201L13.4148 16.4855C13.6609 16.7308 14.0595 16.7308 14.3056 16.4855L17.2702 13.5201L16.3802 12.63L14.4902 14.52Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <label className="text-xs sm:text-sm font-medium text-black/90 dark:text-white">To
                                        receive</label>
                                    <div className="flex"></div>
                                </div>
                                <div className="p-4 h-[72px] border border-[#EFF0F0] dark:border-0 dark:bg-[rgba(14,19,32,0.3)] rounded-xl flex flex-col space-y-3">
                                    <div className="flex">
                                        <div className="flex justify-between items-center group/select">
                                            <button type="button" className="py-2 px-3 h-10 rounded-xl flex space-x-3 items-center bg-white dark:bg-v2-background border dark:group-hover/select:border-v2-primary/50 dark:group-hover/select:bg-[rgba(199,242,132,0.2)] dark:group-hover/select:shadow-swap-input-dark border-transparent">
                                                <div className="w-6 h-6 text-xs flex items-center justify-center rounded-full">
                                                    <span className="relative"><img alt="USDC" fetchpriority="high" width="24" height="24" decoding="async" data-nimg="1" className="rounded-full" src="https://d1c0tjyubqkol1.cloudfront.net/svg/image (1).webp" style={{color:'transparent'}}/></span>
                                                </div>
                                                <div className="font-semibold text-sm" translate="no">SOL</div>
                                                <div className="text-black/25 dark:text-white/25 group-hover/select:text-[#00D1DF] dark:group-hover/select:text-v2-primary fill-current">
                                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z" fill="inherit"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                        <span className="flex-1 text-right h-10">
                                            <div className="flex flex-col text-right h-full">
                                                <input inputMode="decimal" autoComplete="off" name="toValue" data-lpignore="true" disabled="" placeholder="" className="h-full w-full bg-transparent disabled:cursor-not-allowed disabled:opacity-100 disabled:text-black dark:text-white text-right font-semibold dark:placeholder:text-white/25 text-base md:text-xl outline-none" type="text"/>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="!bg-transparent css-1lpgtt2">
                                <button onClick={handleSubmit} className="h-full w-full rounded-xl text-white group bg-none bg-[#141519] dark:bg-[#121D28] hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(0,190,240,1)] border border-transparent dark:hover:border dark:hover:border-v2-primary disabled:cursor-not-allowed mt-3">
                                    <div className="rounded-xl bg-v2-text-gradient dark:bg-[rgba(18,29,40,1)] bg-clip-text text-transparent group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] py-5 text-lg font-medium leading-none">
                                        <span >Connect Wallet</span>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="my-4">
                        <div className="flex flex-col space-y-2 mt-2 sm:mt-4">
                            <div className="flex justify-between dark:text-white" translate="no">
                                <div className="flex items-center w-full max-w-[60%] md:max-w-[35%] text-ellipsis space-x-3">
                                    <div className="min-w-[24px] min-h-[24px]"><span className="relative"><img alt="USDC" fetchpriority="high" width="24" height="24" decoding="async" data-nimg="1" className="rounded-full" src="https://d1c0tjyubqkol1.cloudfront.net/svg/image.webp" style={{color:'transparent'}}/></span></div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center space-x-3"><span className="text-sm dark:text-white-75 font-semibold">USDC</span><a target="_blank" rel="noreferrer" className="flex items-center bg-black/25 text-white/75 px-2 py-0.5 space-x-1 rounded cursor-pointer" href="https://birdeye.so/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v?chain=solana">
                                                <div className="text-xxs">EPjF...Dt1v</div><svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="10.8492" y1="13.0606" x2="19.435" y2="4.47485" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
                                                    <path d="M19.7886 4.12134L20.1421 8.01042" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                    <path d="M19.7886 4.12134L15.8995 3.76778" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                    <path d="M18 13.1465V17.6465C18 19.3033 16.6569 20.6465 15 20.6465H6C4.34315 20.6465 3 19.3033 3 17.6465V8.64648C3 6.98963 4.34315 5.64648 6 5.64648H10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </a></div><span className="text-xs text-black-50 dark:text-white-50 text-ellipsis">USD
                                            Coin</span>
                                    </div>
                                </div>
                                <div className="w-full max-w-[50%]">
                                    <div className="w-full flex items-center"><span className="w-[60%] mr-2.5 text-[14px] font-semibold text-ellipsis"><span>1</span></span><span className="w-[40%] mr-2.5 text-[14px] font-semibold text-ellipsis text-[#FF0000]">-0,24%</span>
                                    </div><svg width="0" height="0">
                                        <defs>
                                            <linearGradient id="linear">
                                                <stop offset="0%" stopColor="#FCC00A"></stop>
                                                <stop offset="100%" stopColor="#4EBAE9"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="flex w-full h-6 items-center">
                                        <div className="recharts-responsive-container" width="224" height="24" style={{width: '100%',height:'24px', minWidth: '0px'}}>
                                            <div className="recharts-wrapper" role="region" style={{position: 'relative',cursor: 'default',width: '224px',height: '24px'}}>
                                                <svg className="recharts-surface" width="224" height="24" viewBox="0 0 224 24">
                                                    <title></title>
                                                    <desc></desc>
                                                    <defs>
                                                        <clipPath id="recharts4-clip">
                                                            <rect x="5" y="5" height="14" width="214"></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g className="recharts-layer recharts-line">
                                                        <path stroke="url(#linear)" strokeWidth="2" fill="none" width="214" height="14" className="recharts-curve recharts-line-curve" d="M5,10.82C5.254,11.439,5.508,12.058,5.762,12.058C6.015,12.058,6.269,9.412,6.523,9.412C6.777,9.412,7.031,9.785,7.285,9.932C7.539,10.078,7.792,10.052,8.046,10.292C8.3,10.532,8.554,12.253,8.808,12.253C9.062,12.253,9.316,11.958,9.569,11.809C9.823,11.66,10.077,11.36,10.331,11.36C10.585,11.36,10.839,11.998,11.093,11.998C11.346,11.998,11.6,10.615,11.854,10.527C12.108,10.44,12.362,10.396,12.616,10.396C12.87,10.396,13.123,13.537,13.377,13.537C13.631,13.537,13.885,13.418,14.139,13.18C14.393,12.942,14.647,10.657,14.9,10.657C15.154,10.657,15.408,13.057,15.662,14.081C15.916,15.105,16.17,16.799,16.423,16.799C16.677,16.799,16.931,14.499,17.185,13.323C17.439,12.147,17.693,9.74,17.947,9.74C18.2,9.74,18.454,10.049,18.708,10.433C18.962,10.816,19.216,11.554,19.47,12.042C19.724,12.529,19.977,12.938,20.231,13.357C20.485,13.776,20.739,14.555,20.993,14.555C21.247,14.555,21.501,13.715,21.754,12.947C22.008,12.179,22.262,9.948,22.516,9.948C22.77,9.948,23.024,10.718,23.278,10.718C23.531,10.718,23.785,9.748,24.039,9.491C24.293,9.234,24.547,9.105,24.801,9.105C25.055,9.105,25.308,11.026,25.562,11.285C25.816,11.544,26.07,11.674,26.324,11.674C26.578,11.674,26.832,7.449,27.085,7.449C27.339,7.449,27.593,8.82,27.847,9.634C28.101,10.448,28.355,12.333,28.609,12.333C28.862,12.333,29.116,12.17,29.37,11.843C29.624,11.516,29.878,8.362,30.132,8.362C30.386,8.362,30.639,10.877,30.893,11.707C31.147,12.536,31.401,13.339,31.655,13.339C31.909,13.339,32.163,9.438,32.416,9.438C32.67,9.438,32.924,10.272,33.178,10.952C33.432,11.631,33.686,13.516,33.94,13.516C34.193,13.516,34.447,12.452,34.701,12.452C34.955,12.452,35.209,12.472,35.463,12.512C35.716,12.553,35.97,13.906,36.224,13.906C36.478,13.906,36.732,11.294,36.986,11.294C37.24,11.294,37.493,11.89,37.747,11.89C38.001,11.89,38.255,11.876,38.509,11.848C38.763,11.821,39.017,10.731,39.27,10.536C39.524,10.342,39.778,10.244,40.032,10.244C40.286,10.244,40.54,10.466,40.794,10.753C41.047,11.039,41.301,11.962,41.555,11.962C41.809,11.962,42.063,10.846,42.317,9.686C42.571,8.525,42.824,5,43.078,5C43.332,5,43.586,13.023,43.84,13.023C44.094,13.023,44.348,12.506,44.601,12.433C44.855,12.359,45.109,12.323,45.363,12.323C45.617,12.323,45.871,13.369,46.125,13.369C46.378,13.369,46.632,12.309,46.886,12.309C47.14,12.309,47.394,13.316,47.648,13.316C47.902,13.316,48.155,11.956,48.409,11.634C48.663,11.312,48.917,11.151,49.171,11.151C49.425,11.151,49.679,12.395,49.932,12.395C50.186,12.395,50.44,12.02,50.694,12.02C50.948,12.02,51.202,12.89,51.456,13.212C51.709,13.535,51.963,13.46,52.217,13.954C52.471,14.449,52.725,19,52.979,19C53.233,19,53.486,14.25,53.74,12.795C53.994,11.34,54.248,10.27,54.502,10.27C54.756,10.27,55.009,12.319,55.263,13.017C55.517,13.716,55.771,14.459,56.025,14.459C56.279,14.459,56.533,12.897,56.786,11.992C57.04,11.087,57.294,9.028,57.548,9.028C57.802,9.028,58.056,11.843,58.31,12.464C58.563,13.086,58.817,13.276,59.071,13.396C59.325,13.516,59.579,13.456,59.833,13.577C60.087,13.697,60.34,14.151,60.594,14.401C60.848,14.652,61.102,15.079,61.356,15.079C61.61,15.079,61.864,12.648,62.117,12.648C62.371,12.648,62.625,12.963,62.879,12.963C63.133,12.963,63.387,10.384,63.641,10.384C63.894,10.384,64.148,10.695,64.402,10.695C64.656,10.695,64.91,8.32,65.164,8.32C65.418,8.32,65.671,8.929,65.925,9.544C66.179,10.159,66.433,12.011,66.687,12.011C66.941,12.011,67.195,9.296,67.448,9.296C67.702,9.296,67.956,13.045,68.21,14.412C68.464,15.779,68.718,17.499,68.972,17.499C69.225,17.499,69.479,10.316,69.733,10.316C69.987,10.316,70.241,10.607,70.495,10.956C70.749,11.306,71.002,11.942,71.256,12.413C71.51,12.884,71.764,13.782,72.018,13.782C72.272,13.782,72.526,12.19,72.779,11.435C73.033,10.681,73.287,9.255,73.541,9.255C73.795,9.255,74.049,10.189,74.302,10.554C74.556,10.918,74.81,10.85,75.064,11.442C75.318,12.034,75.572,14.284,75.826,14.284C76.079,14.284,76.333,10.146,76.587,10.146C76.841,10.146,77.095,11.383,77.349,11.383C77.603,11.383,77.856,8.975,78.11,8.975C78.364,8.975,78.618,12.127,78.872,12.127C79.126,12.127,79.38,10.88,79.633,10.88C79.887,10.88,80.141,13.58,80.395,13.58C80.649,13.58,80.903,13.231,81.157,12.547C81.41,11.863,81.664,9.476,81.918,9.476C82.172,9.476,82.426,9.584,82.68,9.801C82.934,10.017,83.187,12.268,83.441,12.268C83.695,12.268,83.949,11.709,84.203,11.709C84.457,11.709,84.711,12.769,84.964,12.769C85.218,12.769,85.472,12.3,85.726,12.3C85.98,12.3,86.234,13.325,86.488,13.325C86.741,13.325,86.995,12.979,87.249,12.288C87.503,11.596,87.757,8.933,88.011,8.933C88.265,8.933,88.518,14.129,88.772,14.129C89.026,14.129,89.28,13.73,89.534,13.591C89.788,13.452,90.042,13.493,90.295,13.296C90.549,13.1,90.803,10.763,91.057,10.763C91.311,10.763,91.565,11.107,91.819,11.731C92.072,12.356,92.326,14.513,92.58,14.513C92.834,14.513,93.088,10.471,93.342,10.471C93.595,10.471,93.849,11.9,94.103,11.9C94.357,11.9,94.611,10.392,94.865,10.392C95.119,10.392,95.372,12.556,95.626,13.172C95.88,13.789,96.134,13.532,96.388,14.097C96.642,14.662,96.896,16.562,97.149,16.562C97.403,16.562,97.657,15.57,97.911,15.258C98.165,14.945,98.419,14.827,98.673,14.689C98.926,14.551,99.18,14.531,99.434,14.43C99.688,14.329,99.942,14.085,100.196,14.085C100.45,14.085,100.703,18.719,100.957,18.719C101.211,18.719,101.465,13.05,101.719,11.33C101.973,9.611,102.227,8.403,102.48,8.403C102.734,8.403,102.988,11.645,103.242,11.645C103.496,11.645,103.75,8.645,104.004,8.645C104.257,8.645,104.511,9.515,104.765,9.928C105.019,10.341,105.273,11.123,105.527,11.123C105.781,11.123,106.034,8.537,106.288,8.537C106.542,8.537,106.796,10.541,107.05,10.541C107.304,10.541,107.558,6.65,107.811,6.65C108.065,6.65,108.319,8.658,108.573,9.451C108.827,10.244,109.081,10.873,109.335,11.406C109.588,11.939,109.842,12.651,110.096,12.651C110.35,12.651,110.604,11.302,110.858,11.302C111.112,11.302,111.365,14.174,111.619,14.174C111.873,14.174,112.127,12.271,112.381,12.271C112.635,12.271,112.888,14.834,113.142,14.834C113.396,14.834,113.65,13.58,113.904,13.156C114.158,12.731,114.412,12.488,114.665,12.285C114.919,12.082,115.173,12.169,115.427,11.937C115.681,11.705,115.935,8.222,116.189,8.222C116.442,8.222,116.696,11.983,116.95,12.487C117.204,12.991,117.458,12.799,117.712,13.242C117.966,13.686,118.219,15.146,118.473,15.146C118.727,15.146,118.981,13.546,119.235,12.967C119.489,12.388,119.743,11.927,119.996,11.672C120.25,11.417,120.504,11.289,120.758,11.289C121.012,11.289,121.266,15.028,121.52,15.028C121.773,15.028,122.027,13.489,122.281,12.608C122.535,11.727,122.789,10.372,123.043,9.742C123.297,9.112,123.55,8.797,123.804,8.797C124.058,8.797,124.312,11.404,124.566,12.231C124.82,13.058,125.074,13.757,125.327,13.757C125.581,13.757,125.835,13.059,126.089,12.847C126.343,12.635,126.597,12.484,126.851,12.484C127.104,12.484,127.358,13.91,127.612,13.91C127.866,13.91,128.12,13.059,128.374,12.447C128.628,11.834,128.881,11.012,129.135,10.236C129.389,9.46,129.643,7.789,129.897,7.789C130.151,7.789,130.405,10.394,130.658,10.394C130.912,10.394,131.166,9.879,131.42,9.879C131.674,9.879,131.928,13.727,132.181,14.322C132.435,14.916,132.689,15.213,132.943,15.213C133.197,15.213,133.451,14.949,133.705,14.765C133.958,14.58,134.212,14.545,134.466,14.107C134.72,13.668,134.974,11.64,135.228,11.145C135.482,10.651,135.735,10.403,135.989,10.403C136.243,10.403,136.497,12.334,136.751,12.522C137.005,12.709,137.259,12.803,137.512,12.803C137.766,12.803,138.02,12.477,138.274,12.477C138.528,12.477,138.782,14.429,139.036,14.429C139.289,14.429,139.543,10.932,139.797,10.932C140.051,10.932,140.305,11.172,140.559,11.172C140.813,11.172,141.066,8.856,141.32,8.844C141.574,8.831,141.828,8.825,142.082,8.825C142.336,8.825,142.59,9.832,142.843,9.832C143.097,9.832,143.351,9.604,143.605,9.604C143.859,9.604,144.113,13.563,144.367,13.563C144.62,13.563,144.874,10.865,145.128,10.865C145.382,10.865,145.636,10.938,145.89,11.084C146.144,11.23,146.397,12.623,146.651,12.623C146.905,12.623,147.159,8.554,147.413,8.554C147.667,8.554,147.921,9.333,148.174,9.785C148.428,10.237,148.682,10.793,148.936,11.265C149.19,11.737,149.444,12.619,149.698,12.619C149.951,12.619,150.205,10.921,150.459,10.921C150.713,10.921,150.967,12.825,151.221,12.825C151.474,12.825,151.728,11.497,151.982,11.497C152.236,11.497,152.49,13.049,152.744,13.049C152.998,13.049,153.251,12.604,153.505,12.604C153.759,12.604,154.013,13.439,154.267,13.439C154.521,13.439,154.775,13.314,155.028,13.062C155.282,12.81,155.536,10.481,155.79,10.468C156.044,10.455,156.298,10.462,156.552,10.449C156.805,10.436,157.059,10.062,157.313,10.062C157.567,10.062,157.821,11.296,158.075,11.296C158.329,11.296,158.582,10.175,158.836,10.175C159.09,10.175,159.344,11.74,159.598,11.74C159.852,11.74,160.106,10.997,160.359,10.997C160.613,10.997,160.867,11.194,161.121,11.194C161.375,11.194,161.629,9.627,161.883,9.627C162.136,9.627,162.39,10.862,162.644,10.862C162.898,10.862,163.152,8.405,163.406,8.405C163.66,8.405,163.913,12.221,164.167,12.221C164.421,12.221,164.675,12.099,164.929,11.89C165.183,11.682,165.437,11.088,165.69,10.97C165.944,10.852,166.198,10.793,166.452,10.793C166.706,10.793,166.96,10.833,167.214,10.911C167.467,10.99,167.721,11.522,167.975,11.522C168.229,11.522,168.483,10.832,168.737,10.832C168.991,10.832,169.244,10.985,169.498,11.193C169.752,11.401,170.006,11.685,170.26,12.078C170.514,12.472,170.767,13.553,171.021,13.553C171.275,13.553,171.529,13.113,171.783,12.894C172.037,12.676,172.291,12.632,172.544,12.242C172.798,11.852,173.052,10.555,173.306,10.555C173.56,10.555,173.814,12.241,174.068,12.296C174.321,12.352,174.575,12.379,174.829,12.379C175.083,12.379,175.337,12.168,175.591,12.089C175.845,12.009,176.098,12.027,176.352,11.904C176.606,11.781,176.86,10.898,177.114,10.845C177.368,10.792,177.622,10.766,177.875,10.766C178.129,10.766,178.383,11.952,178.637,11.952C178.891,11.952,179.145,10.294,179.399,10.294C179.652,10.294,179.906,10.346,180.16,10.45C180.414,10.554,180.668,11.284,180.922,11.617C181.176,11.949,181.429,12.358,181.683,12.444C181.937,12.53,182.191,12.573,182.445,12.573C182.699,12.573,182.953,12.314,183.206,12.282C183.46,12.251,183.714,12.235,183.968,12.235C184.222,12.235,184.476,12.242,184.73,12.254C184.983,12.267,185.237,12.364,185.491,12.364C185.745,12.364,185.999,12.132,186.253,11.93C186.507,11.727,186.76,11.35,187.014,11.147C187.268,10.944,187.522,10.71,187.776,10.71C188.03,10.71,188.284,12.919,188.537,12.919C188.791,12.919,189.045,11.637,189.299,11.637C189.553,11.637,189.807,12.488,190.06,12.488C190.314,12.488,190.568,12.387,190.822,12.184C191.076,11.98,191.33,11.187,191.584,11.187C191.837,11.187,192.091,11.221,192.345,11.289C192.599,11.357,192.853,12.621,193.107,12.724C193.361,12.827,193.614,12.878,193.868,12.878C194.122,12.878,194.376,11.522,194.63,11.522C194.884,11.522,195.138,13.576,195.391,13.576C195.645,13.576,195.899,13.265,196.153,12.942C196.407,12.62,196.661,11.639,196.915,11.639C197.168,11.639,197.422,11.728,197.676,11.728C197.93,11.728,198.184,10.202,198.438,10.202C198.692,10.202,198.945,10.582,199.199,10.761C199.453,10.941,199.707,10.934,199.961,11.279C200.215,11.624,200.469,13.66,200.722,13.66C200.976,13.66,201.23,12.693,201.484,12.693C201.738,12.693,201.992,12.73,202.246,12.73C202.499,12.73,202.753,12.632,203.007,12.435C203.261,12.239,203.515,11.231,203.769,11.231C204.023,11.231,204.276,11.486,204.53,11.62C204.784,11.753,205.038,11.758,205.292,12.035C205.546,12.312,205.8,13.234,206.053,13.598C206.307,13.962,206.561,14.218,206.815,14.218C207.069,14.218,207.323,12.252,207.577,12.252C207.83,12.252,208.084,13.349,208.338,13.349C208.592,13.349,208.846,11.059,209.1,11.059C209.353,11.059,209.607,11.296,209.861,11.77C210.115,12.244,210.369,14.439,210.623,14.439C210.877,14.439,211.13,10.633,211.384,10.633C211.638,10.633,211.892,13.198,212.146,13.198C212.4,13.198,212.654,12.167,212.907,11.366C213.161,10.566,213.415,8.395,213.669,8.395C213.923,8.395,214.177,10.731,214.431,11.719C214.684,12.707,214.938,14.323,215.192,14.323C215.446,14.323,215.7,12.302,215.954,11.654C216.208,11.007,216.461,10.438,216.715,10.438C216.969,10.438,217.223,10.838,217.477,11.051C217.731,11.264,217.985,11.272,218.238,11.714C218.492,12.157,218.746,13.169,219,14.181">
                                                        </path>
                                                        <g className="recharts-layer"></g>
                                                    </g>
                                                </svg>
                                                <div tabIndex="-1" role="dialog" className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-top" style={{transform: 'translate(230px, -6px)', pointerEvents: 'none',visibility: 'hidden', position: 'absolute', top: '0px', left: '0px'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between dark:text-white" translate="no">
                                <div className="flex items-center w-full max-w-[60%] md:max-w-[35%] text-ellipsis space-x-3">
                                    <div className="min-w-[24px] min-h-[24px]"><span className="relative">
                                      <img alt="SOL" className="rounded-full" src="https://d1c0tjyubqkol1.cloudfront.net/svg/image (1).webp" style={{width:'24px',height:'24px',color: 'transparent'}}/></span></div>
                                    <div className="flex flex-col">
                                        <div className="flex items-center space-x-3"><span className="text-sm dark:text-white-75 font-semibold">SOL</span><a target="_blank" rel="noreferrer" className="flex items-center bg-black/25 text-white/75 px-2 py-0.5 space-x-1 rounded cursor-pointer" href="https://birdeye.so/token/So11111111111111111111111111111111111111112?chain=solana">
                                                <div className="text-xxs">So11...1112</div><svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <line x1="10.8492" y1="13.0606" x2="19.435" y2="4.47485" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></line>
                                                    <path d="M19.7886 4.12134L20.1421 8.01042" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                    <path d="M19.7886 4.12134L15.8995 3.76778" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    </path>
                                                    <path d="M18 13.1465V17.6465C18 19.3033 16.6569 20.6465 15 20.6465H6C4.34315 20.6465 3 19.3033 3 17.6465V8.64648C3 6.98963 4.34315 5.64648 6 5.64648H10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                            </a></div><span className="text-xs text-black-50 dark:text-white-50 text-ellipsis">Wrapped
                                            SOL</span>
                                    </div>
                                </div>
                                <div className="w-full max-w-[50%]">
                                    <div className="w-full flex items-center"><span className="w-[60%] mr-2.5 text-[14px] font-semibold text-ellipsis"><span>81.159274862</span></span><span className="w-[40%] mr-2.5 text-[14px] font-semibold text-ellipsis text-[#FF0000]">-4,03%</span>
                                    </div><svg width="0" height="0">
                                        <defs>
                                            <linearGradient id="linear">
                                                <stop offset="0%" stopColor="#FCC00A"></stop>
                                                <stop offset="100%" stopColor="#4EBAE9"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="flex w-full h-6 items-center">
                                        <div className="recharts-responsive-container" width="224" height="24" style={{width: '100%', height: '24px', minWidth: '0px'}}>
                                            <div className="recharts-wrapper" role="region" style={{position: 'relative', cursor: 'default', width: '224px', height: '24px'}}>
                                                <svg className="recharts-surface" width="224" height="24" viewBox="0 0 224 24">
                                                    <title></title>
                                                    <desc></desc>
                                                    <defs>
                                                        <clipPath id="recharts1-clip">
                                                            <rect x="5" y="5" height="14" width="214"></rect>
                                                        </clipPath>
                                                    </defs>
                                                    <g className="recharts-layer recharts-line">
                                                        <path stroke="url(#linear)" strokeWidth="2" fill="none" width="214" height="14" className="recharts-curve recharts-line-curve" d="M5,5.863C5.252,6.383,5.504,6.903,5.756,6.903C6.008,6.903,6.26,6.322,6.512,6.245C6.764,6.168,7.016,6.129,7.269,6.129C7.521,6.129,7.773,6.39,8.025,6.51C8.277,6.629,8.529,6.835,8.781,6.848C9.033,6.862,9.285,6.855,9.537,6.869C9.789,6.883,10.041,7.9,10.293,8.083C10.545,8.266,10.797,8.358,11.049,8.358C11.302,8.358,11.554,8.171,11.806,8.004C12.058,7.838,12.31,7.36,12.562,7.36C12.814,7.36,13.066,7.602,13.318,7.669C13.57,7.737,13.822,7.77,14.074,7.77C14.326,7.77,14.578,7.343,14.83,7.343C15.082,7.343,15.335,7.439,15.587,7.63C15.839,7.821,16.091,8.645,16.343,8.645C16.595,8.645,16.847,8.168,17.099,7.956C17.351,7.744,17.603,7.374,17.855,7.374C18.107,7.374,18.359,7.678,18.611,7.778C18.863,7.879,19.115,7.895,19.367,7.975C19.62,8.055,19.872,8.069,20.124,8.258C20.376,8.446,20.628,9.199,20.88,9.429C21.132,9.658,21.384,9.773,21.636,9.773C21.888,9.773,22.14,8.75,22.392,8.75C22.644,8.75,22.896,10.105,23.148,10.343C23.4,10.581,23.653,10.7,23.905,10.7C24.157,10.7,24.409,10.405,24.661,10.405C24.913,10.405,25.165,10.437,25.417,10.437C25.669,10.437,25.921,10.345,26.173,10.161C26.425,9.977,26.677,8.893,26.929,8.893C27.181,8.893,27.433,8.929,27.686,9.002C27.938,9.074,28.19,9.718,28.442,9.718C28.694,9.718,28.946,9.559,29.198,9.53C29.45,9.5,29.702,9.515,29.954,9.485C30.206,9.456,30.458,8.008,30.71,8.008C30.962,8.008,31.214,8.38,31.466,8.38C31.718,8.38,31.971,8.227,32.223,8.161C32.475,8.094,32.727,7.982,32.979,7.982C33.231,7.982,33.483,8.017,33.735,8.067C33.987,8.117,34.239,8.282,34.491,8.282C34.743,8.282,34.995,7.892,35.247,7.886C35.499,7.881,35.751,7.884,36.004,7.878C36.256,7.873,36.508,7.555,36.76,7.555C37.012,7.555,37.264,7.556,37.516,7.558C37.768,7.56,38.02,7.687,38.272,7.687C38.524,7.687,38.776,7.383,39.028,7.383C39.28,7.383,39.532,7.92,39.784,8.11C40.037,8.301,40.289,8.417,40.541,8.526C40.793,8.634,41.045,8.762,41.297,8.762C41.549,8.762,41.801,8.758,42.053,8.757C42.305,8.756,42.557,8.756,42.809,8.755C43.061,8.753,43.313,6.009,43.565,6.009C43.817,6.009,44.069,7.457,44.322,7.457C44.574,7.457,44.826,7.296,45.078,7.296C45.33,7.296,45.582,7.451,45.834,7.451C46.086,7.451,46.338,5.956,46.59,5.93C46.842,5.905,47.094,5.918,47.346,5.892C47.598,5.867,47.85,5.165,48.102,5.135C48.355,5.105,48.607,5.113,48.859,5.091C49.111,5.068,49.363,5,49.615,5C49.867,5,50.119,5.029,50.371,5.086C50.623,5.144,50.875,6.71,51.127,6.731C51.379,6.752,51.631,6.742,51.883,6.763C52.135,6.784,52.388,7.115,52.64,7.406C52.892,7.698,53.144,8.511,53.396,8.511C53.648,8.511,53.9,7.987,54.152,7.782C54.404,7.576,54.656,7.278,54.908,7.278C55.16,7.278,55.412,7.483,55.664,7.891C55.916,8.299,56.168,9.937,56.42,10.136C56.673,10.336,56.925,10.349,57.177,10.435C57.429,10.522,57.681,10.656,57.933,10.656C58.185,10.656,58.437,9.088,58.689,9.088C58.941,9.088,59.193,9.668,59.445,9.92C59.697,10.173,59.949,10.418,60.201,10.603C60.453,10.787,60.706,11.026,60.958,11.026C61.21,11.026,61.462,11.021,61.714,11.021C61.966,11.021,62.218,11.325,62.47,11.325C62.722,11.325,62.974,11.234,63.226,11.234C63.478,11.234,63.73,11.524,63.982,11.524C64.234,11.524,64.486,10.821,64.739,10.821C64.991,10.821,65.243,11.09,65.495,11.09C65.747,11.09,65.999,10.568,66.251,10.563C66.503,10.559,66.755,10.557,67.007,10.557C67.259,10.557,67.511,12.074,67.763,12.074C68.015,12.074,68.267,11.991,68.519,11.991C68.771,11.991,69.024,12.48,69.276,12.686C69.528,12.892,69.78,13.225,70.032,13.225C70.284,13.225,70.536,9.424,70.788,9.424C71.04,9.424,71.292,9.83,71.544,9.957C71.796,10.084,72.048,10.187,72.3,10.187C72.552,10.187,72.804,10.027,73.057,9.941C73.309,9.855,73.561,9.669,73.813,9.669C74.065,9.669,74.317,11.61,74.569,11.617C74.821,11.623,75.073,11.62,75.325,11.627C75.577,11.633,75.829,11.646,76.081,11.685C76.333,11.723,76.585,12.122,76.837,12.231C77.09,12.34,77.342,12.394,77.594,12.394C77.846,12.394,78.098,12.368,78.35,12.317C78.602,12.265,78.854,11.994,79.106,11.994C79.358,11.994,79.61,12.48,79.862,12.48C80.114,12.48,80.366,12.275,80.618,12.268C80.87,12.261,81.122,12.265,81.375,12.258C81.627,12.25,81.879,12.11,82.131,11.843C82.383,11.575,82.635,10.653,82.887,10.653C83.139,10.653,83.391,10.658,83.643,10.668C83.895,10.678,84.147,10.954,84.399,10.954C84.651,10.954,84.903,10.491,85.155,10.491C85.408,10.491,85.66,10.599,85.912,10.644C86.164,10.689,86.416,10.762,86.668,10.762C86.92,10.762,87.172,10.721,87.424,10.693C87.676,10.666,87.928,10.644,88.18,10.597C88.432,10.551,88.684,10.416,88.936,10.416C89.188,10.416,89.441,11.35,89.693,11.35C89.945,11.35,90.197,11.192,90.449,11.192C90.701,11.192,90.953,11.38,91.205,11.38C91.457,11.38,91.709,11.177,91.961,11.069C92.213,10.962,92.465,10.736,92.717,10.736C92.969,10.736,93.221,11.506,93.473,11.506C93.726,11.506,93.978,10.41,94.23,10.41C94.482,10.41,94.734,10.605,94.986,10.605C95.238,10.605,95.49,10.507,95.742,10.507C95.994,10.507,96.246,10.604,96.498,10.781C96.75,10.958,97.002,11.25,97.254,11.568C97.506,11.885,97.759,12.684,98.011,12.684C98.263,12.684,98.515,12.211,98.767,12.084C99.019,11.956,99.271,11.892,99.523,11.892C99.775,11.892,100.027,11.921,100.279,11.978C100.531,12.035,100.783,16.898,101.035,17.217C101.287,17.537,101.539,17.696,101.792,17.696C102.044,17.696,102.296,17.146,102.548,16.897C102.8,16.648,103.052,16.203,103.304,16.203C103.556,16.203,103.808,19,104.06,19C104.312,19,104.564,18.529,104.816,18.529C105.068,18.529,105.32,18.775,105.572,18.847C105.824,18.919,106.077,18.96,106.329,18.96C106.581,18.96,106.833,18.541,107.085,18.541C107.337,18.541,107.589,18.683,107.841,18.683C108.093,18.683,108.345,18.595,108.597,18.42C108.849,18.244,109.101,16.525,109.353,16.525C109.605,16.525,109.857,16.55,110.11,16.598C110.362,16.647,110.614,16.819,110.866,16.819C111.118,16.819,111.37,12.771,111.622,12.771C111.874,12.771,112.126,12.964,112.378,13.049C112.63,13.135,112.882,13.283,113.134,13.283C113.386,13.283,113.638,13.254,113.89,13.221C114.143,13.188,114.395,13.176,114.647,13.087C114.899,12.997,115.151,12.455,115.403,12.455C115.655,12.455,115.907,12.515,116.159,12.515C116.411,12.515,116.663,11.926,116.915,11.926C117.167,11.926,117.419,14.767,117.671,14.907C117.923,15.048,118.176,15.118,118.428,15.118C118.68,15.118,118.932,14.922,119.184,14.922C119.436,14.922,119.688,14.951,119.94,14.951C120.192,14.951,120.444,14.644,120.696,14.544C120.948,14.443,121.2,14.348,121.452,14.348C121.704,14.348,121.956,14.676,122.208,14.676C122.461,14.676,122.713,14.65,122.965,14.597C123.217,14.543,123.469,14.291,123.721,14.193C123.973,14.095,124.225,14.007,124.477,14.007C124.729,14.007,124.981,14.146,125.233,14.385C125.485,14.624,125.737,15.441,125.989,15.441C126.241,15.441,126.494,15.384,126.746,15.384C126.998,15.384,127.25,15.411,127.502,15.465C127.754,15.519,128.006,15.922,128.258,15.922C128.51,15.922,128.762,15.162,129.014,15.153C129.266,15.143,129.518,15.148,129.77,15.138C130.022,15.129,130.274,14.915,130.527,14.915C130.779,14.915,131.031,15.714,131.283,15.944C131.535,16.173,131.787,16.153,132.039,16.293C132.291,16.432,132.543,16.762,132.795,16.781C133.047,16.801,133.299,16.81,133.551,16.81C133.803,16.81,134.055,16.733,134.307,16.733C134.559,16.733,134.812,17.197,135.064,17.197C135.316,17.197,135.568,16.855,135.82,16.739C136.072,16.622,136.324,16.498,136.576,16.498C136.828,16.498,137.08,16.646,137.332,16.836C137.584,17.026,137.836,17.506,138.088,17.639C138.34,17.771,138.592,17.737,138.845,17.837C139.097,17.938,139.349,18.244,139.601,18.244C139.853,18.244,140.105,18.027,140.357,17.913C140.609,17.799,140.861,17.658,141.113,17.559C141.365,17.46,141.617,17.379,141.869,17.317C142.121,17.254,142.373,17.272,142.625,17.183C142.878,17.093,143.13,15.037,143.382,15.037C143.634,15.037,143.886,15.59,144.138,15.82C144.39,16.049,144.642,16.411,144.894,16.411C145.146,16.411,145.398,15.755,145.65,15.755C145.902,15.755,146.154,15.768,146.406,15.793C146.658,15.818,146.91,16.126,147.163,16.126C147.415,16.126,147.667,15.767,147.919,15.724C148.171,15.68,148.423,15.658,148.675,15.658C148.927,15.658,149.179,15.867,149.431,15.945C149.683,16.023,149.935,16.125,150.187,16.125C150.439,16.125,150.691,15.598,150.943,15.598C151.196,15.598,151.448,16.083,151.7,16.083C151.952,16.083,152.204,15.92,152.456,15.869C152.708,15.817,152.96,15.774,153.212,15.774C153.464,15.774,153.716,15.961,153.968,16.022C154.22,16.083,154.472,16.061,154.724,16.14C154.976,16.218,155.229,16.525,155.481,16.525C155.733,16.525,155.985,15.904,156.237,15.904C156.489,15.904,156.741,16.12,156.993,16.12C157.245,16.12,157.497,15.966,157.749,15.966C158.001,15.966,158.253,15.97,158.505,15.978C158.757,15.986,159.009,16.503,159.261,16.69C159.514,16.877,159.766,17.101,160.018,17.101C160.27,17.101,160.522,16.966,160.774,16.966C161.026,16.966,161.278,17.084,161.53,17.084C161.782,17.084,162.034,16.977,162.286,16.763C162.538,16.548,162.79,15.365,163.042,15.365C163.294,15.365,163.547,15.595,163.799,15.699C164.051,15.803,164.303,15.99,164.555,15.99C164.807,15.99,165.059,15.927,165.311,15.85C165.563,15.773,165.815,15.613,166.067,15.53C166.319,15.447,166.571,15.353,166.823,15.353C167.075,15.353,167.327,15.431,167.58,15.431C167.832,15.431,168.084,14.397,168.336,14.367C168.588,14.338,168.84,14.323,169.092,14.323C169.344,14.323,169.596,14.362,169.848,14.362C170.1,14.362,170.352,14.345,170.604,14.345C170.856,14.345,171.108,14.5,171.36,14.5C171.612,14.5,171.865,14.121,172.117,14.11C172.369,14.099,172.621,14.104,172.873,14.094C173.125,14.083,173.377,13.408,173.629,13.408C173.881,13.408,174.133,13.423,174.385,13.453C174.637,13.483,174.889,13.592,175.141,13.592C175.393,13.592,175.645,13.537,175.898,13.532C176.15,13.527,176.402,13.529,176.654,13.524C176.906,13.519,177.158,13.485,177.41,13.485C177.662,13.485,177.914,13.489,178.166,13.496C178.418,13.503,178.67,13.637,178.922,13.693C179.174,13.749,179.426,13.832,179.678,13.832C179.931,13.832,180.183,13.793,180.435,13.793C180.687,13.793,180.939,14.012,181.191,14.073C181.443,14.134,181.695,14.165,181.947,14.165C182.199,14.165,182.451,14.127,182.703,14.127C182.955,14.127,183.207,14.171,183.459,14.171C183.711,14.171,183.963,13.56,184.216,13.521C184.468,13.482,184.72,13.481,184.972,13.462C185.224,13.444,185.476,13.438,185.728,13.411C185.98,13.384,186.232,13.301,186.484,13.301C186.736,13.301,186.988,13.308,187.24,13.308C187.492,13.308,187.744,13.184,187.996,13.184C188.249,13.184,188.501,13.495,188.753,13.495C189.005,13.495,189.257,13.265,189.509,13.265C189.761,13.265,190.013,13.419,190.265,13.419C190.517,13.419,190.769,13.395,191.021,13.361C191.273,13.328,191.525,13.217,191.777,13.217C192.029,13.217,192.282,13.319,192.534,13.378C192.786,13.438,193.038,13.566,193.29,13.575C193.542,13.584,193.794,13.588,194.046,13.588C194.298,13.588,194.55,13.235,194.802,13.235C195.054,13.235,195.306,13.872,195.558,13.872C195.81,13.872,196.062,13.673,196.314,13.576C196.567,13.478,196.819,13.286,197.071,13.286C197.323,13.286,197.575,13.31,197.827,13.31C198.079,13.31,198.331,13.033,198.583,13.033C198.835,13.033,199.087,13.297,199.339,13.297C199.591,13.297,199.843,13.267,200.095,13.267C200.347,13.267,200.6,13.496,200.852,13.6C201.104,13.703,201.356,13.886,201.608,13.886C201.86,13.886,202.112,13.379,202.364,13.379C202.616,13.379,202.868,13.47,203.12,13.47C203.372,13.47,203.624,13.24,203.876,13.24C204.128,13.24,204.38,13.338,204.633,13.338C204.885,13.338,205.137,13.281,205.389,13.281C205.641,13.281,205.893,13.542,206.145,13.568C206.397,13.595,206.649,13.608,206.901,13.608C207.153,13.608,207.405,13.363,207.657,13.363C207.909,13.363,208.161,13.422,208.413,13.422C208.665,13.422,208.918,13.153,209.17,13.153C209.422,13.153,209.674,13.223,209.926,13.291C210.178,13.358,210.43,13.559,210.682,13.559C210.934,13.559,211.186,13.167,211.438,13.167C211.69,13.167,211.942,13.453,212.194,13.453C212.446,13.453,212.698,13.412,212.951,13.332C213.203,13.252,213.455,12.706,213.707,12.706C213.959,12.706,214.211,12.763,214.463,12.878C214.715,12.993,214.967,13.642,215.219,13.642C215.471,13.642,215.723,13.281,215.975,13.164C216.227,13.047,216.479,12.937,216.731,12.937C216.984,12.937,217.236,13.203,217.488,13.243C217.74,13.282,217.992,13.262,218.244,13.302C218.496,13.341,218.748,13.513,219,13.686">
                                                        </path>
                                                        <g className="recharts-layer"></g>
                                                    </g>
                                                </svg>
                                                <div tabIndex="-1" role="dialog" className="recharts-tooltip-wrapper recharts-tooltip-wrapper-right recharts-tooltip-wrapper-top" style={{transform: 'translate(230px, -6px)', pointerEvents: 'none', visibility: 'hidden', position: 'absolute', top: '0px', left: '0px'}}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex text-center items-center py-3 px-4 md:px-8 text-xs bg-transparent justify-between">
                <div className="hidden md:flex items-center">
                    <a target="_blank" className="h-6 w-6 px-1 py-1.5 text-white/50 hover:text-v2-primary flex items-center" href="https://discord.gg/jup" rel="noopener noreferrer">
                        <svg height="16" width="16" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.209 1.01575C13.1844 0.545603 12.0856 0.19922 10.9368 0.000832211C10.9159 -0.00299661 10.895 0.00657182 10.8842 0.0257091C10.7429 0.277042 10.5864 0.604926 10.4768 0.862641C9.24113 0.677653 8.01183 0.677653 6.80153 0.862641C6.6919 0.599197 6.52969 0.277042 6.38774 0.0257091C6.37697 0.00721034 6.35607 -0.0023581 6.33515 0.000832211C5.18695 0.198586 4.08819 0.544969 3.06292 1.01575C3.05404 1.01957 3.04644 1.02596 3.04139 1.03425C0.957261 4.14789 0.386331 7.185 0.66641 10.1845C0.667677 10.1991 0.675915 10.2132 0.687321 10.2221C2.06237 11.2319 3.39434 11.8449 4.70157 12.2513C4.72249 12.2577 4.74466 12.25 4.75797 12.2328C5.0672 11.8105 5.34285 11.3652 5.57919 10.897C5.59313 10.8696 5.57982 10.837 5.55131 10.8262C5.11409 10.6603 4.69776 10.4581 4.29729 10.2285C4.26561 10.21 4.26308 10.1647 4.29222 10.143C4.37649 10.0798 4.46079 10.0141 4.54126 9.94777C4.55582 9.93566 4.57611 9.9331 4.59322 9.94075C7.22418 11.142 10.0725 11.142 12.6724 9.94075C12.6895 9.93247 12.7098 9.93502 12.725 9.94714C12.8055 10.0135 12.8898 10.0798 12.9747 10.143C13.0038 10.1647 13.0019 10.21 12.9702 10.2285C12.5698 10.4626 12.1534 10.6603 11.7156 10.8255C11.6871 10.8364 11.6744 10.8696 11.6883 10.897C11.9298 11.3646 12.2054 11.8098 12.5089 12.2321C12.5216 12.25 12.5444 12.2577 12.5653 12.2513C13.8789 11.8449 15.2109 11.2319 16.5859 10.2221C16.5979 10.2132 16.6056 10.1998 16.6068 10.1851C16.942 6.71739 16.0454 3.70518 14.2299 1.03488C14.2255 1.02596 14.2179 1.01957 14.209 1.01575ZM5.97208 8.3581C5.17998 8.3581 4.52731 7.63089 4.52731 6.73781C4.52731 5.84473 5.16732 5.11752 5.97208 5.11752C6.78315 5.11752 7.4295 5.85111 7.41682 6.73781C7.41682 7.63089 6.77681 8.3581 5.97208 8.3581ZM11.3138 8.3581C10.5218 8.3581 9.8691 7.63089 9.8691 6.73781C9.8691 5.84473 10.5091 5.11752 11.3138 5.11752C12.1249 5.11752 12.7713 5.85111 12.7586 6.73781C12.7586 7.63089 12.1249 8.3581 11.3138 8.3581Z" fill="currentColor"></path>
                        </svg>
                    </a>
                    <a target="_blank" className="!ml-3 h-6 w-6 px-1 py-1.5 text-white/50 hover:text-v2-primary flex items-center" href="https://twitter.com/JupiterExchange" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="12" height="12">
                            <g>
                                <path fill="currentColor" d="M14.258 10.152L23.176 0h-2.113l-7.747 8.813L7.133 0H0l9.352 13.328L0 23.973h2.113l8.176-9.309 6.531 9.309h7.133zm-2.895 3.293l-.949-1.328L2.875 1.56h3.246l6.086 8.523.945 1.328 7.91 11.078h-3.246zm0 0">
                                </path>
                            </g>
                        </svg>
                    </a>
                    <a target="_blank" className="!ml-2 h-6 w-6 px-1 py-1.5 text-white/50 hover:text-v2-primary flex items-center" href="https://blog.jup.ag/" rel="">
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 18">
                            <path d="M14.8333 17.3333H3.16663C2.50358 17.3333 1.8677 17.0699 1.39886 16.6011C0.930018 16.1322 0.666626 15.4963 0.666626 14.8333V1.49996C0.666626 1.27895 0.754423 1.06698 0.910704 0.910704C1.06698 0.754423 1.27895 0.666626 1.49996 0.666626H13.1666C13.3876 0.666626 13.5996 0.754423 13.7559 0.910704C13.9122 1.06698 14 1.27895 14 1.49996V7.33329H17.3333V14.8333C17.3333 15.4963 17.0699 16.1322 16.6011 16.6011C16.1322 17.0699 15.4963 17.3333 14.8333 17.3333ZM14 8.99996V14.8333C14 15.0543 14.0878 15.2663 14.244 15.4225C14.4003 15.5788 14.6123 15.6666 14.8333 15.6666C15.0543 15.6666 15.2663 15.5788 15.4225 15.4225C15.5788 15.2663 15.6666 15.0543 15.6666 14.8333V8.99996H14ZM3.16663 3.99996V8.99996H8.16663V3.99996H3.16663ZM3.16663 9.83329V11.5H11.5V9.83329H3.16663ZM3.16663 12.3333V14H11.5V12.3333H3.16663ZM4.83329 5.66663H6.49996V7.33329H4.83329V5.66663Z" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
                <div className="flex"></div>
                <div>
                    <div className="flex flex-col space-y-3 items-end">
                        <button className="flex items-center space-x-2 text-white/50 hover:text-v2-primary cursor-pointer">
                            <svg height="14" width="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.855036 13.4987L2.91504 11.4387C3.29067 11.0643 3.7994 10.8537 4.33004 10.8537H11.0001C11.7958 10.8531 12.5583 10.5368 13.1208 9.97431C13.6833 9.41181 13.9995 8.64932 14.0001 7.85367V3.35367C14.0001 2.55804 13.6845 1.79492 13.1214 1.23239C12.5589 0.669894 11.7958 0.353638 11.0001 0.353638H3.00011C2.20448 0.353638 1.44136 0.669894 0.878828 1.23239C0.315708 1.79489 7.62939e-05 2.55802 7.62939e-05 3.35367V13.1437C7.62939e-05 13.3462 0.122575 13.5287 0.309452 13.6062C0.496332 13.6844 0.711276 13.6418 0.855036 13.4987ZM4.26496 4.06364C4.40683 3.63738 4.72558 3.29301 5.13997 3.11865C5.18497 3.09865 5.22996 3.07865 5.27496 3.06365V3.06427C5.98997 2.85365 6.74871 3.21865 7.03 3.90864L7.15 4.18864V4.18926C7.20688 4.31989 7.35876 4.38051 7.49001 4.32426L7.76501 4.20426C8.44439 3.90239 9.24252 4.15801 9.62005 4.79863C9.64005 4.84363 9.66505 4.88863 9.68505 4.93363C9.86193 5.34738 9.85318 5.81738 9.66005 6.22426C9.48569 6.5855 9.18255 6.86925 8.81005 7.01862L6.05997 8.19862C5.9581 8.243 5.84247 8.24425 5.73935 8.203C5.63622 8.16175 5.55372 8.08112 5.50997 7.97863L4.33496 5.22855C4.16997 4.86229 4.14496 4.44801 4.26496 4.06364Z" fill="currentColor"></path>
                            </svg>
                            <span>Feedback</span>
                        </button>
                    </div>
                </div>
            </footer>
        </div>
  </div>
  );
  
}

export default SelectWallet;
