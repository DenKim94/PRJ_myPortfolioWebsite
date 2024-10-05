import Header from './components/Header';
import StartSection from './components/StartSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <main className='main-content'>
        <StartSection /> 
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
