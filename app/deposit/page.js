"use client";

import { useState } from "react";

export default function Deposit() {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("mpesa");

  return (
    <div className="page">

      {/* HEADER */}
      <div className="header">
        <span>Deposit</span>
        <span>💰 Wallet</span>
      </div>

      <div className="container">

        {/* AMOUNT INPUT */}
        <div className="card">
          <div className="row">
            <span>Enter Amount</span>
          </div>

          <input
            type="number"
            placeholder="Minimum $10"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input"
          />
        </div>

        {/* PAYMENT METHODS */}
        <div className="card">
          <div className="row">
            <span>Select Method</span>
          </div>

          <div className="methods">

            <div
              className={`method ${method === "mpesa" ? "active" : ""}`}
              onClick={() => setMethod("mpesa")}
            >
              📱 M-Pesa
            </div>

            <div
              className={`method ${method === "card" ? "active" : ""}`}
              onClick={() => setMethod("card")}
            >
              💳 Card
            </div>

          </div>
        </div>

        {/* SUMMARY */}
        <div className="card">
          <div className="row">
            <span>Amount</span>
            <span>${amount || "0"}</span>
          </div>

          <div className="row">
            <span>Method</span>
            <span>{method.toUpperCase()}</span>
          </div>
        </div>

        {/* BUTTON */}
        <div className="card">
          <button className="deposit-btn">
            Confirm Deposit
          </button>
        </div>

      </div>

    </div>
  );
    }
