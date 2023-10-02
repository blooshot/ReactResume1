import data from "../src/data/data.json"
import './App.css';
import Headnav from './component/Headnav.js'
import Hero from './component/Hero.js'
import Bhasad from './component/Bhasad.js'
import Footer from './component/Footer.js'
import Main from './component/Main.js'

function App() {
  return (
    <>
    <Headnav /> 
    <Hero herodata={data.heroData} socialLinks={data.socialLinks} />
    <Main/>
    <Footer/>
    <Bhasad />
    </>
  );
}

export default App;
