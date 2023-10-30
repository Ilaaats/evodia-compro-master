import React, {Component} from 'react'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import finance_img from '../assets/image/financial_services_img.png';

class MobileILPContainer extends Component {
    state = { 
        img: finance_img,
        title:'Bussines Aplication Development',
        desc: "PT. Sentral Teknologi Integrasi propose the concept of new application development using BPM (Business Process Management) and frame- work application development.  With the low-code platform, we can make our development fast and can be deployed with one click.",
     }
    render() {
        return (
            <div>
                <OurBusinessPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default MobileILPContainer;