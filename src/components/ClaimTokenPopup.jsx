import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setLocalStorage, getLocalStorage } from "./../utils/useLocalStorage";

export default function ClaimTokenPopup({ onClose }) {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(900); // 10 phút = 600 giây
  const STORAGE_KEY = "claim_countdown_start";

  useEffect(() => {
    // Lấy timestamp lưu trong localStorage (nếu có)
    const startTimestamp = getLocalStorage(STORAGE_KEY);
    const now = Date.now();

    if (startTimestamp) {
      const elapsed = Math.floor((now - startTimestamp) / 1000);
      const remaining = 600 - elapsed;
      setTimeLeft(remaining > 0 ? remaining : 0);
    } else {
      // Lưu thời gian bắt đầu nếu chưa có
      setLocalStorage(STORAGE_KEY, now);
    }

    // Cập nhật countdown mỗi giây
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/select-wallet");
  };

  // format hiển thị mm:ss
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50 animate-fadeIn">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,255,163,0.1),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(0,153,255,0.12),transparent_70%)]" />

      <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-[#00ffa3] via-[#00b8ff] to-[#0066ff] animate-gradientBorder shadow-[0_0_25px_rgba(0,255,163,0.25)]">
        <div className="relative bg-[#0b0f1a] rounded-2xl w-[360px] p-6 text-center text-gray-100 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            aria-label="Close popup"
          >
            ✕
          </button>

          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] via-[#00b8ff] to-[#0066ff] mb-3 drop-shadow-[0_0_20px_rgba(0,255,200,0.6)] animate-fadeIn">
            🎉 Congratulations!
          </h1>

          <h2 className="text-2xl font-semibold text-[#9ef6c5] mb-2">
            You received
          </h2>

          <p className="text-sm text-gray-400 mb-5">
            Total Allocation for{" "}
            <span className="text-gray-300">GfE5C...XF56u</span>
          </p>
          {/* Số lượng token + icon Jupiter */}
          <div className="flex justify-center items-center mb-6">
            <span className="text-6xl font-extrabold text-[#b2ff5a] drop-shadow-[0_0_20px_rgba(178,255,90,0.5)] mr-3">
              650
            </span>
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ffa3] to-[#00b8ff] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,200,0.4)] overflow-hidden">
              <img
                src="https://wsrv.nl/?w=32&h=32&url=https%3A%2F%2Fstatic.jup.ag%2Fjup%2Ficon.png&dpr=2&quality=80"
                alt="Jupiter logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
          </div>

          <button
            onClick={handleClick}
            disabled={timeLeft === 0}
            className={`w-full py-3 mb-3 rounded-xl font-semibold shadow-[0_0_15px_rgba(0,255,200,0.3)] transition-all ${
              timeLeft === 0
                ? "bg-gray-600 cursor-not-allowed text-gray-300"
                : "bg-gradient-to-r from-[#00ffa3] via-[#00b8ff] to-[#0066ff] text-[#0b0f1a] hover:opacity-90"
            }`}
          >
            Claim and Stake
          </button>

          <button
            onClick={handleClick}
            disabled={timeLeft === 0}
            className={`w-full py-3 rounded-xl border transition-all ${
              timeLeft === 0
                ? "bg-[#1a2333] border-slate-800 text-gray-500 cursor-not-allowed"
                : "bg-[#1a2333] text-gray-300 border-slate-700 hover:bg-[#232f44]"
            }`}
          >
            Claim only
          </button>

           {/* Countdown */}
          <div className="mb-4 text-lg font-semibold text-[#ffd50f]">
            ⏳ Time left: {minutes}:{seconds}
          </div>

          <div className="mt-6 text-xs text-gray-400 leading-relaxed">
            ✨{" "}
            <span className="font-medium text-gray-300">
              Why Claim and Stake?
            </span>
            <br />
            Participating in the Jupiverse is good for you — your future self
            will thank you.
          </div>
        </div>
      </div>
    </div>
  );
}
