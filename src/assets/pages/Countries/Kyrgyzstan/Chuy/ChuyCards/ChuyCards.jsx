import "./chuyCards.css";
import { Link } from "react-router-dom";

// ID 1
import Chunkurchak from "..//..//..//..//../images/Chunkurchak.jpg";
// ID 2
import BoomGorge from "..//..//..//..//../images/Boom_Gorge-3-600x400.jpg";
// ID 3
import Konorchek from "..//..//..//..//../images/Konorchek-Canyons-1-600x400.png";
// ID 4
import Suusamyr from "..//..//..//..//../images/Suusamyr_valey-3-600x400.jpg";
// ID 5
import Shamsi from "..//..//..//..//../images/Shamsu.png";
// ID 6
import KelTor from "..//..//..//..//../images/Kel-Tor-1-600x400.png";
// ID 7
import Belogorka from "..//..//..//..//../images/Belogorka Gorge.png";
// ID 8
import IssykAta from "..//..//..//..//../images/Issyk_Ata-2-600x400.jpg";
// ID 9
import Burana from "..//..//..//..//../images/Бурана-600x400.jpg";
// ID 10
import AtaBeyit from "..//..//..//..//../images/Ata Beyit Memorial Complex.jpg";
// ID 11
import AlaArcha from "..//..//..//..//../images/Ala-archa1-600x400.jpg";
// ID 12
import AlaToo from "..//..//..//..//../images/Площадь Ала-Тоо..jpg";
// ID 13
import CentralMosque from "..//..//..//..//../images/CentralMosque.jpg";
// ID 14
import ChuyskiyRinok from "..//..//..//..//../images/ChuyskiyRinok.jpg";

export default function ChuyCards() {
  const faceApi = [
    {
      id1: 1,
      title1: "Chunkurchak Gorge",
      subtitle1: "Chunkurchak Gorge (also Chon-Kurchak) is one of...",
      img1: Chunkurchak,
      categpry: "Tabiat manzaralari",

      id2: 2,
      title2: "Boom Gorge",
      subtitle2: " The Boom gorge is the connecting...",
      img2: BoomGorge,
      categpry: "Tabiat manzaralari",

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

      id7: 7,
      title7: "Belogorka Gorge",
      subtitle7: "Belogorka Gorge is located near the village of...",
      img7: Belogorka,
      categpry: "Tabiat manzaralari",

      id8: 8,
      title8: "Issyk-Ata Gorge",
      subtitle8: "The Issyk-Ata Gorge is known from...",
      img8: IssykAta,
      categpry: "Tabiat manzaralari",

      id9: 9,
      title9: "Burana Tower",
      subtitle9: "Burana Tower is the main architectural...",
      img9: Burana,
      categpry: "Tarixiy joylar",

      id10: 10,
      title10: "Ata Beyit Memorial Complex",
      subtitle10: "Ata Beyit is a memorial...",
      img10: AtaBeyit,
      categpry: "Tarixiy joylar",

      id11: 11,
      title11: "Ala Archa National Park",
      subtitle11: "The Ala-Archa National Park is one of the...",
      img11: AlaArcha,
      categpry: "Milliy bog'lar",

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

      id14: 14,
      title14: "Chuyskiy Rinok",
      subtitle14: "Chuyskiy Oblastniy Rinok...",
      img14: ChuyskiyRinok,
      categpry: "Diniy ziyoratgohlar",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="chuyCards">
          <Link to="/chuycard1">
            <div className="chuyCard">
              {faceApi.map((item) => (
                <div className="card" key={item.id1}>
                  <img className="card__img" src={item.img1} />
                  <h2 className="card__title">{item.title1}</h2>
                  <p className="card__subtitle">{item.subtitle1}</p>
                </div>
              ))}
            </div>
          </Link>
          <Link to="/chuycard2">
            <div className="chuyCard">
              {faceApi.map((item) => (
                <div className="card" key={item.id2}>
                  <img className="card__img" src={item.img2} />
                  <h2 className="card__title">{item.title2}</h2>
                  <p className="card__subtitle">{item.subtitle2}</p>
                </div>
              ))}
            </div>
          </Link>
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
          <Link to="/chuycard7">
            <div className="chuyCard">
              {faceApi.map((item) => (
                <div className="card" key={item.id7}>
                  <img className="card__img" src={item.img7} />
                  <h2 className="card__title">{item.title7}</h2>
                  <p className="card__subtitle">{item.subtitle7}</p>
                </div>
              ))}
            </div>
          </Link>
          <Link to="/chuycard8">
            <div className="chuyCard">
              {faceApi.map((item) => (
                <div className="card" key={item.id8}>
                  <img className="card__img" src={item.img8} />
                  <h2 className="card__title">{item.title8}</h2>
                  <p className="card__subtitle">{item.subtitle8}</p>
                </div>
              ))}
            </div>
          </Link>
          <Link to="/chuycard9">
            <div className="chuyCard">
              {faceApi.map((item) => (
                <div className="card" key={item.id9}>
                  <img className="card__img" src={item.img9} />
                  <h2 className="card__title">{item.title9}</h2>
                  <p className="card__subtitle">{item.subtitle9}</p>
                </div>
              ))}
            </div>
          </Link>
          <Link to="/chuycard10">
            <div className="chuyCard">
              {faceApi.map((item) => (
                <div className="card" key={item.id10}>
                  <img className="card__img" src={item.img10} />
                  <h2 className="card__title">{item.title10}</h2>
                  <p className="card__subtitle">{item.subtitle10}</p>
                </div>
              ))}
            </div>
          </Link>
          <Link to="/chuycard11">
            <div className="chuyCard">
              {faceApi.map((item) => (
                <div className="card" key={item.id11}>
                  <img className="card__img" src={item.img11} />
                  <h2 className="card__title">{item.title11}</h2>
                  <p className="card__subtitle">{item.subtitle11}</p>
                </div>
              ))}
            </div>
          </Link>
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
          <Link to="/chuycard14">
            <div className="chuyCard">
              {faceApi.map((item) => (
                <div className="card" key={item.id14}>
                  <img className="card__img" src={item.img14} />
                  <h2 className="card__title">{item.title14}</h2>
                  <p className="card__subtitle">{item.subtitle14}</p>
                </div>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
