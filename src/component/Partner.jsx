import React,{Component} from 'react';
import partner_img from "../assets/image/partner.png"
import veeam_img from "../assets/icon/Veeam_logo.svg.png"
import vmware_img from "../assets/icon/vmware-logo2.png"
import Red_Hat_img from "../assets/icon/Red_Hat.png"
import fujitsu_img from "../assets/icon/fujitsu-logo-D0B3363D55-seeklogo.com.png"
import Dell_EMC_img from "../assets/icon/Dell_EMC_logo.svg.png"
import vendor_img from "../assets/icon/vendor_logo.png"
import fortinet_img from "../assets/icon/fortinet_logo.png"
import trend_micro_img from "../assets/icon/trend_micro.png"
import gorilla_img from "../assets/icon/gorilla.png"
import oraclee_img from "../assets/icon/oraclee.png"
import Navbar from "../component/NavbarComp"

class Partner extends Component {
    state = {  } 
    render() { 
        return (
            <div className='bg-center bg-cover bg-no-repeat text-center bg-fixed' style={{ backgroundImage:`url(${partner_img})`}}>
                <div className='bg-white/70 py-16'>
                    <p className='text-4xl font-bold py-3' data-aos="fade-zoom-in" data-aos-delay="200">We are Not Alone</p>
                    <p className='text-3xl font-light' data-aos="fade-zoom-in" data-aos-delay="200">Along the journey, we create an amazing experience together <br /> with our partner</p>
                    <div className='flex flex-col justify-content:space-between items-center py-20'>
                        <div className="flex flex-wrap justify-content:space-between lg:grid lg:grid-cols-4 gap-24">
                            <img src={oraclee_img} alt="img_1" width={300} data-aos="fade-up" data-aos-duration="2000"/>
                            <img src={veeam_img} alt="img_2" width={250} height={100}data-aos="fade-up" data-aos-duration="2000"/>
                            <img src={vmware_img} alt="img_3" width={300}height={100} data-aos="fade-up" data-aos-duration="2000"/>
                            <img src={Dell_EMC_img} alt="img_4" width={250}height={100} data-aos="fade-up" data-aos-duration="2000"/>
                           

                        </div>
                        <div className="flex flex-wrap justify-content:space-between lg:grid lg:grid-cols-3 gap-24">
                            <img src={Red_Hat_img} alt="img_5" width={300} height={100} data-aos="fade-up" data-aos-duration="2000"/>
                            <img src={fortinet_img} alt="img_6" width={300} data-aos="fade-up" data-aos-duration="2000"/>
                            <img src={fujitsu_img} alt="img_7" width={200} height={100} data-aos="fade-up" data-aos-duration="2000"/>
                           
                        </div>
                     
                        <div className="flex flex-wrap justify-conten:space between lg:grid lg:grid-cols-3 gap-24">
                        <img src={vendor_img} alt="img_8" width={120} data-aos="fade-up" data-aos-duration="2000"/>
                        <img src={gorilla_img} alt="img_9" width={150} data-aos="fade-up" data-aos-duration="2000"/>
                        <img src={trend_micro_img} alt="img_10" width={250} data-aos="fade-up" data-aos-duration="2000"/>
                    </div>
                    
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Partner;