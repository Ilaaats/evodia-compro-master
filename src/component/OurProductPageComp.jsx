import React from 'react';
import Aos from 'aos';
import { useEffect } from 'react';

const OurProductPageComp = (props) => {
  useEffect(() => {
    Aos.init({});
  });
  return (
    // <div className="flex flex-wrap">
    <div className='relative'>
          <div className="absolute bottom-0 lg:top-0 right-0 bg-[#DFDFDF] w-[18.75rem] h-[37.438rem] -z-50"></div>
            <div className='flex flex-wrap gap-40 lg:grid lg:grid-cols-2 py-20 lg:py-8' data-aos="fade-up" data-aos-duration="3000">
                <div className="pl-20 place-self-center">
                    <p className='text-xl font-medium'>Our Product</p>
                    <p className='text-5xl font-semibold text-[#e52a37] py-5'>{props.title}</p>
                    <p className="text-xl" style={{whiteSpace: 'break-spaces'}}>{props.desc}</p>
                </div>
                <div className='place-self-end'>
                    <img className="w-[30rem] lg:mt-9 lg:right-0" src={props.img} alt="" />
                </div>
            </div>
        </div>
  );
};

export default OurProductPageComp;