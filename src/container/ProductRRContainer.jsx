import React, {Component} from 'react';
import gambar5 from '../assets/image/gambar5.jpg'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductRRContainer extends Component {
    state = { 
        img: gambar5,
        title:'BI-Antasena',
        desc: "Integrated reporting system built jointly by BI, OJK and LPS. This reporting system integrates 6 (six) existing reports (LBU, LSMK, LBBUK, LBBUS, LHBU, and LKPBU) and is metadata-based to realize 'one data' for banking.",
    } 
    render() { 
        return (
            <div>
                <OurProductPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default ProductRRContainer;