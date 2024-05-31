import React from "react";
import "./info.css";
import InfoProps from "./InfoProps";
import InfoImg from "../../../images/1706597443052.jpg";
import InfoImg2 from "../../../images/tfB056x4Nd1AhpTNqoS7TVVS8SxbTPvrmVh9tHq1.jpg";
import InfoImg3 from "../../../images/young-parents-packing-luggage-trunk-car-7.webp";
import InfoImg4 from "../../../images/shutterstock_1349109332.jpg";

export default function Info() {
  return (
    <div>
      <InfoProps
        img={InfoImg}
        title="Aniq rejalar"
        suptitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat!"
        btntitle="click"
        btnsuptitle="clickmi"
      />
      <InfoProps
        img={InfoImg2}
        title="Dunyo bo'ylab sayohatlar "
        suptitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat!"
        btntitle="click"
        btnsuptitle="clickmi"
        reverse={true}
      />
      <InfoProps
        img={InfoImg3}
        title="Oylaviy sayohatlar "
        suptitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat!"
        btntitle="click"
        btnsuptitle="clickmi"
      />
       <InfoProps
        img={InfoImg4}
        title="Yangidan-yangi sarguzashtlar"
        suptitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, placeat!"
        btntitle="click"
        btnsuptitle="clickmi"
        reverse={true}
      />
    </div>
  );
}
