"use client";
import "../styles/globals.css";
import Slider from "../components/Slider";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [balance, setBalance] = useState(0);
  const router = useRouter();

useEffect(() => {
  const saved = localStorage.getItem("balance");
  if (saved) setBalance(Number(saved));
}, []);
  
  const plans = [
  { name: "VIP1", price: "$10.00 USDT", period: "60 days", daily: "$1", total: "$60", img: "/plans/VIP.png" },
  { name: "VIP2", price: "$25.00 USDT", period: "60 days", daily: "$1.75", total: "$105", img: "/plans/VIP.png" },
  { name: "VIP3", price: "$35.00 USDT", period: "60 days", daily: "$2.5", total: "$150", img: "/plans/VIP.png" },
  { name: "VIP4", price: "$45.00 USDT", period: "60 days", daily: "$3.5", total: "$210", img: "/plans/VIP.png" },
  { name: "VIP5", price: "$60.00 USDT", period: "60 days", daily: "$5", total: "$300", img: "/plans/VIP.png" },
  { name: "VIP6", price: "$80.00 USDT", period: "90 days", daily: "$6.5", total: "$585", img: "/plans/VIP.png" },
  { name: "VIP7", price: "$100.00 USDT", period: "90 days", daily: "$8", total: "$720", img: "/plans/VIP.png" },
  { name: "VIP8", price: "$140.00 USDT", period: "90 days", daily: "$10", total: "$900", img: "/plans/VIP.png" },
  { name: "VIP9", price: "$200.00 USDT", period: "90 days", daily: "$15", total: "$1,350", img: "/plans/VIP.png" },
  { name: "VIP10", price: "$500.00 USDT", period: "90 days", daily: "$25", total: "$2,250", img: "/plans/VIP.png" }
];

  return (
    <div className="page">

      {/* HEADER */}
      <div className="header">
  <div className="logo-wrap">
    <img src="/logo.png" alt="Axum Power" />
    <span>Axum Power</span>
  </div>

  <div className="lang">English ▾</div>
</div>

<Slider />

{/* BALANCE CARD */}
<div className="balance">
  <div className="balance-top">
    <span>Total Balance</span>
    <span className="amount">0.00 USDT</span>
  </div>

  <div className="balance-actions">
  <button
    className="deposit"
    onClick={() => router.push("/deposit")}
  >
    Deposit
  </button>

  <button
    className="withdraw"
    onClick={() => router.push("/withdraw")}
  >
    Withdraw
  </button>
</div>
</div>

      {/* MAIN CONTENT */}
      <div className="container">
        {plans.map((plan, i) => (
  <div key={i} className="card">

    <div className="badge">👑 {plan.name}</div>

    <div className="content">

      {/* IMAGE */}
      <img
        src="/VIP.png"
        alt={plan.name}
        className="image"
        loading="lazy"
      />

      {/* INFO */}
      <div className="info">
        <div className="row">
          <span>📅 Period</span>
          <span>{plan.period}</span>
        </div>

        <div className="row">
          <span>💰 Daily Earnings</span>
          <span className="green">{plan.daily}</span>
        </div>

        <div className="row">
          <span>📈 Total Return</span>
          <span className="green">{plan.total}</span>
        </div>
      </div>

    </div>

    {/* ✅ FOOTER MUST BE INSIDE CARD */}
    <div className="footer">
      <div className="footer-inner">
        <div className="price">{plan.price}</div>
        <div className="btn">Unlock Now</div>
      </div>
    </div>

  </div>
))}
      </div>

    </div>
  );
                    }
