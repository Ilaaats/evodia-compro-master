import React from 'react';
import { Link } from 'react-router-dom'

const MilpCardComp = (props) => {
    return ( 
        <div className='bg-[#e52a37] p-4 rounded-xl' data-aos="fade-up" data-aos-duration={props.duration} data-aos-offset="300">
            <div className='grid place-items-center text-center text-white py-8'>
                <img className="w-36" src={props.img} alt="" />
                <p className="text-xl font-semibold pt-8 pb-4">{props.title}</p>
                <p className='pb-5 text-sm'>{props.desc}</p>
                {/* <Link to={props.redirect} className="bg-[#FFD605] py-2 px-4 text-sm text-black font-semibold rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out">Read More</Link> */}
            </div>
        </div>
     );
}
 
export default MilpCardComp;