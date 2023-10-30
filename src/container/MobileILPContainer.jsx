import React, {Component} from 'react'
import OurBusinessPageComp from '../component/OurBusinessPageComp';
import finance_img from '../assets/image/financial_services_img.png';

class MobileILPContainer extends Component {
    state = { 
        img: finance_img,
        title:'Mobile Integrated Loan Processing',
        desc: "MILP in the context you're referring to, I recommend checking recent industry publications, websites, or contacting organizations or individuals directly involved in this field. Terms and acronyms in technology and finance can evolve, and new ones can emerge with time. Therefore, it's essential to access the most up-to-date information to understand their meanings and applications accurately.",
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