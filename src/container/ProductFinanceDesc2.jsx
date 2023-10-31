import React, {Component} from 'react';
import db_middleware_img from '../assets/image/db_middleware_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductFinanceDesc2 extends Component {
    state = { 
        img: db_middleware_img,
        title:'MiGS (Payment Gateway)',
        desc: "Can authorize credit card processing, or direct payments for customers in online business activities. This Indonesian payment gateway can make transactions easier for business people and customers.",
    } 
    render() { 
        return (
            <div>
                <OurProductPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default ProductFinanceDesc2;