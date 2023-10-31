import React, { useEffect } from 'react';
import Gambar from '../assets/image/gambar8.jpg';
import { Link } from 'react-router-dom';
import Aos from 'aos'

const Spesifikasi = () => {
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
                <p className='font-bold text-[#e52a37] text-left text-2xl mb-5 lg:text-4xl'>Specifications</p>
                <p className='font-medium text-dark text-justify mb-10 leading-relaxed'>PT. The Integration Technology Center also pays great attention to the ability of professional staff to participat as well as developing competencies by involving our experts to be able to participate in seminars, workshops, training and also take part expertise certification to support the added value of PT. Integration Technology Center.</p>
                <p className='font-medium text-dark text-justify mb-10 leading-relaxed'>With the capabilities of the professional staff currently possessed, the PT. Central Integration Technology can contribute to providing (professional) services services) in transferring technology (transferring knowledge) to clients. As for expertise Information Technology owned by the PT team. The Integration Technology Center consists of 2 (two) parts,namely: expertise in Management and expertise in Technical.</p>            
                <div className="flex items-start">
                {/* <Link to="/about-more" className="text-base font-semibold text-white bg-[#e52a37] py-2 px-8 rounded-lg   hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >Read More <i className="fas fa-arrow-right"></i></Link> */}
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default Spesifikasi;