import React, {Component} from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/NavbarComp';
import IlpLosContainer from '../../container/IlpLosContainer';
import LosDetail from '../../container/LosDetail';
import LosCard from '../../container/LosCard';
import LosDesc from '../../container/LosDesc';

class IlpLos extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <IlpLosContainer/>
                <LosCard/>
                <LosDesc/>
                <LosDetail/>

                <Footer/>
            </div>
        );
    }
}
 
export default IlpLos;