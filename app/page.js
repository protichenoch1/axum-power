import "../styles/globals.css";

export default function Home() {
  const plans = [
    {
      name: "VIP1",
      price: "10.00 USDT",
      task: 1,
      perProfit: "3.20",
      daily: "3.20 USDT",
      total: "288.00 USDT",
      img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
    },
    {
      name: "VIP2",
      price: "50.00 USDT",
      task: 1,
      perProfit: "17.00",
      daily: "17.00 USDT",
      total: "1,530.00 USDT",
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7"
    },
    {
      name: "VIP3",
      price: "150.00 USDT",
      task: 1,
      perProfit: "54.00",
      daily: "54.00 USDT",
      total: "4,860.00 USDT",
      img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
    }
  ];

  return (
    <div className="page">

      {/* HEADER */}
      <div className="header">
        <div className="logo">Axum Power</div>
        <div className="lang">English ▾</div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container">
        {plans.map((plan, i) => (
          <div key={i} className="card">

            <div className="badge">👑 {plan.name}</div>

            <div className="content">

              {/* FIX: always include alt + loading */}
              <img
                src={plan.img}
                alt={plan.name}
                className="image"
                loading="lazy"
              />

              <div className="info">

                <div className="row">
                  <span>📋 Daily Tasks</span>
                  <span>{plan.task}</span>
                </div>

                <div className="row">
                  <span>💰 Per-Task Profit</span>
                  <span>{plan.perProfit}</span>
                </div>

                <div className="row">
                  <span>📈 Daily Profit</span>
                  <span className="green">{plan.daily}</span>
                </div>

                <div className="row">
                  <span>💵 Total Profit</span>
                  <span className="green">{plan.total}</span>
                </div>

              </div>
            </div>

            {/* FIX: clean footer */}
            <div className="footer">
              <div className="footer-inner">
                <div className="price">{plan.price}</div>
                <div className="btn">Unlock</div>
              </div>
            </div>

          </div>
        ))}
      </div>

      </div>
  );
                  }
