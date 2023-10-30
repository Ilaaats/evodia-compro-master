import React, {Component} from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/NavbarComp';
import DbMiddlewareContainer from '../../container/FinancialContainer';
import FinancialContainer from '../../container/FinancialContainer';
import FinancialCard from '../../container/FinancialCard';
import FinancialDesc from '../../container/FinancialDesc';
import FinancialDesc2 from '../../container/FinancialDesc2';
import FinancialDesc3 from '../../container/FinancialDesc3';
import FinancialDetail from '../../container/FinancialDetail';
import ProductILPContainer from '../../container/ProductILPContainer';
import ProductILPDesc from '../../container/ProductILPDesc';
import ProductILPDesc2 from '../../container/ProductILPDesc2';
import ProductILPDesc3 from '../../container/ProductILPDesc3';

class ProductILP extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <ProductILPContainer/>
                <ProductILPDesc/>
                <ProductILPDesc2/>
                <ProductILPDesc3/>
                <Footer/>
            </div>
        );
    }
}
 
export default ProductILP;