import React from "react";
import "./chuy.css";
import ChuyCards from "./ChuyCards/ChuyCards";
import RegionChuy from "./RegionChuy/RegionChuy";

export default function Chuy() {
  return (
    <>
      <RegionChuy />
      <ChuyCards />
    </>
  );
}
