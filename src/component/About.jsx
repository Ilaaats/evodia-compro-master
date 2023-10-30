import React, { useEffect } from 'react';
import Gambar from '../assets/image/about-more.png';
import { Link } from 'react-router-dom';
import Aos from 'aos'

const About = () => {
    useEffect(() => {
        Aos.init({});
    })
  return (
    <div id="About" className="container lg:pt-14">
        <div className="flex flex-wrap">
            <div className="lg:pl-10 lg:w-1/2" data-aos="fade-up" data-aos-duration="3000">
                <div className="mt-10 lg:mt-9 lg:left-10">
                    <img src={Gambar} alt="" className='max-w-full mx-auto bg-cover'/>
                </div>
            </div>
            <div className="px-10 lg:pb-24 lg:pl-12 lg:w-1/2 lg:pt-24" data-aos="fade-up" data-aos-duration="3000">
                <p className='font-bold text-[#e52a37] text-left text-2xl mb-5 lg:text-4xl'>About Us</p>
                <p className='font-medium text-dark text-justify mb-10 leading-relaxed'>PT Sentral Teknologi Integrasi is a system integrator company with super dedication and knowledge and technical capability. With numerous backgrounds in IT industry, system integrator and IT consultant, our people have profound experience in the world of Information Technology. Despite the background from which our people embark on, we all have one sole mission and vision to assist our customer in software application innovation.</p>
                <div className="flex items-start">
                <Link to="/about-more" className="text-base font-semibold text-white bg-[#e52a37] py-2 px-8 rounded-lg   hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default About;