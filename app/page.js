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
  ];

  return (
    <div>
      <Header />

      <div className="container">
        {plans.map((plan, i) => (
          <div key={i} className="card">

            {/* BADGE */}
            <div className="badge">{plan.name}</div>

            {/* TOP */}
            <div className="top">

              {/* IMAGE LEFT */}
              <div className="imageBox">
                <img src={plan.img} alt="" />
              </div>

              {/* INFO RIGHT */}
              <div className="info">
                <p>Daily Tasks <span>{plan.task}</span></p>
                <p>Per Task Profit <span>{plan.perProfit}</span></p>
                <p>Daily Profit <span className="green">{plan.daily}</span></p>
                <p>Total Profit <span className="green">{plan.total}</span></p>
              </div>

            </div>

            {/* FOOTER */}
            <div className="footer">
              <div className="price">{plan.price}</div>
              <button>Unlock Now</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
                }
