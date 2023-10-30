import React, { useEffect } from 'react';
import regulary from '../assets/icon/regulary.png';
import e_procurement from '../assets/icon/e-procurement.png';
import crm from '../assets/icon/crm.png';
import hr from '../assets/icon/hr.png';
import cash from '../assets/icon/cash-manage.png';
import Aos from 'aos';

const Product = () => {
  useEffect(() => {
    Aos.init({});
  });
  return (
    <div id="our-product" className="px-6 lg:px-20 py-20 lg:py-24 bg-zinc-50 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
        <p className='text-4xl lg:text-4xl pb-10 font-bold text-[#e52a37] text-center' data-aos="fade-up" data-aos-duration="2000">Our Product</p>
        <div className="grid grid-rows-2 gap-6 text-center">
            <div className="w-full flex flex-wrap gap-6 lg:grid lg:grid-cols-3">
                <div className="bg-[#EEEEEE] grid grid-rows-3 place-content-center gap-2 px-28 lg:px-10 py-5 rounded-xl" data-aos="fade-up" data-aos-duration="3000">
                    <img className='w-28 row-span-2 place-self-center' src={e_procurement} alt="" />
                    <p className='text-xl font-bold'>ILP</p>
                    <a href='/product-ILP'><button className="py-2 px-4 bg-[#e52a37] text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">More Info</button></a>
                </div>
                <div className="bg-[#EEEEEE] grid grid-rows-3 place-content-center gap-2 px-24 lg:px-10 py-5 rounded-xl" data-aos="fade-up" data-aos-duration="3000">
                        <img className='w-28 row-span-2 place-self-center' src={cash} alt="" />
                        <p className='text-xl font-bold'>MILP</p>
                        <a href='/product-MILP'><button className="py-2 px-4 bg-[#e52a37] text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">More Info</button></a>
                    </div>
                <div className="bg-[#EEEEEE] grid grid-rows-3 place-content-center gap-2 px-24 lg:px-10 py-5 rounded-xl" data-aos="fade-up" data-aos-duration="3000">
                    <img className='w-28 row-span-2 place-self-center' src={regulary} alt="" />
                    <p className='text-xl font-bold'>Regulatory Reporting</p>
                    <a href='/product-RR'><button className="py-2 px-4 bg-[#e52a37] text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">More Info</button></a>
                </div>


            </div>
            
            <div className="w-full lg:gap-6 lg:grid lg:grid-cols-6">
                <div className="col lg:col-start-2 lg:col-span-2">

                    <div className="bg-[#EEEEEE] grid grid-rows-3 place-content-center gap-2 px-10 py-5 rounded-xl" data-aos="fade-up" data-aos-duration="3000">
                    <img className='w-28 row-span-2 place-self-center' src={crm} alt="" />
                    <p className='text-xl font-bold'>Financial Product</p>
                    <a href='/Product-Finance'><button className="py-2 px-4 bg-[#e52a37] text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">More Info</button></a>
                    </div>
                    
                </div>
                <div className="col pt-6 lg:pt-0 lg:col-start-4 lg:col-span-2">

                    <div className="bg-[#EEEEEE] grid grid-rows-3 place-content-center gap-2 px-24 lg:px-10 py-5 rounded-xl" data-aos="fade-up" data-aos-duration="3000">
                    
                        <img className='w-28 row-span-2 place-self-center' src={hr} alt="" />
                        <p className='text-xl font-bold'>Non Financial Product</p>
                        <a href='/Product-NonFinance'><button className="py-2 px-4 bg-[#e52a37] text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">More Info</button></a>

                    </div> 
                </div>
        </div>
    </div>
</div>
  );
};

export default Product;