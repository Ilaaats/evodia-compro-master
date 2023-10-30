import React, { Component, Fragment } from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/NavbarComp'
import OurProduct from '../container/OurProduct'

class OurProductPages extends Component {
    render(){
        return (
          <Fragment>
            <Navbar/>
            <OurProduct/>
            <Footer/>
          </Fragment>
        )
    }
}

export default OurProductPages