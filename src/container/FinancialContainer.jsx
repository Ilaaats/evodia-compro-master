import React, {Component} from 'react';
import financial_services_img_img from '../assets/image/financial_services_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class FinancialContainer extends Component {
    state = { 
        img: financial_services_img_img,
        title:'Financial Solutions',
        desc: "A well-integrated solutions framework and it’s implementation to support your business are provided such as Data warehouse, Business Intelligence, Middleware. \n\nWe are providing Oracle, PostgreSQL, SQL, Server and My SQL with 24/7 support from our team.",
    } 
    render() { 
        return (
            <div>
                <OurBusinessPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default FinancialContainer;