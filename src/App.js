import React from 'react';

// import components
import Header from './components/header';
import Banner from './components/banner';
import Brands from './components/brands';
import Intro from './components/introduction';
import Feature from './components/feature';
import WhyChooseUs from './components/whyChooseUs';
import Gallery from './components/gallery';
import Search from './components/search';
// import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Brands />
      <Intro />
      <Feature />
      <WhyChooseUs />
      <Gallery />
      <Search />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
