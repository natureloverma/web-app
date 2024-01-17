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
// import { BrowserRouter as Routes, Route } from "react-router-dom";

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
      {/* <Routes>
        <Route path="Contact" element={<Contact />}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
