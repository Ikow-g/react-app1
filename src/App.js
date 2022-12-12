import "./project-1/style.css";
// import Navbar from "./components/Navbar"
// import MainContent from "./components/MainContent"
import Info from "./project-1/Info";
import About from "./project-1/About";
import Interest from "./project-1/Interest";
import Footer from "./project-1/Footer";

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interest />
      <Footer />
      {/* <Navbar></Navbar>
      <MainContent></MainContent> */}
      
    </div>
  );
}

export default App;