import React, {Component} from 'react';
import gambar4 from '../assets/image/gambar4.jpg'
import OurBusinessPageComp from '../component/OurBusinessPageComp';

class RegulatoryReportingContainer extends Component {
    state = { 
        img: gambar4,
        title:'Data Security',
        desc: "Data security, also known as information security, is the practice of protecting digital data, both in transit and at rest, from unauthorized access, disclosure, alteration, or destruction. It is a critical aspect of information technology and is essential for safeguarding sensitive and confidential information. Data security encompasses various measures, technologies, and best practices aimed at ensuring the confidentiality, integrity, and availability of data. ",
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