import React, {Component} from 'react';
import ProductCardComp from '../component/LosCardComp';
import finance_img from '../assets/icon/financial-services.png';
import enterprise_img from '../assets/icon/enterprise_img.png';
import sme_img from '../assets/icon/sme_img.png';
import db_middle_img from '../assets/icon/db_middle_img.png';
import MilpCardComp from '../component/MilpCardComp';
import RRCardComp from '../component/RRCardComp';
import FinancialCardComp from '../component/FinancialCardComp';

class FinancialCard extends Component {
    state = { } 
    render() { 
        const data = [
        
            {
                img: sme_img,
                title:'Data Warehouse',
                desc: "Has the relevant experience in supporting and managing all aspects of Big Data & Data Warehouse project. ",
                duration: 2000,
                redirect: "/sme-level"
            },
            {
                img: db_middle_img,
                title:'Big Data',
                desc: "Big data analytics enables organizations to analyze a mix of structured, and unstructured data in search of valuable business information and insights.",
                duration: 2500,
                redirect: "/database-middleware"
            },

        ].map
        ( ({img, title, desc, duration, redirect}) => {
            return <FinancialCardComp key={title} img={img} title={title} desc={desc} duration={duration} redirect={redirect}/>
        })
        return (
            <div id="our-business" className="p-12">
                <p className='text-4xl font-bold text-[#e52a37] text-center py-20' data-aos="fade-up" data-aos-duration="3000">Data Analytic Product</p>
                <div className="flex flex-wrap gap-6 lg:grid lg:grid-cols-2">
                    {data}
                </div>
            </div>
        );
        
    }
}

export default FinancialCard