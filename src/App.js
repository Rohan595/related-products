import React from "react";
import "./App.css";
import Carousel from "react-elastic-carousel";
import Product from "./Assets/img/Endurance-Capsules-_-Dia-Free-Juice-Combo.png";
import axios from "axios";

function App() {
  // eslint-disable-next-line
  const [products, setProducts] = React.useState([]);
  const [token, setToken] = React.useState("");
  const XAuthToken = "8c6zdydl36ty364xwcsvlpb9ztlfi2g";

  React.useEffect(() => {
    let timeStamp = new Date().getTime();
    timeStamp = new Date(timeStamp + 6 * 60 * 60 * 1000).getTime();
    console.log(timeStamp);
    axios(
      "https://api.bigcommerce.com/stores/2qk49wb9fq/v3/storefront/api-token",
      {
        method: "POST",
        headers: {
          "X-Auth-Token": XAuthToken,
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: {
          channel_id: 1,
          expires_at: timeStamp,
        },
      }
    ).then((res) => {
      console.log(res);
    });
    // eslint-disable-next-line
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 2.1 },
    { width: 360, itemsToShow: 2.1 },
    { width: 390, itemsToShow: 2.2 },
    { width: 400, itemsToShow: 2.3 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div classame="App">
      <div className="related-products">
        <h1 className="related-products-head ">
          PEOPLE <span className="bold">ALSO BUY</span>
        </h1>
        <p className="related-products-head-2">
          To enhance the efficiency of achieving the goal
        </p>
        <ul className="product-lists">
          <Carousel itemsToShow={3} breakPoints={breakPoints}>
            <li className="product-card">
              <div className="product-image">
                <div className="product-ratings">
                  <img className="ratings" src="" alt="" />
                  <p className="rating">
                    4/5<span className="italic">()</span>
                  </p>
                </div>
                <p className="offers">23% OFF</p>
                <img className="image" src={Product} alt="" />
              </div>
              <h1 className="product-name">
                Dia Free Juice & Aloe Garcinia Juice - Diabetes & Weight Care
                Combo
              </h1>
              <div className="product-buy">
                <h2 className="price">
                  <i class="fa fa-inr" aria-hidden="true"></i> 995.00
                </h2>
                <button className="buy">
                  ADD<sup>+</sup>
                </button>
              </div>
            </li>
            <li className="product-card">
              <div className="product-image">
                <div className="product-ratings">
                  <img className="ratings" src="" alt="" />
                  <p className="rating">
                    4/5<span className="italic">()</span>
                  </p>
                </div>
                <p className="offers">23% OFF</p>
                <img className="image" src={Product} alt="" />
              </div>
              <h1 className="product-name">
                Dia Free Juice & Aloe Garcinia Juice - Diabetes & Weight Care
                Combo
              </h1>
              <div className="product-buy">
                <h2 className="price">
                  <i class="fa fa-inr" aria-hidden="true"></i> 995.00
                </h2>
                <button className="buy">
                  ADD<sup>+</sup>
                </button>
              </div>
            </li>
            <li className="product-card">
              <div className="product-image">
                <div className="product-ratings">
                  <img className="ratings" src="" alt="" />
                  <p className="rating">
                    4/5<span className="italic">()</span>
                  </p>
                </div>
                <p className="offers">23% OFF</p>
                <img className="image" src={Product} alt="" />
              </div>
              <h1 className="product-name">
                Dia Free Juice & Aloe Garcinia Juice - Diabetes & Weight Care
                Combo
              </h1>
              <div className="product-buy">
                <h2 className="price">
                  <i class="fa fa-inr" aria-hidden="true"></i> 995.00
                </h2>
                <button className="buy">
                  ADD<sup>+</sup>
                </button>
              </div>
            </li>
          </Carousel>
        </ul>
      </div>
    </div>
  );
}

export default App;
