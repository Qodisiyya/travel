import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home/Home";
import Countries from "./assets/pages/Countries/Countries";
import Kyrgyzstan from "./assets/pages/Countries/Kyrgyzstan/Kyrgyzstan";
import Uzbekistan from "./assets/pages/Countries/Uzbekistan/Uzbekistan";
import Chuy from "./assets/pages/Countries/Kyrgyzstan/Chuy/Chuy";
import { Card1 } from "./assets/pages/Countries/Kyrgyzstan/Chuy/ChuyCards/Card1/Card1";
import { Card2 } from "./assets/pages/Countries/Kyrgyzstan/Chuy/ChuyCards/Card2/Card2";
import { Card3 } from "./assets/pages/Countries/Kyrgyzstan/Chuy/ChuyCards/Card3/Card3";
import { Card4 } from "./assets/pages/Countries/Kyrgyzstan/Chuy/ChuyCards/Card4/Card4";
import { Card5 } from "./assets/pages/Countries/Kyrgyzstan/Chuy/ChuyCards/Card5/Card5";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/kyrgyzstan" element={<Kyrgyzstan />} />
        <Route path="/uzbekistan" element={<Uzbekistan />} />
        <Route path="/chuy" element={<Chuy />} />
        <Route path="/chuycard1" element={<Card1 />} />
        <Route path="/chuycard2" element={<Card2 />} />
        <Route path="/chuycard3" element={<Card3 />} />
        <Route path="/chuycard4" element={<Card4 />} />
        <Route path="/chuycard4" element={<Card4 />} />
        <Route path="/chuycard5" element={<Card5 />} />
      </Routes>
    </div>
  );
}

export default App;
