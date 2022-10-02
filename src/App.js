
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Service from './components/Service/Service';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     
     <Header/>
     <Nav/>
     <About/>
<Experience/>
<Service/>
<Portfolio/>
<Testimonial/>
<Contact/>
<Footer/>


    </div>
  );
}

export default App;
