import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from "../components/Navbar/Header";
import Blog from '../pages/Blog';

const NavigatePages = () => {
    return(
        <Router>
            {/* Navbars Links*/}
            <Header/>
            {/* Pages*/}
            <Routes>
                <Route path="/" element={<Blog />} />
               {/*  <Route path="/Platform" element={<Home />} /> */}
            </Routes>
            {/* Footer*/}
        </Router>
    )
}

export default NavigatePages;