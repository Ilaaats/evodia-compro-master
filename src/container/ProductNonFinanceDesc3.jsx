import React, {Component} from 'react';
import gambar4_img from '../assets/image/gambar4.jpg'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductNonFinanceDesc3 extends Component {
    state = { 
        img: gambar4_img,
        title:'Data Specialist',
        desc:"A Data Specialist is a professional who specializes in working with data in various capacities. The role of a Data Specialist can vary significantly depending on the industry and organization they work for, but their primary focus is on managing and analyzing data to extract valuable insights and support decision-making. ",
    } 
    render() { 
        return (
            <div>
                <OurProductPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default ProductNonFinanceDesc3;