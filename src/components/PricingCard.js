import { Link } from "react-router-dom"
import "./PricingCardStyle.css"


import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3> - Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</ p>
                <p>- 3 Days -</p>
                <p>- 3 pages -</p>
                <p>- Featurred -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

                <div className="card">
                <h3> - Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</ p>
                <p>- 4 Days -</p>
                <p>- 6 pages -</p>
                <p>- Featurred -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className="btn">
                    PURCHASE NOW
                </Link>
            </div>

                <div className="card">
                <h3> - Business -</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</ p>
                <p>- 5 Days -</p>
                <p>- 8 pages -</p>
                <p>- Featurred -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact"  className="btn">
                    PURCHASE NOW
                </Link>

            </div>

        </div>
        
    </div>
  )
}

export default PricingCard