import React from 'react'
import { Fragment } from 'react'
import { Component } from 'react'
import Footer from '../component/Footer'
import Navbar from '../component/NavbarComp'
import AboutCard from '../container/AboutCard'
import AboutMoreContainer from '../container/AboutMoreContainer'
import AboutVission from '../container/AboutVission'
import Spesifikasi from '../container/Spesifikasi'

class AboutMore extends Component {
    state = {}
    render() {
        return (
          <Fragment>
            <Navbar/>
            <AboutMoreContainer/>
            <AboutCard/>
            <Spesifikasi/>
            <AboutVission/>
            <Footer/>
          </Fragment>
        )
    }
}

export default AboutMore