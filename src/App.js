import './App.css';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import ServicePage from './Pages/ServicesPage';
import ContactUsPage from './Pages/ContactUsPage';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/Home" element={<Homepage />} /> {/* Use element to specify the component */}
          <Route path="/about-us" element={<Homepage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/our-work" element={<Homepage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
