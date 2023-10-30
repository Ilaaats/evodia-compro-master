import './App.css';
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'
import Home from './pages/Home';
import FinancialServises from './pages/OurBusiness/Milp';
import EnterpriseLevel from './pages/OurBusiness/EnterpriseLevel';
import SmeLevel from './pages/OurBusiness/RegulatoryReporting';
import DbMiddleware from './pages/OurBusiness/Financial';
import Contact from './pages/Contact';
// import AboutReadMore from './component/AboutReadMore';
import AboutMore from './pages/AboutMore';
import OurProductPages from './pages/OurProductPages';
import ScrollToTop from './component/ScrollToTop';
import IlpLos from './pages/OurBusiness/IlpLos';
import ProductILP from './pages/OurProduct/ProductILP';
import ProductMILP from './pages/OurProduct/ProductMILP';
import ProductRR from './pages/OurProduct/ProductRR';
import ProductFinance from './pages/OurProduct/ProductFinance'
import ProductNonFinance from './pages/OurProduct/ProductNonFinance';
function App() {
  return (
    <Router>
      <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/MILP" element={<FinancialServises/>}></Route>
            <Route path="/enterprise-level" element={<EnterpriseLevel/>}></Route>
            <Route path="/RR" element={<SmeLevel/>}></Route>
            <Route path="/financial-solutions" element={<DbMiddleware/>}></Route>
            <Route path="/our-product" element={<OurProductPages/>}></Route>
            <Route path="/contact-us" element={<Contact/>}></Route>
            <Route path="/ILP" element={<IlpLos/>}></Route>
            <Route path="/Product-ILP" element={<ProductILP/>}></Route>
            <Route path="/Product-MILP" element={<ProductMILP/>}></Route>
            <Route path="/Product-RR" element={<ProductRR/>}></Route>
            <Route path="/Product-Finance" element={<ProductFinance/>}></Route>
            <Route path="/Product-NonFinance" element={<ProductNonFinance/>}></Route>
            {/* <Route path="/AboutReadMore" element={<AboutReadMore/>}></Route> */}
            <Route path="/about-more" element={<AboutMore/>}></Route>
          </Routes>
      </ScrollToTop>
    </Router>

  );
}

export default App;
