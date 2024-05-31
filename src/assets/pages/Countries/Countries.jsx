import React from "react";
import "./countries.css";
import { Link } from "react-router-dom";

export default function Countries() {
  return (
    <section className="countries">
      <div className="container">
        <div className="countries__wrapper">
          <div className="countries__title">
            <h1>Quyidagi davlatlardan birini tanlang</h1>
          </div>
          <div className="countries__category">
            <Link to="/kyrgyzstan">
              <button>Kyrgyzstan</button>
            </Link>
            <Link to="/uzbekistan">
              <button>Uzbekistan</button>
            </Link>
            <button>Kazakhstan</button>
            <button>Tajikistan</button>
            <button>Afghanistan</button>
          </div>
        </div>
      </div>
    </section>
  );
}
