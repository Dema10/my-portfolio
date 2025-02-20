import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-[#090707] flex flex-col justify-between"> 
      <div>
        <Navbar />
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App


