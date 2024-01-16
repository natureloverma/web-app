// App.jsx
import { useState } from "react";
import "./App.css";
import React from "react";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import LastPage from "./LastPage";
// import Contact from "./Contact";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <MyNavbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <LastPage />
      <Footer />
    </div>
  );
}

export default App;
