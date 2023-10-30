import React, {Component} from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/NavbarComp';
import FinancialServicesContainer from '../../container/MobileILPContainer';
import MobileILPContainer from '../../container/MobileILPContainer';
import MLosCard from '../../container/MLosCard';
import MilpDesc from '../../container/MilpDesc';
import MilpDetail from '../../container/MilpDetail';

class Milp extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <MobileILPContainer/>
                <MLosCard/>
                <MilpDesc/>
                <MilpDetail/>
                <Footer/>
            </div>
        );
    }
}
 
export default Milp;