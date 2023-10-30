import React, {Component} from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/NavbarComp';
import SmeLevelContainer from '../../container/RegulatoryReportingContainer';
import RegulatoryReportingContainer from '../../container/RegulatoryReportingContainer';
import RRCard from '../../container/RRCard';
import RRDesc from '../../container/RRDesc';
import RRDetail from '../../container/RRDetail';

class RegulatoryReporting extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <RegulatoryReportingContainer/>
                <Footer/>
            </div>
        );
    }
}
 
export default RegulatoryReporting;