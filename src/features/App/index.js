import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./style.scss";
import nike from "./nike.png";
import checkIcon from "./check.png";
import minus from "./minus.png";
import plus from "./plus.png";
import trash from "./trash.png";

function App() {
  const data = [
    {
      id: 1,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
      name: "Nike Air Zoom Pegasus 36",
      description:
        "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
      price: 108.97,
      color: "#e1e7ed",
      inCart: false,
      count: 1,
    },
    {
      id: 2,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png",
      name: "Nike Air Zoom Pegasus 36 Shield",
      description:
        "The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.",
      price: 89.97,
      color: "#4D317F",
      inCart: true,
      count: 1,
    },
    {
      id: 3,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
      name: "Nike CruzrOne",
      description:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: 100.97,
      color: "#E8D026",
      inCart: true,
      count: 1,
    },
    {
      id: 4,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png",
      name: "Nike Epic React Flyknit 2",
      description:
        "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper conforms to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
      price: 89.97,
      color: "#FD584A",
      inCart: true,
      count: 1,
    },
    {
      id: 5,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/odyssey-react-flyknit-2-mens-running-shoe-T3VG7N-removebg-preview.png",
      name: "Nike Odyssey React Flyknit 2",
      description:
        "The Nike Odyssey React Flyknit 2 provides a strategic combination of lightweight Flyknit construction and synthetic material for support. Underfoot, Nike React cushioning delivers a soft, springy ride for a route that begs to be crushed.",
      price: 71.97,
      color: "#D4D7D6",
      inCart: true,
      count: 1,
    },
    {
      id: 7,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-miler-mens-running-shoe-DgF6nr-removebg-preview.png",
      name: "Nike React Miler",
      description:
        "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel.",
      price: 130,
      color: "#22AFDC",
      inCart: true,
      count: 1,
    },
    {
      id: 6,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-infinity-run-flyknit-mens-running-shoe-RQ484B__2_-removebg-preview.png",
      name: "Nike React Infinity Run Flyknit",
      description:
        "A pioneer in the running shoe frontier honors the original pioneer of running culture with the Nike React Infinity Run Flyknit. Blue Ribbon Track Club-inspired details pay homage to the haven that was created before running was even popular. This running shoe is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.",
      price: 160,
      color: "#F2F5F4",
      inCart: true,
      count: 1,
    },
    {
      id: 8,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/renew-ride-mens-running-shoe-JkhdfR-removebg-preview.png",
      name: "Nike Renew Ride",
      description:
        "The Nike Renew Ride helps keep the committed runner moving with plush cushioning. Firm support at the outsole helps you maintain stability no matter the distance.",
      price: 60.97,
      color: "#B50320",
      inCart: true,
      count: 1,
    },
    {
      id: 9,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/vaporfly-4-flyknit-running-shoe-v7G3FB-removebg-preview.png",
      name: "Nike Vaporfly 4% Flyknit",
      description:
        "Built to meet the exacting needs of world-class marathoners, Nike Vaporfly 4% Flyknit is designed for record-breaking speed. The Flyknit upper delivers breathable support, while the responsive foam and full-length plate provide incredible energy return for all 26.2.",
      price: 187.97,
      color: "#3569A1",
      inCart: true,
      count: 1,
    },
    {
      id: 10,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/zoom-fly-3-premium-mens-running-shoe-XhzpPH-removebg-preview.png",
      name: "Nike Zoom Fly 3 Premium",
      description:
        "Inspired by the Vaporfly, the Nike Zoom Fly 3 Premium gives distance runners race-day comfort and durability. The power of a carbon fiber plate keeps you in the running mile after mile.",
      price: 160,
      color: "#54D4C9",
      inCart: false,
      count: 1,
    },
  ];

  const dataInCart = [
    {
      id: 2,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png",
      name: "Nike Air Zoom Pegasus 36 Shield",
      description:
        "The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.",
      price: 89.97,
      color: "#4D317F",
      inCart: true,
      count: 1,
    },
    {
      id: 3,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
      name: "Nike CruzrOne",
      description:
        "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
      price: 100.97,
      color: "#E8D026",
      inCart: true,
      count: 1,
    },
    {
      id: 4,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png",
      name: "Nike Epic React Flyknit 2",
      description:
        "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper conforms to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
      price: 89.97,
      color: "#FD584A",
      inCart: true,
      count: 1,
    },
    {
      id: 5,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/odyssey-react-flyknit-2-mens-running-shoe-T3VG7N-removebg-preview.png",
      name: "Nike Odyssey React Flyknit 2",
      description:
        "The Nike Odyssey React Flyknit 2 provides a strategic combination of lightweight Flyknit construction and synthetic material for support. Underfoot, Nike React cushioning delivers a soft, springy ride for a route that begs to be crushed.",
      price: 71.97,
      color: "#D4D7D6",
      inCart: true,
      count: 1,
    },
    {
      id: 7,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-miler-mens-running-shoe-DgF6nr-removebg-preview.png",
      name: "Nike React Miler",
      description:
        "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel.",
      price: 130,
      color: "#22AFDC",
      inCart: true,
      count: 1,
    },
    {
      id: 6,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-infinity-run-flyknit-mens-running-shoe-RQ484B__2_-removebg-preview.png",
      name: "Nike React Infinity Run Flyknit",
      description:
        "A pioneer in the running shoe frontier honors the original pioneer of running culture with the Nike React Infinity Run Flyknit. Blue Ribbon Track Club-inspired details pay homage to the haven that was created before running was even popular. This running shoe is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.",
      price: 160,
      color: "#F2F5F4",
      inCart: true,
      count: 1,
    },
    {
      id: 8,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/renew-ride-mens-running-shoe-JkhdfR-removebg-preview.png",
      name: "Nike Renew Ride",
      description:
        "The Nike Renew Ride helps keep the committed runner moving with plush cushioning. Firm support at the outsole helps you maintain stability no matter the distance.",
      price: 60.97,
      color: "#B50320",
      inCart: true,
      count: 1,
    },
    {
      id: 9,
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/vaporfly-4-flyknit-running-shoe-v7G3FB-removebg-preview.png",
      name: "Nike Vaporfly 4% Flyknit",
      description:
        "Built to meet the exacting needs of world-class marathoners, Nike Vaporfly 4% Flyknit is designed for record-breaking speed. The Flyknit upper delivers breathable support, while the responsive foam and full-length plate provide incredible energy return for all 26.2.",
      price: 187.97,
      color: "#3569A1",
      inCart: true,
      count: 1,
    },
  ];

  const header = (image, color) => {
    return <img alt="Card" src={image} style={{ background: `${color}` }} />;
  };

  const footer = (price, inCart) => (
    <>
      <div className="flex footer-style-card">
        <h2>${price}</h2>
        {!inCart ? (
          <Button label="Add to cart" className="btn-add-to-cart" />
        ) : (
          <Button
            icon={
              <img style={{ height: "40px" }} src={checkIcon} alt="check" />
            }
            className="already-btn-add-to-cart"
          />
        )}
      </div>
    </>
  );

  return (
    <div className="background">
      <div className="hide-scrollbar-card">
        <img className="nike-img" src={nike} alt="nike" />
        <h1>Our products</h1>
        <div className="out-card">
          {data?.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                title={product.name}
                footer={() => footer(product.price, product.inCart)}
                header={() => header(product.image, product.color, product)}
                className="w-25rem custom-card"
              >
                <p className="m-0">{product.description}</p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* seccond card */}
      <div className="hide-scrollbar-card">
        <img className="nike-img" src={nike} alt="nike" />
        <div className="flex justify-content-between">
          <h1>Your cart</h1>
          <h1>$102.01</h1>
        </div>
        <div className="out-card">
          {dataInCart?.length === 0 && <span>Your cart is empty</span>}
          {dataInCart?.map((product) => {
            return (
              <div key={product.id} id={product.id} className="item-in-cart">
                <div
                  className="circle-cart"
                  style={{ background: `${product.color}` }}
                >
                  <img src={product.image} alt={product.id} />
                </div>
                <div className="item-in-cart-content">
                  <h3>{product.name}</h3>
                  <h2>${product.price}</h2>
                  <div className="button-box">
                    {/*calculate button*/}
                    <div className="button-box-start">
                      <Button
                        icon={
                          <img
                            style={{ height: "15px", width: "15px" }}
                            src={minus}
                            alt="minus"
                          />
                        }
                        className="btn-calculate"
                      />
                      <span
                        style={{
                          fontSize: "20px",
                          marginLeft: "10px",
                          marginRight: "10px",
                        }}
                      >
                        {product.count}
                      </span>
                      <Button
                        icon={
                          <img
                            style={{ height: "15px", width: "15px" }}
                            src={plus}
                            alt="plus"
                          />
                        }
                        className="btn-calculate"
                      />
                    </div>
                    {/*trash button*/}
                    <div>
                      <Button
                        icon={
                          <img
                            style={{ height: "17px", width: "17px" }}
                            src={trash}
                            alt="trash"
                          />
                        }
                        className="btn-trash"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
