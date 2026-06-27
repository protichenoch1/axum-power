import Header from "../components/Header";

export default function Home() {
  const plans = [
    {
      name: "VIP1",
      price: "10.00 USDT",
      task: 1,
      perProfit: "3.20",
      daily: "3.20 USDT",
      total: "288.00 USDT",
    },
    {
      name: "VIP2",
      price: "50.00 USDT",
      task: 1,
      perProfit: "17.00",
      daily: "17.00 USDT",
      total: "1,530.00 USDT",
    },
  ];

  return (
    <div>
      <Header />

      <div className="container">
        {plans.map((plan, i) => (
          <div key={i} className="card">

            {/* TOP SECTION */}
            <div className="top">
              
              {/* LEFT ICON */}
              <div className="icon">
                ⚡
              </div>

              {/* RIGHT TEXT */}
              <div className="title">
                <div className="badge">{plan.name}</div>
                <p className="priceText">{plan.price}</p>
              </div>

            </div>

            {/* INFO */}
            <div className="info">
              <p>Daily Tasks <span>{plan.task}</span></p>
              <p>Per Task Profit <span>{plan.perProfit}</span></p>
              <p>Daily Profit <span className="green">{plan.daily}</span></p>
              <p>Total Profit <span className="green">{plan.total}</span></p>
            </div>

            {/* FOOTER */}
            <div className="footer">
              <button>Unlock Now</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
    }
