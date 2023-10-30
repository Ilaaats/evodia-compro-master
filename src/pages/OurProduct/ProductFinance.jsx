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
import ProductFinanceContainer from '../../container/ProductFinanceContainer';
import ProductFinanceDesc from '../../container/ProductFinanceDesc';
import ProductFinanceDesc2 from '../../container/ProductFinanceDesc2';
import ProductFinanceDesc3 from '../../container/ProductFinanceDesc3';
import ProductFinanceDesc4 from '../../container/ProductFinanceDesc4';

class ProductFinance extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <ProductFinanceContainer/>
                <ProductFinanceDesc/>
                <ProductFinanceDesc2/>
                <ProductFinanceDesc3/>
                <ProductFinanceDesc4/>
                <Footer/>
            </div>
        );
    }
}
 
export default ProductFinance;