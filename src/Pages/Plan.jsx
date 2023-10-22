
import "./plan.scss"
import { useEffect, useState } from 'react'

const Plan = () => {

  const [plan, setPlan] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/subscriptions/")
      .then((res) => res.json())
      .then((data) => setPlan(data))
      .catch((error) => console.error('Error fetching food data:', error));
  }, []);
  return (
    <section>
      <div className="links-container">
        <a href>
          <i className="bi bi-check-circle-fill"></i>
          SIGNUP
        </a>
        <a href>
          <i className="bi bi-2-circle-fill"></i>
          PLANS
        </a>
        <a href>
          <i className="bi bi-3-circle"></i>MENU
        </a>
        <a href>
          <i className="bi bi-4-circle"></i>
          CHECKOUT
        </a>
      </div>

      <main className="main-container">
        <h1>Choose your Plan</h1>
        <p>
          The more you get, the more you save!
          Update your plan size, skip weeks or
          cancel any time.
        </p>
        <div className="row">
          {plan.map((plan, i) => (
            <div className="col-lg-6" key={i}>
              <div className="card">
                <div className="card-body">
                  <h5 className="price-text">
                    {plan.items_per_week} Items Per Week
                  </h5>
                  <p>
                    <strong> Rs.{plan.cost_per_item} </strong>/ item
                    <i className=" bi bi-arrow-right-circle"></i>
                  </p>
                </div>
              </div>
            </div>))}
        </div>
      </main>
    </section>
  )
}

export default Plan
