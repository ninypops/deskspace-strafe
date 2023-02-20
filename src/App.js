// import logo from './logo.svg';
import './App.css';

// import components
import Header from './components/header';
import Banner from './components/banner';
import Brands from './components/brands';
import Intro from './components/introduction';
import Feature from './components/feature';
import WhyChooseUs from './components/whyChooseUs';
import Gallery from './components/gallery';
import Search from './components/search';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Banner />
        <Brands />
        <Intro />
        <Feature />
        <WhyChooseUs />
        <Gallery />
        <Search />
        <Footer />
      </div>
    </div>
  );
}

export default App;
