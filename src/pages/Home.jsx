import React, {Component, Fragment} from 'react';
import Jumbotron from '../component/JumbotronComp';
import Navbar from '../component/NavbarComp';
import About from '../component/About';
import Footer from '../component/Footer';
import GetStarted from '../component/GetStarted';
import OurBusiness from '../container/OurBusiness';
import OurProduct from '../container/OurProduct';
import Partner from '../component/Partner';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Navbar/>
                <Jumbotron/>
                <About/>
                <OurBusiness/>
                <OurProduct/>
                <Partner/>
                <GetStarted/>
                <Footer/>
            </Fragment>
        );
    }
}
 
export default Home;