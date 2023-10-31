import React, {Component} from 'react';
import financial_services_img_img from '../assets/image/financial_services_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class FinancialContainer extends Component {
    state = { 
        img: financial_services_img_img,
        title:'Data Analytic',
        desc: "PT. Sentral Teknologi Integrasi has the relevant experience in supporting and managing all aspects of Big Data & Data Warehouse project. Our team comes with in-depth experience and a wide range of industry-specific applications and solutions. Big data analytics enables organizations to analyze a mix of structured, and unstructured data in search of valuable business information and insights",
            
    } 

    render() { 
        return (
            <div>
                <OurBusinessPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default FinancialContainer;