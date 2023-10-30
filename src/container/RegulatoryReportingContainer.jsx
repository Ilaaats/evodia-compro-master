import React, {Component} from 'react';
import gambar4 from '../assets/image/gambar4.jpg'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class RegulatoryReportingContainer extends Component {
    state = { 
        img: gambar4,
        title:'Regulatory Reporting',
        desc: "We aim to support small and medium enterprise level to achieve faster growth in technology aspect by providing solution that meets customer’s budget",
     } 
    render() { 
        return (
            <div>
                <OurBusinessPageComp title={this.state.title} desc={this.state.desc} img={this.state.img}/>
            </div>
        );
    }
}
 
export default RegulatoryReportingContainer;