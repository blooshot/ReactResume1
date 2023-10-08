import './App.css';
import DataProvider from './Provider/DataProvider';
import Headnav from './component/Headnav.js'
import Hero from './component/Hero.js'
import Bhasad from './component/Bhasad.js'
import Footer from './component/Footer.js'
import Main from './component/Main.js'

function App() {
  return (
    <DataProvider>
      <Headnav />
      <Hero />
      <Main />
      <Footer />
      <Bhasad />
    </DataProvider>
  );
}

export default App;
