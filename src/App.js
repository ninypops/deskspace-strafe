import React from 'react';

// import sections
import Header from './sections/header';
import Banner from './sections/banner';
import Brands from './sections/brands';
import Intro from './sections/introduction';
import Feature from './sections/feature';
import WhyChooseUs from './sections/whyChooseUs';
import Gallery from './sections/gallery';
import Search from './sections/search';
import Footer from './sections/footer';

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
      <Footer />
    </React.Fragment>
  );
}

export default App;
