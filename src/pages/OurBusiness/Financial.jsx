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

class Financial extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <FinancialContainer/>
                <FinancialCard/>
                <FinancialDesc/>
                <FinancialDesc2/>
                <FinancialDesc3/>
                <FinancialDetail/>
                <Footer/>
            </div>
        );
    }
}
 
export default Financial;