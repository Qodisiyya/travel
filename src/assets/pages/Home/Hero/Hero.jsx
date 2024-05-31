import React, {useEffect} from "react";
import "./hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);

  return (
    <section className="home__img1">
      <div className="container">
        <div className="home" data-aos="fade-right">
          <h1>Dunyoni o'zing kashf et!</h1>
          <p>
            We're here to assist you every <br />
            step of the way.
          </p>
          <button className="home__btn">More</button>
        </div>
      </div>
    </section>
  );
}
