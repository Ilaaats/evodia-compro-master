import React, { Component } from 'react';
import gambar3 from '../assets/image/gambar3.jpg';
import Aos from 'aos';

class FinancialDetail extends Component{
    render(){
        const images ={
            image:gambar3,
        }
        const vission = {
            title:"Core System BPR",
            desc:"provides a comprehensive service of loan processes and enables business administrators in the financial institution to independently manage all of the elements of the processes"
        }
        const mission = {
            title:"Core System Koperasi",
            desc:"provides a comprehensive service of loan processes and enables business administrators in the financial institution to independently manage all of the elements of the processes"
        }
        Aos.init({});
        return (
          <div className="bg-[#DFDFDF]">
            <div className="flex flex-wrap lg:grid lg:grid-cols-2">
              <div className="pt-10">
                <div className="lg:py-12 lg:px-12 py-6 px-6" data-aos="fade-up" data-aos-duration="1000">
                  <img src={images.image} alt="" />
                </div>
              </div>
              <div className="pt-4 lg:pt-10 px-10 lg:px-0">
                <div className="" data-aos="fade-up" data-aos-duration="2000">
                  <h1 className="text-5xl text-[#e52a37] font-semibold text-left relative top-20">{vission.title}</h1>
                  <h1 className="text-black text-left tracking-wide py-24 text-2xl">{vission.desc}</h1>
                </div>
                <div className="relative bottom-12" data-aos="fade-up" data-aos-duration="3000">
                <h1 className="text-5xl text-[#e52a37] font-semibold text-left relative top-20">{mission.title}</h1>
                  <h1 className="text-black text-left tracking-wide py-24 text-2xl">{mission.desc}</h1>
                </div>
              </div>
            </div>
          </div>
        );
    }
};
export default FinancialDetail;