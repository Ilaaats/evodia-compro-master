import React, { useEffect } from 'react';
import Gambar from '../assets/image/gambar16.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos'

const ProductFinanceDesc4 = () => {
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
                <p className='font-bold text-[#e52a37] text-left text-2xl mb-5 lg:text-4xl'>Core System Koperasi</p>
                <p className='font-medium text-dark text-justify mb-10 leading-relaxed'>The term "system koperasi" can be translated to "cooperative system" in English. A cooperative system refers to a set of principles and practices that govern cooperatives, which are organizations owned and operated by their members for their mutual benefit. Cooperatives can exist in various sectors, including agriculture, finance, consumer goods, and more. They are characterized by democratic decision-making, member ownership, and the distribution of profits among members based on their participation and contribution to the cooperative. Cooperative systems are designed to promote economic and social cooperation, often with the goal of improving the well-being of their members and the communities they serve.</p>
                <div className="flex items-start">
                {/* <Link to="/about-more" className="text-base font-semibold text-white bg-[#e52a37] py-2 px-8 rounded-lg   hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >Read More <i className="fas fa-arrow-right"></i></Link> */}
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default ProductFinanceDesc4;