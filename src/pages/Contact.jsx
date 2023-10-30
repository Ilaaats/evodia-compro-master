import React, { Fragment, Component } from 'react'
import Footer from '../component/Footer';
import Navbar from '../component/NavbarComp';
import ContactContainer from '../container/ContactContainer';
import Partner from '../component/Partner';


class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <Navbar />
                <ContactContainer/>
                <Partner />
                <Footer /> 
            </Fragment>
        );
    }
}
 
export default Contact;