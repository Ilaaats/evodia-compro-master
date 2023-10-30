import React, { Component } from 'react';
import AboutReadMore from '../assets/image/Group-6about.png';
import Grey from '../assets/image/grey.png';
import Aos from 'aos';

class AboutMoreContainer extends Component {
  render(){
    const aboutMore = {
        title: 'About Us',
        subtitle: 'Sentral Teknologi Integrasi',
        desc: 'Is a system integrator company with super dedication and knowledge and technical capability. With numerous backgrounds in IT industry, system integrator and IT consultant, our people have profound experience in the world of Information Technology. Despite the background from which our people embark on, we all have one sole mission and vision to assist our customer in software application innovation.',
        image: AboutReadMore,
      }
    Aos.init({});
    return (
      <section>
        <div className="grid grid-cols-1 lg:grid lg:grid-cols-2">
          <div className="pt-32">
          <div className="relative top-96 right-8 lg:right-0 lg:top-0 py-36 lg:py-20 gap-40 lg:gap-0 lg:pt-12" data-aos="fade-up" data-aos-duration="3000">
            <h2 className="px-20 text-left font-semibold text-xl">{aboutMore.title}</h2>
            <h2 className="px-12 relative left-6 text-[#e52a37] text-5xl font-bold my-3">{aboutMore.subtitle}</h2>
            <p className="text-justify text-xl pl-20 -tracking-tighter">{aboutMore.desc}</p>
          </div>
            <div className="">
              <img className="absolute right-0 top-36" src={aboutMore.image} alt="" data-aos="fade-up" data-aos-duration="3000" />
              {/* <span className="absolute top-12 lg:top-16 -z-10 right-0">
                <img src={Grey} alt="" />
              </span> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMoreContainer;
