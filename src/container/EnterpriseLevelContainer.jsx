import React, {Component} from 'react';
import enterprise_img from '../assets/image/enterprise_level_img.png'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class EnterpriseLevelContainer extends Component {
    state = { 
        img: enterprise_img,
        title:'Enterprise Level',
        desc: "The Scalability, complexity, and flexibility of Enterprise level business are always a significant considera-tion for every decision making. \n\nTherefore we are decided to provide IT-based business analysis solutin toward our customers to improve and optimize enter- prise- level businesses, human resources, and business performance through data maintenance capacity planning and IT Governance.",
    } 
    render() { 
        return (
            <div>
                <OurBusinessPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default EnterpriseLevelContainer;