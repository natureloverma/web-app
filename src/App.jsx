// App.jsx
import "./App.css";
import MyNavbar from "./MyNavbar";
import Footer from "./Footer";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import LastPage from "./LastPage";
// import Resources from "./ResourcesPage";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      {/* <Resources /> */}
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
