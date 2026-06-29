"use client";
import { useState, useEffect } from "react";

export default function DepositPage() {
  const [method, setMethod] = useState("usdt");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("balance");
    if (saved) setBalance(Number(saved));
  }, []);

  const handleDeposit = () => {
    if (!amount || amount < 10) {
      return alert("Minimum deposit is $10");
    }

    alert("Waiting for blockchain confirmation...");
  };

  return (
    <div className="container">

      {/* HEADER */}
      <h2 className="title">Deposit</h2>

      {/* BALANCE */}
      <div className="balance">
        <div className="balance-top">
          <span>Total Balance</span>
          <span className="amount">{balance.toFixed(2)} USDT</span>
        </div>
      </div>

      {/* METHODS */}
      <div className="methods">
        <div
          className={`method ${method === "usdt" ? "active" : ""}`}
          onClick={() => setMethod("usdt")}
        >
          💰 USDT (TRC20)
        </div>

        <div
          className={`method ${method === "btc" ? "active" : ""}`}
          onClick={() => setMethod("btc")}
        >
          ₿ Bitcoin
        </div>

        <div
          className={`method ${method === "eth" ? "active" : ""}`}
          onClick={() => setMethod("eth")}
        >
          Ξ Ethereum
        </div>
      </div>

      {/* DEPOSIT CARD */}
      <div className="card">

        <div className="row">
          <span>Deposit Address</span>
        </div>

        {/* QR */}
        <div className="qr-box">
          <img src="/qr.png" alt="QR Code" />
        </div>

        {/* ADDRESS */}
        <div className="address">
          {method === "usdt" && "TXYZ1234567890ABCDEF1234567890XYZ"}
          {method === "btc" && "bc1qexampleaddress123456"}
          {method === "eth" && "0xExampleAddress123456789"}
        </div>

        {/* COPY */}
        <button
          className="copy-btn"
          onClick={() => {
            const address =
              method === "usdt"
                ? "TXYZ1234567890ABCDEF1234567890XYZ"
                : method === "btc"
                ? "bc1qexampleaddress123456"
                : "0xExampleAddress123456789";

            navigator.clipboard.writeText(address);
            alert("Address copied");
          }}
        >
          Copy Address
        </button>

        <small className="note">
          Send only {method.toUpperCase()} to this address. Minimum deposit $10.
        </small>
      </div>

      {/* AMOUNT */}
      <div className="card">
        <div className="row">
          <span>Enter Amount</span>
        </div>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* BUTTON */}
      <button className="deposit-btn" onClick={handleDeposit}>
        I Have Paid
      </button>

    </div>
  );
        }
