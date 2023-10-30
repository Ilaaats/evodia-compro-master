import React, {Component} from 'react';
import db_middleware_img from '../assets/image/db_middleware_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class IlpLosContainer extends Component {
    state = { 
        img: db_middleware_img,
        title:'System Integrator',
        desc: "A system integrator is a company or individual that specializes in bringing together different hardware and software components to create a unified and functioning system or network. Their primary goal is to ensure that all the various systems, applications, and technologies used within an organization work harmoniously and efficiently.",
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