import React, { Fragment, Component } from 'react'
import Footer from '../component/Footer';
import Navbar from '../component/NavbarComp';
import Partner from '../component/Partner';
import ContactContainer from '../container/ContactContainer';

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Navbar />
                <ContactContainer/>
                <Footer />
            </Fragment>
        );
    }
}
 
export default Partner;