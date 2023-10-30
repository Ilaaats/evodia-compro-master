import React, {Component} from 'react';
import BusinessCardComp from '../component/BusinessCardComp';
import finance_img from '../assets/icon/financial-services.png';
import enterprise_img from '../assets/icon/enterprise_img.png';
import sme_img from '../assets/icon/sme_img.png';
import db_middle_img from '../assets/icon/db_middle_img.png';

class OurBusiness extends Component {
    state = { } 
    render() { 
        const data = [
            {
                img: finance_img,
                title:'Integrated Loan Processing',
                desc: "PT. Sentral Teknologi Integrasi provides quality products and services while maintaining the highest levels of ethical standards approach to handling various aspects of the loan origination",
                duration: 1000,
                redirect: "/ILP"
            },
            {
                img: enterprise_img,
                title:'Mobile Integrated Loan Processing',
                desc: "provides quality products and services for mobile while maintaining the highest levels of integration",
                duration: 1500,
                redirect: "/MILP"
            },
            {
                img: sme_img,
                title:'Regulatory Reporting',
                desc: "Regulatory reporting is a process of collecting, organizing, and submitting financial data and information to regulatory authorities in compliance with established rules",
                duration: 2000,
                redirect: "/RR"
            },
            {
                img: db_middle_img,
                title:'Financial',
                desc: "Providing an extensive array of financial solutions is a hallmark of our commitment to helps individuals and businesses to achieve their unique financial aspirations",
                duration: 2500,
                redirect: "/financial-solutions"
            },
            
        ].map( ({img, title, desc, duration, redirect}) => {
            return <BusinessCardComp key={title} img={img} title={title} desc={desc} duration={duration} redirect={redirect}/>
        })
        return (
            <div id="our-business" className="p-12">
                <p className='text-4xl font-bold text-[#e52a37] text-center py-20' data-aos="fade-up" data-aos-duration="3000">Our Business Solutions</p>
                <div className="flex flex-wrap gap-6 lg:grid lg:grid-cols-4">
                    {data}
                </div>
            </div>
        );
    }
}
 
export default OurBusiness;