import React, { useEffect } from 'react';
import Gambar from '../assets/image/about-frame.png';
import { Link } from 'react-router-dom';
import Aos from 'aos'

const LosDesc = () => {
    useEffect(() => {
        Aos.init({});
    })
  return (
    <div id="About" className="container lg:pt-0">
        <div className="flex flex-wrap">
            <div className="lg:pl-10 lg:w-1/2" data-aos="fade-up" data-aos-duration="3000">
                <div className="mt-10 lg:mt-9 lg:left-10">
                    <img src={Gambar} alt="" className='max-w-full mx-auto bg-cover mb-20'/>
                </div>
            </div>
            <div className="px-10 lg:pb-24 lg:pl-12 lg:w-1/2 lg:pt-24" data-aos="fade-up" data-aos-duration="3000">
                <p className='font-bold text-[#e52a37] text-left text-2xl mb-5 lg:text-4xl'>Integrated Loan Processing</p>
                <p className='font-medium text-dark text-justify mb-10 leading-relaxed'>Our ILP (Integrated Loan Processing) provides a comprehensive service of loan processes and enables business administrators in the financial institution to independently manage all of the elements of the processes, including a process itself, user screens, printouts, business parameters and logic (algorithms). The configurability and flexibility of ILP (Integrated Loan Processing) decrease the time of implementing changes or new products to the minimum. Its testing functions allow to implement correct and verified products. Thus, all functions that are necessary to sell banking products for individual or business clients are now available on a single loan platform.</p>
                <div className="flex items-start">
                {/* <Link to="/about-more" className="text-base font-semibold text-white bg-[#e52a37] py-2 px-8 rounded-lg   hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >Read More <i className="fas fa-arrow-right"></i></Link> */}
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default LosDesc;