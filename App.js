import './App.css';
import Navbar from './components/navbar';
import Hero_section from './components/hero_section';
import Hero_section_b  from './components/hero_section_b';
import Hero_section_c from './components/hero_section_c';
import Top_seller_section from './components/Top_seller_section';
import Auction from './components/auction';
import Top_collection from './components/Top_collection';
import Recently_sold from './components/Recently_sold';
import Imagination from './components/Imagination';
import Boostnft from './components/Boostnft';
import { FAQ } from './components/FAQ';
import { Footer_section } from './components/Footer_section';
import Card from './components/card';




function App() {
  return (
    <>
    <Navbar/>
    <Hero_section/>
    <Hero_section_b/>
    <Hero_section_c/>
    <Top_seller_section/>
    <Auction/>
    <Top_collection/>
    <Recently_sold/>
    <Imagination/>
    <Boostnft/>
    <FAQ/>
    <Footer_section/>
    
    
    
    
    </>
  );
}

export default App;
