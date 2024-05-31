import React from "react";
import "./info.css";

export default function InfoProps({ img, title, suptitle, btntitle, btnsuptitle, reverse }) {
  return (
    <div>
      <section>
        <div className="container">
          <div className={`Info__wrapper ${reverse ? "reverse" : ""}`}>
            <div className="Info__left">
              <img data-aos="zoom-in" src={img} alt="" />
            </div>
            <div data-aos="fade-left" className="Info__right">
              <h2>{title}</h2>
              <p>{suptitle}</p>
              <button className="btn">
                <span className="btn-text-one">{btntitle}</span>
                <span className="btn-text-two">{btnsuptitle}</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
