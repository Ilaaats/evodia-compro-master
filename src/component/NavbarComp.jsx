import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/icon/sti-logoblack.png';
import list from '../assets/icon/list.svg';
import { Component } from 'react';
// import './Navbar.css'

class Navbar extends Component{

    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
        this.businessRef = React.createRef();
        this.detailBusinessRef =React.createRef();
        this.btnBusiness = React.createRef();
        this.btnBusinessDetail = React.createRef();
    }


    mobileNavbar = () => {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('-translate-x-72');
    }

    ourBusiness = () => {
        const dropdown = this.businessRef.current;
        const button = this.btnBusiness.current;
        dropdown.classList.replace('hidden', 'flex');
        // dropdown.classList.toggle('hidden');
        button.classList.toggle('rotate-180')
    }

    render(){
        return ( 
            <Fragment>
                    <div className="sticky top-0 flex justify-between lg:hidden lg:justify-between xl:hidden items-center z-50 bg-white shadow-lg">
                        <div ref={this.wrapperRef} className='duration-300 fixed top-0 -right-72 z-50'>       
                            <div className="flex flex-col h-screen text-md shadow-2xl bg-white py-4 px-10 w-64">
                                <div className='text-end'>
                                    <button type='button' onClick={() => this.mobileNavbar()}>
                                        <img className='text-black w-8' src={list} alt="" />
                                    </button>
                                </div>
                                <div className="flex flex-col gap-4 text-black font-medium">
                                    <Link to="/" className='hover:text-[#e52a37] transition duration-300 ease-in-out'>Home</Link>
                                    <a href="#About" className='hover:text-[#e52a37] transition duration-300 ease-in-out'>About Us</a>
                                    <div>
                                        <button onClick={() => this.ourBusiness()} className="rounded inline-flex items-center group">
                                            <p className="mr-1 hover:text-[#e52a37] transition duration-300 ease-in-out">Our Business</p>
                                            <svg
                                                ref={this.btnBusiness}
                                                className="fill-current h-4 w-4 transition-transform"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                >
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </button>
                                        <div ref={this.businessRef} className="hidden font-semibold text-start flex-col gap-2 pt-2 duration-200">
                                            <Link to="/financial-services" className="px-5 hover:text-[#e52a37]">Financial Services</Link>
                                            <Link to="/enterprise-level" className="px-5 hover:text-[#e52a37]">Enterprise Level</Link>
                                            <Link to="/sme-level" className="px-5 hover:text-[#e52a37]">SME Level</Link>
                                            <Link to="/database-middleware" className="px-5 hover:text-[#e52a37]">Database & Middleware</Link>
                                        </div> 
                                    </div>
                                    <Link to="/our-product" className='hover:text-[#e52a37] transition duration-300 ease-in-out'>Our Product</Link>
                                    <Link to="/contact-us" className='hover:text-[#e52a37] transition duration-300 ease-in-out'>Contact Us</Link>
                                </div>  
                            </div>
                        </div>
                    </div>
                    
                    {/* desktop navbar */}
                    <div className="sticky top-0 z-10 py-1 px-10 lg:px-20 bg-white shadow-lg">
                        <div className='flex flex-col lg:items-center lg:flex-row lg:justify-between'>
                            <div className='flex items-center justify-between lg:px-5 lg:py-0 lg:border-b-0'>
                                <div class="mt-5 mb-5">
                                    <img src={logo} width={160} height={61} alt="logo_evodia" />
                                </div>
                                <div className='lg:hidden'>
                                    <button type='button' onClick={() => this.mobileNavbar()}>
                                        <img className='text-black w-8' src={list} alt="" />
                                    </button>
                                </div>
                            </div>
    
                            <div className="hidden lg:flex gap-12 font-medium">
                                <Link to="/" className='hover:text-[#e52a37] transition duration-300 ease-in-out'>Home</Link>
                                <a href="#About" className='hover:text-[#e52a37] transition duration-300 ease-in-out'>About Us</a>
                                <div className="group relative">
                                    <button className="rounded inline-flex items-center group">
                                        <a href="#our-business" className="mr-1 hover:text-[#e52a37] transition duration-300 ease-in-out">Our Business</a>
                                        <svg
                                            className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </button>
                                    
                                    {/* menu list */}
                                    <div className="invisible opacity-0 flex absolute group-hover:opacity-100 group-hover:visible transition delay-75 translate-y-11 group-hover:translate-y-0 duration-300 w-[215px] py-2 font-semibold text-sm flex-col bg-white drop-shadow-md rounded">
                                    <Link to="/ILP" className="px-5 py-2 hover:text-[#e52a37]">Sytem Integrator</Link>
                                        <Link to="/MILP" className="px-5 py-2 hover:text-[#e52a37]">Business Application Development</Link>
                                        <Link to="/RR" className="px-5 py-2 hover:text-[#e52a37]">Data Security</Link>
                                        {/* <Link to="/enterprise-level" className="px-5 py-2 hover:text-[#e52a37]">Enterprise Level</Link> */}
                                        
                                        <Link to="/financial-solutions" className="px-5 py-2 hover:text-[#e52a37]">Analisa Data and SaaS (Software as a Services).</Link>
                                        
                                    </div>                    
                                </div>

                                <div className="group relative">
                                    <button className="rounded inline-flex items-center group">
                                        <a href="#our-product" className="mr-1 hover:text-[#e52a37] transition duration-300 ease-in-out">Our Product</a>
                                        <svg
                                            className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </button>
                                    
                                    {/* menu list product */}
                                    <div className="invisible opacity-0 flex absolute group-hover:opacity-100 group-hover:visible transition delay-75 translate-y-11 group-hover:translate-y-0 duration-300 w-[215px] py-2 font-semibold text-sm flex-col bg-white drop-shadow-md rounded">
                                    <Link to="/product-ILP" className="px-5 py-2 hover:text-[#e52a37]">ILP-LOS,LTMS,LCS,LC</Link>
                                        <Link to="/product-MILP" className="px-5 py-2 hover:text-[#e52a37]">MILP-LOS,LCS,DL,PS</Link>
                                        <Link to="/product-RR" className="px-5 py-2 hover:text-[#e52a37]">Regulatory Reporting Products</Link>
                                        {/* <Link to="/enterprise-level" className="px-5 py-2 hover:text-[#e52a37]">Enterprise Level</Link> */}
                                        
                                        <Link to="/Product-Finance" className="px-5 py-2 hover:text-[#e52a37]">Financial Products</Link>
                                        <Link to="/Product-NonFinance" className="px-5 py-2 hover:text-[#e52a37]">Non Financial Products</Link>
                                        
                                    </div>     
                                                 
                                </div> 
                                <Link to="/contact-us" className='hover:text-[#e52a37] transition duration-300 ease-in-out'>Contact Us</Link>
    
                            </div>            
                        </div>
    
    
                    </div>
            </Fragment> 
         );   
    }
}
 
export default Navbar;