import React, {Component} from 'react';
import gambar10_img from '../assets/image/gambar10.jpg'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductFinanceContainer extends Component {
    state = { 
        img: gambar10_img,
        title:'Restrukturisasi Kredit',
        desc: "Restrukturisasi Kredit is an Indonesian term that translates to 'Credit Restructuring' in English. Credit restructuring refers to the process of modifying the terms and conditions of a loan or credit agreement between a borrower and a lender. This is typically done to help a borrower who is facing financial difficulties to make their loan payments more manageable",
    } 
    render() { 
        return (
            <div>
                <OurProductPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default ProductFinanceContainer;