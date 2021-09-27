import React from "react";
import banner from "./bannerr.jpg";
import "./Home.css";
import Product from "./Product";
import image from "./product.jpg";
import bakal from "./assets/bakal.jpg";
import box from "./assets/box.jpg";
import dori from "./assets/dori.jpg";
import liba from "./assets/liba.jpg";
import flew from "./assets/flew.jpg";

function Home() {
  return (
    <div className="home">
      <img className="home__image" src={banner} alt="" />

      <div className="home__row">
        <Product
          id="12321341"
          title="the Lean StratUp : how inovation is this one"
          image={image}
          price={11.96}
          rating={5}
        />
        <Product
          id="12321341"
          title="the Lean StratUp : how inovation is this one"
          image={bakal}
          price={5}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="the Lean StratUp : how inovation is this one"
          image={box}
          price={6.06}
          rating={5}
        />
        <Product
          id="12321341"
          title="the Lean StratUp : how inovation is this one"
          image={liba}
          price={18.9}
          rating={5}
        />
        <Product
          id="12321341"
          title="the Lean StratUp : how inovation is this one"
          image={dori}
          price={3.5}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="the Lean StratUp : how inovation is this one"
          image={flew}
          price={13.6}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
