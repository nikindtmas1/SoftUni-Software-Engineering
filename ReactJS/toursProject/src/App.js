
import './App.css';
import Header from './components/Header.js';
import Navigation from './components/Navigation';
import Footer from './components/Footer.js';
import About from './components/About';
import Service from './components/Service';
import Agenci from './components/Agenci';
import Text from './components/Text';
import Contact from './components/Contact';

function App() {
  return (
    <main >
      <Navigation />
      <Header />
      <About />
      <Service />
      <Agenci />
      <Text />
      <Contact />
      <Footer />
    </main>
  );

}



export default App;
