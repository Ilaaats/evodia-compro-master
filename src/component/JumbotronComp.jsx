import React from 'react';
import homeImage from '../assets/image/beautiful-city.png';

const Jumbotron = () => {
    return (
            <div className="flex justify-center items-center bg-fixed bg-cover h-screen lg:h-screen bg-center bg-no-repeat" style={{ backgroundImage:`url(${homeImage})`}}>
                <div className="text-center text-stone-50" data-aos="fade-up" data-aos-duration="3000">
                    <p className="text-4xl lg:text-6xl">Sentral Teknologi Integrasi</p>
                    <p className="font-light text-2xl lg:text-4xl mt-3">Provide Technical Solution For Various Industry</p>
                    <p className="text-4xl lg:text-6xl"></p>
                </div>
            </div>
     );
}
 
export default Jumbotron;