import React, {Component} from 'react';
import db_middleware_img from '../assets/image/db_middleware_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductNonFinanceContainer extends Component {
    state = { 
        img: db_middleware_img,
        title:'E-Procurement System',
        desc: "An E-Procurement System, short for Electronic Procurement System, is a technology-driven platform or software solution that facilitates and streamlines the procurement process for organizations, businesses, and government agencies. E-procurement systems are designed to manage the purchasing of goods and services, making the process more efficient, cost-effective, and transparent. ",
    } 
    render() { 
        return (
            <div>
                <OurProductPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default ProductNonFinanceContainer;