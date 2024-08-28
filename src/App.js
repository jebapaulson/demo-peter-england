import "./App.css";
import Shop from "./components/Shop";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Collections from "./components/Collections";
import Explore from "./components/Explore";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Collections />
      <Shop />
      <Explore />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;