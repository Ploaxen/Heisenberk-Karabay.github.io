import './App.css';
import Navbar from './Components/Navbar';
import Mainpage from './Components/Mainpage';
import Footer from './Components/Footer';
import Members from './Components/Members'
import Events from './Components/Events';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


function App() {
  return (
    <>
    <Navbar/>
    <Events/>
    <Footer />
    </>
  );
}

export default App; 


