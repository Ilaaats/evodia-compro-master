import React, {Component} from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/NavbarComp';
import FinancialContainer from '../../container/FinancialContainer';
import FinancialCard from '../../container/FinancialCard';
import SaasProductCard from '../../container/SaasProductCard';
import SaasContainer from '../../container/SaasContainer'



class Financial extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <FinancialContainer/>
                <SaasContainer/>
                <FinancialCard/>
                <SaasProductCard/>
                <Footer/>
            </div>
        );
    }
}
 
export default Financial;