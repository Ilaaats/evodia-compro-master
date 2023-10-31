import React, {Component, Fragment} from 'react';
import logo from '../assets/icon/sti-logoblack.png';
import {Link} from 'react-router-dom';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div className='px-20 py-20 text-sm bg-zinc-50'>
                    <div className="flex flex-wrap lg:grid lg:grid-cols-6 gap-3">
                        <div className="flex flex-col col-span-2">
                            <img className=" py-5 w-32" src={logo} alt="" />
                            <p className='font-bold '>PT Sentral Teknologi Integrasi</p>
                            <p className='py-1'>Infiniti Office Permata Regency D/37</p>
                            <p className=''>J l . H aji Kelik<br /> Srengseng - Kembangan Jakarta <br/>11630</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold pb-3 hover:text-[#e52a37] transition duration-300 ease-in-out'>Company Profile</p>
                            <a href="#About" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>About Us</a>
                            <Link to="/contact-us" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>Contact Us</Link>
                        </div>
                        <div className='flex flex-col lg:flex lg:flex-col gap-2'>
                            <p className='font-bold pb-2 hover:text-[#e52a37] transition duration-300 ease-in-out'>Our Business</p>
                            <p><Link to="/ILP" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>System Integrator</Link></p>
                            <p><Link to="/MILP" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>Bussines Application Development</Link></p>
                            <p><Link to="/RR" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>Data Security</Link></p>
                            {/* <p><Link to="/enterprise-level" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>Enterprise Level</Link></p> */}
                            
                            <p><Link to="/financial-solutions" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>Data Analytic and SaaS (Software As a Service)</Link></p>
                           
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold pb-3 hover:text-[#e52a37] transition duration-300 ease-in-out'>Our Products</p>
                            <p><Link to="/product-ILP" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>ILP-LOS,LTMS,LCS,LC</Link></p>
                            <p><Link to="/product-MILP" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>MILP-LOS,LCS,DL,PS</Link></p>
                            <p><Link to="/RR" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>Regulatory Reporting Product</Link></p>
                            <p><Link to="/Product-Finance" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>Financial Product</Link></p>
                            <p><Link to="/Product-NonFinance" className='py-1 hover:text-[#e52a37] transition duration-300 ease-in-out'>Non Financial Product</Link></p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-bold pb-3 hover:text-[#e52a37] transition duration-300 ease-in-out'>Contact Us</p>
                            <p className='py-1'> +62-21-58905002</p>
                            <p className='py-1'>info@sentralteknologi.com</p>
                        </div>
                    </div>
                </div>
                <div className='py-3 bg-[#212121] text-center text-white lg:text-sm text-xs'>
                Copyright ©2023 PT Sentral Teknologi Integrasi. All rights reserved.
                </div>
            </Fragment>
        );
    }
}
 
export default Footer;