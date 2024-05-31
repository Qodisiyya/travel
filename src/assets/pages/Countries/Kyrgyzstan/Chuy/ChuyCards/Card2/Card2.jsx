import React from "react";
import "./card2.css";
import BoomGorge from "..//..//..//..//..//../images/Boom_Gorge-3-600x400.jpg";
import { Link } from "react-router-dom";
// ID 3
import Konorchek from "..//..//..//..//..//../images/Konorchek-Canyons-1-600x400.png";
// ID 4
import Suusamyr from "..//..//..//..//..//../images/Suusamyr_valey-3-600x400.jpg";
// ID 5
import Shamsi from "..//..//..//..//..//../images/Shamsu.png";
// ID 6
import KelTor from "..//..//..//..//..//../images/Kel-Tor-1-600x400.png";

export const Card2 = () => {
  const faceApi = [
    {
      id3: 3,
      title3: "Konorchek Canyons",
      subtitle3: "Konorchek Canyon is an amazing tourist...",
      img3: Konorchek,
      categpry: "Tabiat manzaralari",

      id4: 4,
      title4: "Suusamyr",
      subtitle4: "Suusamyr is a valley 150 km long and...",
      img4: Suusamyr,
      categpry: "Tabiat manzaralari",

      id5: 5,
      title5: "Shamsi Gorge",
      subtitle5: "The Shamsi Gorge is in the eastern part of...",
      img5: Shamsi,
      categpry: "Tabiat manzaralari",

      id6: 6,
      title6: "Kel-Tor Lake",
      subtitle6: "The Kel-Tor tract is a small branch of...",
      img6: KelTor,
      categpry: "Tabiat manzaralari",
    },
  ];

  return (
    <section>
      <div className="card2__title">
        <h2>Boom Gorge</h2>
      </div>

      <div className="container">
        <div className="card2">
          <div className="card2__left">
            <p>
              Boom darasi Chuy va Issiqkoʻl vodiylarini bogʻlovchi boʻgʻin
              hisoblanadi. Darada Tyan-Shanning eng yirik daryolaridan biri -
              Chu oqadi. Tog'lar orasidagi bu katta va go'zal darani daryo buzib
              tashladi. Boom turli xil landshaftlar bilan ajralib turadi.
              Daraxtlar va butalar bilan qoplangan o'rmonli va yashil yon
              bag'irlari to'satdan qurigan gil kanyonlar bilan almashtiriladi.
              Daraning murakkab relefi ham diqqatga sazovordir: gʻarbiy qismida
              tor va oʻralgan, sharqiy qismida ancha kengayib, keng vodiy hosil
              qiladi. Boom darasi boy tarixga ega. Tarixiy jihatdan bu dovon
              mintaqa uchun katta ahamiyatga ega bo'lgan, chunki u Issiqko'lning
              g'arbiy tomonidagi yagona yo'l edi. Agar bizning kunlarda dara
              bo'ylab sayohat oson bo'lsa, ilgari bu qiyin va xavfli sayohat
              edi. Birinchi yo'l 1878 yilda qurilgan. 70 yildan keyin temir yo'l
              qurilgan, u orqali sayohat baland bo'lgani uchun hayratlanarli.
              Boom darasi har qanday sayyoh uchun qiziqarli bo'ladi. Keng va
              notinch Chu daryosi rafting uchun juda mos keladi. Boom darasidan
              Qoʻnorchek kanyonlari yoki Choʻn-Kemin vodiysiga ham borish
              mumkin. Darada sovet davri va hozirgi davrga oid koʻplab
              yodgorliklar mavjud.
            </p>
            <img src={BoomGorge} alt="" />

            <h2>Boom Gorgega qanday borish mumkin?</h2>
            <hr className="howline" />
            <p>
              Boom darasi Bishkekdan 100 kilometr g‘arbda joylashgan. U erga
              borish jamoat transportida ham, shaxsiy transportda ham qiyin
              emas.
            </p>
            <h2>Boom Gorge xaritada</h2>
            <hr className="mapline" />
            <iframe
            className="chunkMap"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaed3e8f5b01c135aa080e214e3c8249f2ca823362242b56de57568cf7154583a&amp;source=constructor"
              width="800"
              height="400"
              frameborder="0"
            ></iframe>
            <hr className="inputline" />
            <input
              className="card1__input"
              type="text"
              placeholder="Kammentariyalar qoldiring.."
            />
            <hr className="inputline" />
          </div>
          <div className="card2__right">
            <h2>Bular ham qiziq</h2>
            <hr className="interline" />
            <div className="interesting">
              <Link to="/chuycard3">
                <div className="chuyCard">
                  {faceApi.map((item) => (
                    <div className="card" key={item.i3}>
                      <img className="card__img" src={item.img3} />
                      <h2 className="card__title">{item.title3}</h2>
                      <p className="card__subtitle">{item.subtitle3}</p>
                    </div>
                  ))}
                </div>
              </Link>
              <Link to="/chuycard4">
                <div className="chuyCard">
                  {faceApi.map((item) => (
                    <div className="card" key={item.id4}>
                      <img className="card__img" src={item.img4} />
                      <h2 className="card__title">{item.title4}</h2>
                      <p className="card__subtitle">{item.subtitle4}</p>
                    </div>
                  ))}
                </div>
              </Link>
              <Link to="/chuycard5">
                <div className="chuyCard">
                  {faceApi.map((item) => (
                    <div className="card" key={item.id5}>
                      <img className="card__img" src={item.img5} />
                      <h2 className="card__title">{item.title5}</h2>
                      <p className="card__subtitle">{item.subtitle5}</p>
                    </div>
                  ))}
                </div>
              </Link>
              <Link to="/chuycard6">
                <div className="chuyCard">
                  {faceApi.map((item) => (
                    <div className="card" key={item.id6}>
                      <img className="card__img" src={item.img6} />
                      <h2 className="card__title">{item.title6}</h2>
                      <p className="card__subtitle">{item.subtitle6}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
