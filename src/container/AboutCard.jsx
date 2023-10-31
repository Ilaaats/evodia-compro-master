import React, { Component } from 'react'
import Hand from '../assets/icon/hand.png';
import Machine from '../assets/icon/mechine.png';
import Lamp from '../assets/icon/lamp.png';
import Aos from 'aos';

class AboutCard extends Component {
    render(){
      const deskripsi = {
        important: 'Sentral Teknologi Integrasi',
        words:'Will provide business transformation that will bring the value added to the customers.'
      }
      const deskripsi2 = {
        important: 'Sentral Teknologi Integrasi',
        words:'provide quality product and service while maintaining the highest levels of ethnical standards. Our quality assurance system ensures continual process improve-ment, innovation, training teamwork and the willingness to changes and move forward.'
      }
      const deskripsi3 = {
        important: 'Sentral Teknologi Integrasi',
        words:'commits to maintain innovation and offer solutions and services in order to efficiency, agility and customer’s productivity. As one of the fully technology knowledge for implementing the-state-art-solution.'
      }
      Aos.init({});
      return (
        <section className="bg-white py-56 lg:py-0">
          <div className="px-6 py-4 lg:px-20  lg:py-56">
            <div className="grid grid-cols-1 lg:grid gap-4  lg:grid-cols-3 pt-20 lg:pt-0 lg:h-96">
              <div className="border-2 grid-cols-1 rounded-lg border-red-600" data-aos="fade-up" data-aos-duration="1000">
                <img className="px-32 py-14" src={Hand} alt="" items-center />
                <p className="relative bottom-5 text-center px-12"><span className="text-black text-center font-bold">{deskripsi.important}</span> {deskripsi.words}</p>
              </div>
              <div className="border-2 rounded-lg border-red-600" data-aos="fade-up" data-aos-duration="2000">
                <img className="px-32 py-14" src={Machine} alt="" />
                <p className="relative bottom-5 text-center px-12">
                <span className='text-black font-bold'>{deskripsi2.important}</span> {deskripsi2.words}
                </p>
              </div>
              <div className="border-2 rounded-lg border-red-600" data-aos="fade-up" data-aos-duration="3000">
                <img className="px-32 py-14" src={Lamp} alt="" />
                <p className="relative bottom-5 text-center px-12">
                <span className='text-black font-bold'>{deskripsi3.important}</span> {deskripsi3.words}
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    }
  };

export default AboutCard