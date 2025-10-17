import React, { useState,useEffect} from "react";
import '../HomePage/index.scss';
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import bgImage from "../../assets/jupiter-bg.webp";
import DeFiOrbiter from '../../components/DeFiOrbiter';
import OnboardingInfo from '../../components/OnboardingInfo';
import {
  Wallet,
  Zap,
  BarChart2,
  LineChart,
  Shield,
  Layers,
  TrendingUp,
  DollarSign,
  Database,
} from "lucide-react";
const HomePage = () => {
  
const [showMain, setShowMain] = useState(false);
const icons = [
  { label: "Pro", icon: BarChart2, color: "text-[#A4FF9E]", x: -110, y: -100 },
  { label: "DRiP", icon: Database, color: "text-[#7FFFD4]", x: 110, y: -100 },
  { label: "Ultra", icon: Zap, color: "text-[#00F5D4]", x: 0, y: -60 },
  { label: "Studio", icon: Layers, color: "text-[#9FE3FF]", x: -120, y: 0 },
  { label: "Portfolio", icon: Wallet, color: "text-[#5CE1E6]", x: 120, y: 0 },
  { label: "Lend", icon: DollarSign, color: "text-[#8EF9F3]", x: -90, y: 90 },
  { label: "Perps", icon: TrendingUp, color: "text-[#B4FFB0]", x: 90, y: 90 },
  { label: "Stake", icon: Shield, color: "text-[#B2FFF6]", x: 0, y: 120 },
];


  const [open, setOpen] = useState(false);
   // Sau 2 giây thì chuyển sang màn hình chính
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMain(true);
    }, 2000); // thời gian chuyển (ms)
    return () => clearTimeout(timer);
  }, []);
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
  // return(

  //       <div className="relative h-screen w-full max-w-md mx-auto bg-[#081423] overflow-hidden flex flex-col font-sans">
  //       <main className="flex-grow flex flex-col px-6">
  //         <DeFiOrbiter/>
  //         <OnboardingInfo />
  //       </main>
  //       </div>  
  
  
  // );
   return (
        <div className="relative h-screen w-full max-w-md mx-auto bg-[#081423] overflow-hidden flex flex-col font-sans">
      {/* Nếu chưa chuyển thì hiển thị màn 1 */}
      {!showMain ? (
        // ==== MÀN HÌNH 1: Hiệu ứng nền Zoom ====
        <motion.div
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative w-full h-screen flex items-center justify-center"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay đen */}
          <div className="absolute inset-0 bg-black/40"></div>



          {/* Có thể thêm text nhỏ giới thiệu */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-20 text-gray-300 text-sm tracking-wide"
          >
            {/* Loading DeFi Experience... */}
          </motion.p>
        </motion.div>
      ) : (
       <>
        <main className="flex-grow flex flex-col px-6">
           <DeFiOrbiter/>
           <OnboardingInfo />
        </main>
       </>
      )}
    </div>
  );



}

export default HomePage;

