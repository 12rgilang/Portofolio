import { Routes, Route, } from 'react-router-dom';
import SplashScreen from './pages/splashscreen/splashscreen';
import Home from './pages/home/home';
import Navbar from './components/navbar/navbar';
import Story from './pages/story/story';
import Portofolio from './pages/portofolio/portofolio';
import Footer from './components/footer/footer';
import Back from './components/backToTop/backToTop';
import './App.css';




function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<SplashScreen />} /> 
      <Route path='/home' element={<Home />} /> 
      <Route path='/story' element={<Story />} /> 
      <Route path='/porto' element={<Portofolio />} /> 
    </Routes>
    <Back />
    <Footer />
    </>
  );
}

export default App;
