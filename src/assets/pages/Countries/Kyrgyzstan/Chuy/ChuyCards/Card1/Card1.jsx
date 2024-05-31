import React from "react";
import "./card1.css";
import Chunkurchak from "..//..//..//..//..//../images/Chunkurchak.jpg";
import { Link } from "react-router-dom";
// ID 3
import Konorchek from "..//..//..//..//..//../images/Konorchek-Canyons-1-600x400.png";
// ID 4
import Suusamyr from "..//..//..//..//..//../images/Suusamyr_valey-3-600x400.jpg";
// ID 5
import Shamsi from "..//..//..//..//..//../images/Shamsu.png";
// ID 6
import KelTor from "..//..//..//..//..//../images/Kel-Tor-1-600x400.png";


export const Card1 = () => {
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
      <div className="card1__title">
        <h2>Chunkurchak Gorge</h2>
      </div>

      <div className="container">
        <div className="card1">
          <div className="card1__left">
            <p>
              Chunqurchak darasi (shuningdek, Cho'n-Qurchak) Bishkekka eng yaqin
              baland tog'li daralar va shu bilan birga Chuy viloyatidagi eng
              go'zal daralardan biridir. Chunqurchakning hayratlanarli
              xususiyati bor: Qirgʻiz tizmasining boshqa koʻplab daralaridan
              farqli oʻlaroq, u shimoldan sharqqa, xuddi tizma boʻylab
              choʻzilgan. Daraning uzunligi juda kichik, taxminan 30 kilometr,
              ammo bu masofa juda ko'p ajoyib manzaralarni o'z ichiga oladi.
              Rivojlangan sayyohlik infratuzilmasi, shuningdek, yozda dam olish
              uylari, shuningdek, kumisolechebintsalar sifatida ishlaydigan 4 ta
              chang'i kurortlari mavjud. Chunqurchoq turizmning deyarli barcha
              turlariga mos keladi. Dara bo'ylab yo'l, ayniqsa, Qizil-Beles
              dovoni va serpantinlar hududida yo'ltanlamaslar va velosipedchilar
              muxlislari orasida juda mashhur. Bu yerda pikniklar va sayr qilish
              uchun joylar mavjud.
            </p>
            <img src={Chunkurchak} alt="" />

            <h2>Chunkurchakka qanday borish mumkin?</h2>
            <hr className="howline" />
            <p>
              Daraga jamoat transporti yo'q. Avtomobil/velosipedda bir nechta
              variant mavjud: g'arbdan Ala-Archa darasidan va Qashqa-Suv
              qishlog'idan, sharqdan Alamedin darasi va Arashan qishlog'idan.
              Yo'lning ikki tomoni tuproq, lekin g'arbdan qaraganda kamroq
              toshli. Daraning yuqori qismi (Qizil-Beles dovoni) faqat
              yo'ltanlamas avtomobilda harakatlanadi va yaxshi haydash
              qobiliyatini talab qiladi.
            </p>
            <h2>Chunqurchak xaritada</h2>
            <hr  className="mapline"/>
            <iframe
              className="chunkMap"
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aaed3e8f5b01c135aa080e214e3c8249f2ca823362242b56de57568cf7154583a&amp;source=constructor"
              width="800"
              height="400"
              frameborder="0"
            ></iframe>
            <hr className="inputline"/>
            <input className="card1__input" type="text" placeholder="Kammentariyalar qoldiring.."/>
            <hr className="inputline"/>
            
          </div>
          <div className="card1__right">
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
