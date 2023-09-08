// CSS
import "./mainpage.css";

// components
import Header from "./components/Header/Header";
import Section01 from "./components/Section01/Section01";
import Section02 from "./components/Section02/Section02";
import Section03 from "./components/Section03/Section03";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import MenuMobile from "./components/MenuMobile/MenuMobile";


function App() {
  

  return (
    <div>
      <MenuMobile/>
      <Header />

      <Section01 />

      <Section02 />

      <Section03 />

      <Projects />

      <Footer  />
    </div>
  );
}

export default App;
