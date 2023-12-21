import './App.css';
import Analytics from './Components/Analytics';
import BestServiceProvider from './Components/BestServiceProvider';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Infrastructure from './Components/Infrastructure';
import OurCustomers from './Components/OurCustomers';
import Performance from './Components/Performance';
import Products from './Components/Products';
import Testimonial from './Components/Testimonial';
import Trust from './Components/Trust';
import Visual from './Components/Visual';

function App() {
  return (
    <>
      <Hero />
      <BestServiceProvider />
      <Infrastructure />
      <Visual />
      <Analytics />
      <Performance />
      <Products />
      <OurCustomers />
      <Testimonial />
      <Trust />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
