import React, { useEffect } from 'react';
import Gambar from '../assets/image/gambar9.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos'

const FinancialDesc2 = () => {
    useEffect(() => {
        Aos.init({});
    })
  return (
    <div id="About" className="container lg:pt-0 bg-[#DFDFDF]">
        <div className="flex flex-wrap">
            <div className="lg:pl-10 lg:w-1/2" data-aos="fade-up" data-aos-duration="3000">
                <div className="mt-10 lg:mt-9 lg:left-10">
                    <img src={Gambar} alt="" className='max-w-full mx-auto bg-cover mb-20'/>
                </div>
            </div>
            <div className="px-10 lg:pb-24 lg:pl-12 lg:w-1/2 lg:pt-24" data-aos="fade-up" data-aos-duration="3000">
                <p className='font-bold text-[#e52a37] text-left text-2xl mb-5 lg:text-4xl'>E-Form</p>
                <p className='font-medium text-dark text-justify mb-10 leading-relaxed'>"Eform" is a shortened term for "electronic form." An electronic form, or e-form, is a digital or computer-based version of a traditional paper form. Eforms are commonly used for data collection, information submission, and various other purposes, particularly in administrative, business, and government processes. These electronic forms can be accessed and completed on computers, tablets, or other electronic devices.</p>
                <div className="flex items-start">
                {/* <Link to="/about-more" className="text-base font-semibold text-white bg-[#e52a37] py-2 px-8 rounded-lg   hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >Read More <i className="fas fa-arrow-right"></i></Link> */}
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default FinancialDesc2;