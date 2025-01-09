import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import AnimatedRoutes from './components/AnimatedRoutes';
import { AnimatePresence } from 'framer-motion';
import AnimatedCursor from "react-animated-cursor"
import Cursor from './components/Cursor';
function App() {
  return (
    <div className="App overflow-hidden ">
      {/* <AnimatedCursor
        innerSize='14'
        outerSize='14'
        color='0, 0, 0'
        outerAlpha={1}
      /> */}
      {/* <Cursor /> */}
      <AnimatePresence>

        <Router>

          <Navbar />
          <AnimatedRoutes />
          <Footer />
        </Router>
      </AnimatePresence>
    </div>
  );
}

export default App;
