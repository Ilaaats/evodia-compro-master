import React, {Component} from 'react';
import db_middleware_img from '../assets/image/db_middleware_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class IlpLosContainer extends Component {
    state = { 
        img: db_middleware_img,
        title:'System Integrator',
        desc: "PT. Sentral Teknologi Integrasi is ready to help our customers to meet your business goals through the utilization of IT hardware that best fits your business needs. You can surely rely on us for smooth setup and integration of your infrastructure. ",
    } 
    render() { 
        return (
            <div>
                <OurBusinessPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default IlpLosContainer;