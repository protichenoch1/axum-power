"use client";
import "../styles/globals.css";
import Slider from "../components/Slider";

export default function Home() {
  const plans = [
  { name: "VIP1", price: "$10", period: "60 days", daily: "$1", total: "$60" },
  { name: "VIP2", price: "$25", period: "60 days", daily: "$1.75", total: "$105" },
  { name: "VIP3", price: "$35", period: "60 days", daily: "$2.5", total: "$150" },
  { name: "VIP4", price: "$45", period: "60 days", daily: "$3.5", total: "$210" },
  { name: "VIP5", price: "$60", period: "60 days", daily: "$5", total: "$300" },
  { name: "VIP6", price: "$80", period: "90 days", daily: "$6.5", total: "$585" },
  { name: "VIP7", price: "$100", period: "90 days", daily: "$8", total: "$720" },
  { name: "VIP8", price: "$140", period: "90 days", daily: "$10", total: "$900" },
  { name: "VIP9", price: "$200", period: "90 days", daily: "$15", total: "$1,350" },
  { name: "VIP10", price: "$500", period: "90 days", daily: "$25", total: "$2,250" }
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
    <button className="deposit">Deposit</button>
    <button className="withdraw">Withdraw</button>
  </div>
</div>

      {/* MAIN CONTENT */}
      <div className="container">
        {plans.map((plan, i) => (
<div key={i} className="card">

  <div className="badge">👑 {plan.name}</div>

  <div className="content">

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

  <div className="footer">
    <div className="footer-inner">
      <div className="price">{plan.price}</div>
      <div className="btn">Unlock Now</div>
    </div>
  </div>

</div>

          </div>
        ))}
      </div>

    </div>
  );
                    }
