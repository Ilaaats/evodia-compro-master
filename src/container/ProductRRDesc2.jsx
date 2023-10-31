import React, {Component} from 'react';
import gambar7_img from '../assets/image/gambar7.jpg'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductRRDesc2 extends Component {
    state = { 
        img: gambar7_img,
        title:'Financial Information Services System',
        desc: "SLIK is an information system whose management aims to carry out supervisory duties and provide financial information services, one of which is in the form of providing debtor information (iDeb).",
    } 
    render() { 
        return (
            <div>
                <OurProductPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default ProductRRDesc2;