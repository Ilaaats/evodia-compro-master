import React, {Component} from 'react';
import Footer from '../../component/Footer';
import Navbar from '../../component/NavbarComp';
import EnterpriseLevelContainer from '../../container/EnterpriseLevelContainer';

class EnterpriseLevel extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <EnterpriseLevelContainer/>
                <Footer/>
            </div>
        );
    }
}
 
export default EnterpriseLevel;