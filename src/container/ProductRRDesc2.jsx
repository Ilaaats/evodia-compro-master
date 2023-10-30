import React, {Component} from 'react';
import gambar7_img from '../assets/image/gambar7.jpg'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductRRDesc2 extends Component {
    state = { 
        img: gambar7_img,
        title:'Sistem Layanan Informasi Keuangan',
        desc: "A well-integrated solutions framework and it’s implementation to support your business are provided such as Data warehouse, Business Intelligence, Middleware. \n\nWe are providing Oracle, PostgreSQL, SQL, Server and My SQL with 24/7 support from our team.",
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