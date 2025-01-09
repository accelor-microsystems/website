import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import InfraStructure from '../pages/InfraStructure';
import ESS from '../pages/Infrastructure/ESS';
import Production from '../pages/Infrastructure/Production';
import Mechanical from '../pages/Infrastructure/Mechanical';
import About from '../pages/About';
import Career from '../pages/Career';
import RND from '../pages/Infrastructure/RND';
import Mission from '../pages/About/Mission';
import Products from '../pages/Products';
import Team from '../pages/About/Team';
import Home2 from '../pages/Home2';
import Home3 from '../pages/Home3';
import Strengths from '../pages/About/Strengths';
import AboutUs from '../pages/AboutUs';
import QA from '../pages/Infrastructure/QA';
import Products2 from '../pages/Products2';

function AnimatedRoutes() {
    const location = useLocation()
    return (
        <AnimatePresence>

            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/2" element={<Home2 />} />
                <Route exact path="/3" element={<Home3 />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Career />} />
                <Route path="/infrastructure" element={<InfraStructure />} />
                <Route path="/infrastructure/ess" element={<ESS />} />
                <Route path="/infrastructure/production" element={<Production />} />
                <Route path="/infrastructure/mechanical" element={<Mechanical />} />
                <Route path="/infrastructure/rnd" element={<RND />} />
                <Route path="/infrastructure/qa" element={<QA />} />

                <Route path="/mission-vision" element={<Mission />} />
                <Route path="/strengths" element={<Strengths />} />
                <Route path="/about-us" element={<AboutUs />} />

                <Route path="/products" element={<Products2 />} />

                <Route path="/team" element={<Team />} />


            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes