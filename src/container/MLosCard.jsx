import React, {Component} from 'react';
import ProductCardComp from '../component/LosCardComp';
import finance_img from '../assets/icon/financial-services.png';
import enterprise_img from '../assets/icon/enterprise_img.png';
import sme_img from '../assets/icon/sme_img.png';
import db_middle_img from '../assets/icon/db_middle_img.png';
import MilpCardComp from '../component/MilpCardComp';

class MLosCard extends Component {
    state = { } 
    render() { 
        const data = [
            
           
               
            
            {
                img: enterprise_img,
                title:' Web-based Application',
                desc: "Modernize and Streamline Profitable Lending Growth Without Disruption",
                duration: 1500,
                redirect: "/enterprise-level"
            },
           
          
            {
                img: db_middle_img,
                title:' Mobile Application',
                desc: "Automated risk assessment and credit risk on a flexible and scalable software platform",
                duration: 2500,
                redirect: "/database-middleware"
            },

        ].map
        ( ({img, title, desc, duration, redirect}) => {
            return <MilpCardComp key={title} img={img} title={title} desc={desc} duration={duration} redirect={redirect}/>
        })
        return (
            <div id="our-business" className="p-12">
                <p className='text-4xl font-bold text-[#e52a37] text-center py-20' data-aos="fade-up" data-aos-duration="3000">Bussines Aplication Development Product</p>
                <div className="flex flex-wrap gap-6 lg:grid lg:grid-cols-2">
                    {data}
                </div>
            </div>
        );
    }
}

export default MLosCard