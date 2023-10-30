import React, {Component} from 'react';
import db_middleware_img from '../assets/image/sme_level_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductMILPDesc2 extends Component {
    state = { 
        img: db_middleware_img,
        title:'Digital Lending',
        desc: "Digital lending refers to the use of digital technology and online platforms to originate, process, underwrite, and manage loans. It is a financial technology (FinTech) innovation that has revolutionized the lending industry, making it more efficient, accessible, and convenient for both borrowers and lenders.",
    } 
    render() { 
        return (
            <div>
                <OurProductPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default ProductMILPDesc2;