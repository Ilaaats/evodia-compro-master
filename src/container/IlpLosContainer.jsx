import React, {Component} from 'react';
import db_middleware_img from '../assets/image/db_middleware_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class IlpLosContainer extends Component {
    state = { 
        img: db_middleware_img,
        title:'Integrated Loan Processing',
        desc: "Is a modern platform dedicated to financial institutions that offer credit products for all types of customers via any sales channel. The design of our loan platform is based-on the proprietary solution, ILP Business Process Management. Thanks to this, all the parameters of a loan product, the process itself and the associated screens and printouts can be tailored according to the client’s needs. Moreover, the solution can be used to design and configure any kind of business processes.",
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