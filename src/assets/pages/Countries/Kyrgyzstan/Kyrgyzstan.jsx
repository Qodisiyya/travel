import React from "react";
import "./kyrgyzstan.css";
import { Link } from "react-router-dom";

export default function Kyrgyzstan() {
  return (
    <section className="kyrgyzstan">
      <div className="container">
        <div className="kg__wrapper">
          <div className="kg__title">
            <h1>Quyidagi shaharlardan birini tanlang</h1>
          </div>
          <div className="cities__category">
            <Link to="/chuy"><button>Chuy</button></Link>
            <Link to="/osh"><button>Osh</button></Link>
            <Link to="/talas"><button>Talas</button></Link>
            <Link to="/issiqKo'l"><button>Issiq-Ko'l</button></Link>
            <Link to="/jalalAbad"><button>Jalal-Abad</button></Link>
            <Link to="/norin"><button>Norin</button></Link>
            <Link to="/batken"><button>Batken</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
