import React from 'react';
import Aos from 'aos'
import { useEffect } from 'react';

const ContactComp = (props) => {
  useEffect(() => {
    Aos.init(({}))
  })
  return (
    <div className="flex flex-wrap lg:grid lg:grid-cols-2 gap-10">
      <div className="" data-aos="fade-up" data-aos-duration="3000">
        <img src={props.img} alt="" className='w-[70rem]' />
      </div>
      <div className="grid content-center" data-aos="fade-up" data-aos-duration="3000">
        <p className="text-4xl font-semibold text-[#e52a37]">{props.title}</p>
        <div className='grid grid-cols-1 gap-7 py-7'>
          <div className="flex justify-start items-start gap-8">
            <img src={props.icon1} alt="" width={40} />
            <p className="text-lg leading-tight w-64"><span className='font-bold'>{props.address}</span> {props.desc1}</p>
          </div>
          <div className="flex justify-start items-start gap-8">
            <img src={props.icon2} alt="" width={40} />
            <p className="text-lg break-normal">{props.desc2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;
