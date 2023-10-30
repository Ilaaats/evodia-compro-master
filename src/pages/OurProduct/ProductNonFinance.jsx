import React, {Component} from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/NavbarComp';
import ProductNonFinanceContainer from '../../container/ProductNonFinanceContainer';
import ProductNonFinanceDesc from '../../container/ProductNonFinanceDesc';
import ProductNonFinanceDesc2 from '../../container/ProductNonFinanceDesc2';
import ProductNonFinanceDesc3 from '../../container/ProductNonFinanceDesc3';

class ProductNonFinance extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <ProductNonFinanceContainer/>
                <ProductNonFinanceDesc/>
                <ProductNonFinanceDesc2/>
                <ProductNonFinanceDesc3/>
                <Footer/>
            </div>
        );
    }
}
 
export default ProductNonFinance;