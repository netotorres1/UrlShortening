import Boost from "./Boost/Boost";
import Header from "./components/Header/Header";
import Search from "./components/Search";
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
      <Header/>
      <Search />
      <Boost/>
      <Footer />
    </div>
  );
}

export default App;
