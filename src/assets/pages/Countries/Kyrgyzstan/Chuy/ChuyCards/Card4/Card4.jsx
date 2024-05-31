import React from "react";
import "./card4.css";
import Suusamyr from "..//..//..//..//..//../images/Suusamyr_valey-3-600x400.jpg";
import { Link } from "react-router-dom";
// ID 12
import AlaToo from "..//..//..//..//..//../images/Площадь Ала-Тоо..jpg";
// ID 5
import Shamsi from "..//..//..//..//..//../images/Shamsu.png";
// ID 6
import KelTor from "..//..//..//..//..//../images/Kel-Tor-1-600x400.png";
// ID 13
import CentralMosque from "..//..//..//..//..//../images/CentralMosque.jpg";

export const Card4 = () => {
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
      <div className="card4__title">
        <h2>Suusamyr Valley</h2>
      </div>

      <div className="container">
        <div className="card4">
          <div className="card4__left">
            <p>
              Suusamir 150 km uzunlikdagi vodiy boʻlib, Shimoliy Tyan-Shanning
              uchta yirik tizmalari: Qirgʻiz, Susamir-Too va Jumgʻol-Too
              oraligʻida joylashgan. Vodiyning o'rtacha balandligi 2300 metrni
              tashkil qiladi va shuning uchun yozda ham u erda salqin. Vodiyda
              ikkita yirik daryo bor: Suusamir va Zapadniy Qorakoʻl. Ikki daryo
              birlashib, yuqori suvli Kekemeren daryosini hosil qiladi. Vodiy
              o'zining ajoyib manzarasi bilan ajralib turadi: zumrad-yashil
              o'tlar shiddatli daryolar va tog'larning ulug'vor manzaralariga
              tutashgan. Qishda tog'-chang'i bazasi va yozda ko'plab qumiz
              davolash joylari mavjud. Vodiy paraplanda uchish uchun ham
              mashhur, chunki u erda deyarli daraxtlar yo'q. Tabiiy diqqatga
              sazovor joylarga qo'shimcha ravishda, ba'zi madaniy diqqatga
              sazovor joylar mavjud. Shulardan biri Kojomqul mozori boʻlib, u
              qurilishda qatnashgan mashhur qirgʻiz qahramonining qabridir.
              Mozor devorlarida uning ulkan qo‘llarining saqlanib qolgan
              izlarini hamon ko‘rish mumkin. Mozor Kojomku qishlog'ida
              joylashgan bo'lib, Suusamir vodiysi tarixi bilan tanishish mumkin
              bo'lgan mahalliy muzey ham mavjud. Suusamyr orqali sayyohlikning
              barcha turlari uchun ko'plab marshrutlar o'tadi va ular piyoda
              yurish, trekking, velosiped, avtomobil, mototsikl va boshqalarni
              o'z ichiga oladi.
            </p>
            <img src={Suusamyr} alt="" />

            <h2>Suusamir vodiysiga qanday borish mumkin?</h2>
            <hr className="howline" />
            <p>
              Suusamir vodiysi Bishkekdan 160 kilometr janubi-g‘arbda
              joylashgan. Bishkek-O'sh yo'li vodiydan o'tadi va shuning uchun u
              erga avtovokzaldan taksida borish mumkin.
            </p>
            <h2>Suusamir vodiysi xaritada</h2>
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
              className="card4__input"
              type="text"
              placeholder="Kammentariyalar qoldiring.."
            />
            <hr className="inputline" />
          </div>
          <div className="card4__right">
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
