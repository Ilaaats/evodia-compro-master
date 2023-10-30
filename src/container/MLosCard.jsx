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
                img: finance_img,
                title:'Mobile Loan Origination System',
                desc: "Decrease application turnaround time, launch new products quickly and proactively manage risk through ILP-LOS",
                duration: 1000,
                redirect: "/ILP-LOS"
            },
            {
                img: enterprise_img,
                title:'Mobile Loan Collection System',
                desc: "Modernize and Streamline Profitable Lending Growth Without Disruption",
                duration: 1500,
                redirect: "/enterprise-level"
            },
            {
                img: sme_img,
                title:'Digital Lending',
                desc: "End-to-end debt collection system with Business Process Management (BPM)",
                duration: 2000,
                redirect: "/sme-level"
            },
            {
                img: db_middle_img,
                title:'Pay Later System',
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
                <p className='text-4xl font-bold text-[#e52a37] text-center py-20' data-aos="fade-up" data-aos-duration="3000">Mobile-ILP Product</p>
                <div className="flex flex-wrap gap-6 lg:grid lg:grid-cols-4">
                    {data}
                </div>
            </div>
        );
    }
}

export default MLosCard