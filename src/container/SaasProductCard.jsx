import React, {Component} from 'react';
import ProductCardComp from '../component/LosCardComp';
import finance_img from '../assets/icon/financial-services.png';
import enterprise_img from '../assets/icon/enterprise_img.png';
import sme_img from '../assets/icon/sme_img.png';
import db_middle_img from '../assets/icon/db_middle_img.png';
import SaasProductCardComp from '../component/SaasProductCardComp';

class SaasProductCard extends Component {
    state = { } 
    render() { 
        const data = [
        
            {
                img: finance_img,
                title:'Smart Medic Solution',
                desc: "A smart medical solution typically refers to the application of modern technology, such as artificial intelligence, the Internet of Things (IoT), data analytics, and other advanced tools, to improve healthcare and medical services.",
                duration: 2000,
                redirect: "/sme-level"
            },
            {
                img: enterprise_img,
                title:' ILP (Integrated Loan Processing)',
                desc: "Integrated Loan Processing (ILP) typically refers to a comprehensive system or approach in the financial industry that streamlines and manages the entire loan origination and processing workflow.",
                duration: 2500,
                redirect: "/database-middleware"
            },

        ].map
        ( ({img, title, desc, duration, redirect}) => {
            return <SaasProductCardComp key={title} img={img} title={title} desc={desc} duration={duration} redirect={redirect}/>
        })
        return (
            <div id="our-business" className="p-12">
                <p className='text-4xl font-bold text-[#e52a37] text-center py-20' data-aos="fade-up" data-aos-duration="3000">SaaS (Software As a Service) Product</p>
                <div className="flex flex-wrap gap-6 lg:grid lg:grid-cols-2">
                    {data}
                </div>
            </div>
        );
        
    }
}

export default SaasProductCard