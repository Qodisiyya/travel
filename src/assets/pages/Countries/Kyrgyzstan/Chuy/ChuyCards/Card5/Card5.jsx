import React from "react";
import "./card5.css";
import { Link } from "react-router-dom";
// ID 12
import AlaToo from "..//..//..//..//..//../images/Площадь Ала-Тоо..jpg";
// ID 5
import Shamsi from "..//..//..//..//..//../images/Shamsu.png";
// ID 6
import KelTor from "..//..//..//..//..//../images/Kel-Tor-1-600x400.png";
// ID 13
import CentralMosque from "..//..//..//..//..//../images/CentralMosque.jpg";

export const Card5 = () => {
  const faceApi = [
    {
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

      id12: 12,
      title12: "Ala-Too Park",
      subtitle12: "The region received its name from the Chuy Valley...",
      img12: AlaToo,
      categpry: "Milliy bog'lar",

      id13: 13,
      title13: "Central Mosque",
      subtitle13: "The Central Mosque of Imam Sarakhsi...",
      img13: CentralMosque,
      categpry: "Diniy ziyoratgohlar",
    },
  ];

  return (
    <section>
      <div className="card5__title">
        <h2>Shamsi Gorge</h2>
      </div>

      <div className="container">
        <div className="card5">
          <div className="card5__left">
            <p>
              Shamsi darasi Qirgʻiz tizmasining sharqiy qismida, Toʻqmoq shahri
              yaqinida joylashgan. Bu dara o'zining ko'p sonli o'rmonlari va
              daraxtlari bilan mashhur. 1968 yilda Qirg‘izistonga tashrif
              buyurgan Eron shohi uchun qurilgan “Shohning uyi” ham bor. Dara
              boy madaniy tarixga ega: uzoq vaqt Shamsi dovoni va Dara Qo‘chqor
              va Chuy vodiylarini bog‘lovchi yo‘l bo‘lib kelgan. Daraning yonida
              mashhur Burana minorasi joylashgan. Hozirgi kunda Shamsi darasi
              ko'plab sayyohlik yo'nalishlari uchun bog'lovchi havola sifatida
              juda mashhur. Daradan Qoʻchqor vodiysiga, soʻngra Qoʻnorchek va
              Boom daralaridan tashqari Soʻngʻolga borish mumkin.
            </p>
            <img src={Shamsi} alt="" />

            <h2>Shamsi darasiga qanday borish mumkin?</h2>
            <hr className="howline" />
            <p>
              Shamsi darasi Bishkekdan 100 kilometr sharqda joylashgan. Daraga
              jamoat transporti yo'q. Daraga kirish bepul.
            </p>
            <h2>Shamsi darasi xaritada</h2>
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
              className="card5__input"
              type="text"
              placeholder="Kammentariyalar qoldiring.."
            />
            <hr className="inputline" />
          </div>
          <div className="card5__right">
            <h2>Bular ham qiziq</h2>
            <hr className="interline" />
            <div className="interesting">
              <Link to="/chuycard12">
                <div className="chuyCard">
                  {faceApi.map((item) => (
                    <div className="card" key={item.id12}>
                      <img className="card__img" src={item.img12} />
                      <h2 className="card__title">{item.title12}</h2>
                      <p className="card__subtitle">{item.subtitle12}</p>
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
