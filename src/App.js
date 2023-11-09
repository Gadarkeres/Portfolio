import "./mainpage.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MenuMobile from "./components/MenuMobile/MenuMobile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Section01 from "./components/Section01/Section01";
import Section02 from "./components/Section02/Section02";
import Section03 from "./components/Section03/Section03";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MenuMobile/>
        <Header />
        <Routes>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/" element={
            <>
              <Section01 />
              <Section02 />
              <Section03 />
              <Projects />
              
            </>
          }/>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
