import React, {Component} from 'react';
import db_middleware_img from '../assets/image/db_middleware_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductILPDesc2 extends Component {
    state = { 
        img: db_middleware_img,
        title:'Loan Collection System',
        desc: "Collection System is a customer-centric, web-based and workflow-driven solution that enables banking and financial companies to manage, monitor and control delinquent loan accounts and automate loan collection management frameworks.",
    } 
    render() { 
        return (
            <div>
                <OurProductPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default ProductILPDesc2;