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
import ProductMILPContainer from '../../container/ProductMILPContainer';
import ProductMILPDesc from '../../container/ProductMILPDesc';
import ProductMILPDesc2 from '../../container/ProductMILPDesc2';
import ProductMILPDesc3 from '../../container/ProductMILPDesc3';

class ProductMILP extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <ProductMILPContainer/>
                <ProductMILPDesc/>
                <ProductMILPDesc2/>
                <ProductMILPDesc3/>
                <Footer/>
            </div>
        );
    }
}
 
export default ProductMILP;