import React, {Component} from 'react';
import gambar4_img from '../assets/image/gambar4.jpg'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class SaasContainer extends Component {
    state = { 
        img: 'gambar4_img',
        title: 'SaaS (Software as a Services).',
        desc: "PT. Sentral Teknologi Integrasi offer a comprehensive set of Business Intelligence Services to help customers harness valuable data to improve decision-making, services and monitoring processFast, safe and simple is our technology philosophy to make our customers comfortable to connect with us.Software as a Service (SaaS) is a cloud computing model that provides software applications over the internet on a subscription basis. ",
    } 
    render() { 
        return (
            <div>
                <OurBusinessPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default SaasContainer;