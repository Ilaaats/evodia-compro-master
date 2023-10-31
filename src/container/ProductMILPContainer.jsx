import React, {Component} from 'react';
import db_middleware_img from '../assets/image/enterprise_level_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductMILPContainer extends Component {
    state = { 
        img: db_middleware_img,
        title:'Mobile-Loan Origination System',
        desc: "A Mobile Loan Origination System is a software application or platform that allows financial institutions, such as banks, credit unions, or online lenders, to facilitate the loan origination process through mobile devices.",
    } 
    render() { 
        return (
            <div>
                <OurProductPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default ProductMILPContainer;