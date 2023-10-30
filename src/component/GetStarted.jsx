import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class GetStarted extends Component {
  render() {
    const mulai = {
      title: "Let's get started",
      desc: 'Are you ready for a better, more productive business?',
    };
    return (
      <section id="contact-us" className="bg-red-500 py-36 text-center">
        <div className="text-white flex flex-col gap-10">
          <p className="text-2xl lg:text-3xl font-mono" data-aos="fade-up" data-aos-duration="2000">
            {mulai.title}
          </p>
          <p className="text-5xl lg:text-7xl font-bold px-8 lg:px-0" data-aos="fade-up" data-aos-duration="3000">
            {mulai.desc}
          </p>
          <div data-aos="fade-up" data-aos-duration="3000">
            <Link to="/contact-us" className="text-base font-semibold py-2 px-5 text-white border-2 border-red-700 hover:bg-[#e52a37] hover:text-[#000000] rounded-lg transition duration-300 ease-in-out">
                Contact Us
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default GetStarted;