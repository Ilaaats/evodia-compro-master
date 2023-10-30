import React, {Component} from 'react';
import gambar5 from '../assets/image/gambar5.jpg'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import OurProductPageComp from '../component/OurProductPageComp';

class ProductRRContainer extends Component {
    state = { 
        img: gambar5,
        title:'BI-Antasena',
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
 
export default ProductRRContainer;