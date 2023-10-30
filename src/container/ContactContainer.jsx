import React, { useEffect } from 'react';
import Gambar from '../assets/image/about-frame.png';
import crm from '../assets/icon/WA_IMG.png';
import loc from '../assets/icon/location-preview.png';
import { Link } from 'react-router-dom';
import Aos from 'aos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faHippo } from '@fortawesome/free-solid-svg-icons'

const ContactContainer = () => {
    useEffect(() => {
        Aos.init({});
    })
  return (
    <div id="About" className="container lg:pt-14">
        <div className="flex flex-wrap">
            <div className="lg:pl-10 lg:w-1/2" data-aos="fade-up" data-aos-duration="3000">
                <div className="mt-10 lg:mt-9 lg:left-10 mb-20">
                    {/* <img src={Gambar} alt="" className='max-w-full mx-auto bg-cover'/> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.41818038064!2d106.76160587461801!3d-6.208444260813698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f725fb6f501d%3A0x4a41a24e31957c54!2sINFINITI%20OFFICE%20%7C%20Virtual%20Office%20Jakarta%20Barat!5e0!3m2!1sen!2sid!4v1696473392445!5m2!1sen!2sid" width={650} height={500} data-aos="fade-up" data-aos-duration="3000" ></iframe>
                </div>
            </div>
            <div className="px-10 lg:pb-24 lg:pl-12 lg:w-1/2 lg:pt-24" data-aos="fade-up" data-aos-duration="3000">
                <p className='font-bold text-[#e52a37] text-left text-2xl mb-5 lg:text-4xl'>Contact Us</p>
                <p className='font-medium text-dark text-justify mb-10 leading-relaxed'>PT Sentral Teknologi Integrasi Located in Infiniti Office Jakarta Barat. If you have questions or inquiries? Get in touch with us! Our dedicated team is ready to assist you. Contact us today for prompt and personalized support</p>
                <div className="flex items-start">
                {/* <Link to="https://api.whatsapp.com/send?phone=085893299552" target='_blank' className="text-base font-semibold text-white bg-[#e52a37] py-2 px-8 rounded-lg   hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mr-10"
                    >Contact Person<i className="fas fa-arrow-right"></i></Link> */}
                    <a href='https://api.whatsapp.com/send?phone=082158905002' target="_blank"><img src={crm} alt="" width={50} height={50} className="mr-10 mt-7 mb-10" type="button"></img></a>
                    <a href='https://www.google.com/maps/place/INFINITI+OFFICE+%7C+Virtual+Office+Jakarta+Barat/@-6.2084443,106.7616059,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f725fb6f501d:0x4a41a24e31957c54!8m2!3d-6.2084496!4d106.7641808!16s%2Fg%2F11dfpd9t2g?entry=ttu' target="_blank"><img src={loc} alt="" width={50} height={50} className="mr-10 mt-5 mb-7" type="button"></img></a>
                </div>
                <Link to="/about-more" className="text-base font-semibold text-white bg-[#e52a37] py-2 px-8 rounded-lg   hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out mt-7 "
                    >More Info...<i className="fas fa-arrow-right"></i></Link>
                    
            </div>
        </div>
    </div>
  );
};

export default ContactContainer;





// import React, { Component } from 'react';
// import AboutReadMore from '../assets/image/Group-6about.png';
// import Grey from '../assets/image/grey.png';
// import Aos from 'aos';

// class ContactContainer extends Component {
//   render(){
//     const aboutMore = {
//         title: 'Contact Us',
//         subtitle: 'Located At Infiniti Office Jakarta Barat',
//         desc: 'Is a system integrator company with super dedication and knowledge and technical capability. With numerous backgrounds in IT industry, system integrator and IT consultant, our people have profound experience in the world of Information Technology. Despite the background from which our people embark on, we all have one sole mission and vision to assist our customer in software application innovation.',
//         image: AboutReadMore,
//       }
//     Aos.init({});
//     return (
//       <section>
//         <div className="grid grid-cols-1 lg:grid lg:grid-cols-2">
//           <div className="pt-32">
//           <div className="relative top-96 right-8 lg:right-0 lg:top-0 py-36 lg:py-20 gap-40 lg:gap-0 lg:pt-12" data-aos="fade-up" data-aos-duration="3000">
//             <h2 className="px-20 text-left font-semibold text-xl">{aboutMore.title}</h2>
//             <h2 className="px-12 relative left-6 text-[#e52a37] text-5xl font-bold my-3">{aboutMore.subtitle}</h2>
//             <p className="text-justify text-xl pl-20 -tracking-tighter">{aboutMore.desc}</p>
//             <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=085893299552"><button className="py-2 px-4 bg-[#e52a37] text-white font-semibold rounded-lg shadow-md hover:bg-red-700 ml-20 mt-10">Contact Person</button></a>
//             {/* <button target="_blank" className="h-10 px-6 font-semibold rounded-md bg-[#e52a37] hover:bg-red-700 text-white ml-20 mt-10" type="button">
//           Contact Person
//         </button> */}
//             {/* <a href="https://www.google.com/maps" target="_blank" class="btn btn-primary">Location</a> */}
//           </div>
//             <div className="absolute right-0 top-36 mr-10">
//             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.41818038064!2d106.76160587461801!3d-6.208444260813698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f725fb6f501d%3A0x4a41a24e31957c54!2sINFINITI%20OFFICE%20%7C%20Virtual%20Office%20Jakarta%20Barat!5e0!3m2!1sen!2sid!4v1696473392445!5m2!1sen!2sid" width={650} height={500} data-aos="fade-up" data-aos-duration="3000" ></iframe>
//               {/* <img className="absolute right-0 top-36" src={aboutMore.image} alt="" data-aos="fade-up" data-aos-duration="3000" /> */}
//               {/* <span className="absolute top-12 lg:top-16 -z-10 right-0">
//                 <img src={Grey} alt="" />
//               </span> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default ContactContainer;