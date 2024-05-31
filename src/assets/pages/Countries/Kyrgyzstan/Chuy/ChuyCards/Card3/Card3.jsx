import React from "react";
import "./card3.css";
import Konorchek from "..//..//..//..//..//../images/Konorchek-Canyons-1-600x400.png";
import { Link } from "react-router-dom";
// ID 4
import Suusamyr from "..//..//..//..//..//../images/Suusamyr_valey-3-600x400.jpg";
// ID 5
import Shamsi from "..//..//..//..//..//../images/Shamsu.png";
// ID 6
import KelTor from "..//..//..//..//..//../images/Kel-Tor-1-600x400.png";
// ID 13
import CentralMosque from "..//..//..//..//..//../images/CentralMosque.jpg";

export const Card3 = () => {
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

      id13: 13,
      title13: "Central Mosque",
      subtitle13: "The Central Mosque of Imam Sarakhsi...",
      img13: CentralMosque,
      categpry: "Diniy ziyoratgohlar",
    },
  ];

  return (
    <section>
      <div className="card3__title">
        <h2>Konorchek Canyons (Suluu-Terek)</h2>
      </div>

      <div className="container">
        <div className="card3">
          <div className="card3__left">
            <p>
              Konorchek kanyoni Qirg'iz tizmasining sharqiy qismidagi ajoyib
              sayyohlik maskanidir. Bu Tyan-Shan tog'lari o'rtasida
              miniatyuradagi Katta Kanyonga o'xshaydi! Ming yillik tuproq
              eroziyasi bu joyni aql bovar qilmaydigan qilib qo'ydi. U qadimgi
              Segijan-Shokni vulqonining qoldiqlari bilan mashhur. Qirgʻiziston
              uchun vulqon qoldiqlari alohida hodisadir, chunki Markaziy Osiyoda
              vulqon izlari deyarli yoʻq. Hatto hozirgi kungacha dengiz bo'lgan
              qadim zamonlardan qolgan qobiqlarning qoldiqlarini topish mumkin.
              Kanyon tog'larning o'rtasida bo'lishiga qaramay, bu erda harorat
              Chuy vodiysiga qaraganda o'rtacha issiqroq. Qishda qor deyarli
              yo'q va yozda harorat deyarli 40 darajadan pastga tushmaydi.
              Shuning uchun sayyohlar bahor yoki kuzda tashrif buyurishlari
              yaxshiroqdir. Kanyonga boradigan yo'l uzoq vaqt qurigan daryoning
              kanali bo'ylab o'tadi. Ba’zan qoyalar shu qadar yaqin bo‘ladiki,
              eni bir yarim metrga yaqin yo‘lak bor. Tyan-Shan uchun juda
              noodatiy hodisa. Konorchek bir kunlik ekskursiya uchun ajoyib
              tanlovdir. Kanyonga boradigan piyoda yo'li 5 kilometrni tashkil
              etadi, ammo uzoq yurish muxlislari uchun ko'plab joylar bor,
              chunki kanyon maydoni 200 km.
            </p>
            <img src={Konorchek} alt="" />

            <h2>Konorchek Canyonsga qanday borish mumkin?</h2>
            <hr className="howline" />
            <p>
              Konorchek kanyonlari Bishkekdan 120 kilometr sharqda joylashgan.
              Kanyonlarga kirish Boom darasida, "Krasnaya Rechka" ko'prigi
              yaqinida joylashgan. Kanyonga jamoat transportida borish mumkin:
              Bishkekdagi G'arbiy avtovokzaldan Baliqchiga avtobusga o'ting va
              "Krasnaya Rechka" ko'prigidan tushing. Baliqchidan Bishkekka
              muntazam marshrutkalar ko'p bo'lganligi sababli, saytga borish va
              qaytish oson. Kanyon hududiga kirish bepul.
            </p>
            <h2>Konorchek Canyons xaritada</h2>
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
              className="card3__input"
              type="text"
              placeholder="Kammentariyalar qoldiring.."
            />
            <hr className="inputline" />
          </div>
          <div className="card3__right">
            <h2>Bular ham qiziq</h2>
            <hr className="interline" />
            <div className="interesting">
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
              <Link to="/chuycard13">
                <div className="chuyCard">
                  {faceApi.map((item) => (
                    <div className="card" key={item.id13}>
                      <img className="card__img" src={item.img13} />
                      <h2 className="card__title">{item.title13}</h2>
                      <p className="card__subtitle">{item.subtitle13}</p>
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
