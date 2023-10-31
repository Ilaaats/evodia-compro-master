import React, {Component} from 'react';
import db_middleware_img from '../assets/image/db_middleware_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductILPContainer extends Component {
    state = { 
        img: db_middleware_img,
        title:'Loan Origination System',
        desc: "Manage loan origination and fulfillment processes. Manage pricing and eligibility for each loan. Manage the required documents for underwriting and closing. Interface with third-party systems for data/document exchange..",
    } 
    render() { 
        return (
            <div>
                <OurProductPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default ProductILPContainer;