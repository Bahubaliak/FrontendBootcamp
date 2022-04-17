import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import Newsletter from './components/Newsletter'
import Boxes from './components/Boxes'
import Learn from './components/Learn'
import Questions from './components/Questions'
import Instructors from './components/Instructors'
import ContactAndMap from './components/ContactAndMap'
import Footer from './components/Footer'
import './styles.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Newsletter />
      <Boxes />
      <Learn />
      <Questions />
      <Instructors />
      <ContactAndMap />
      <Footer />
    </div>
  );
}

export default App;
