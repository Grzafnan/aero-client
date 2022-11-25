import React from 'react';
import { FcCalendar } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePriceChange, MdOutlinePriceCheck } from "react-icons/md";
import { FaCheckCircle, FaRegClock, FaRegUserCircle } from "react-icons/fa";

const CategoryServicesCard = ({ service, setIsOpen, setOrder }) => {

  const { brand, img, location, name, original_price, post_time, resale_price, seller_name, verification, years_of_use } = service;


  const handelSetOrder = (service) => {
    setOrder(service);
    setIsOpen(true);
  }


  return (
    <>
      <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg font-[Poppins]">
        <img className="object-cover object-center w-full h-56" src={img} alt={name} />
        <div className="px-6 py-4">

          <div className='flex items-center justify-between'>
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white"> {name} </h1>
            <div className="badge badge-outline badge-primary font-medium text-gray-900">{brand}</div>
          </div>

          <p className="py-2">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>


          <div className="flex items-center mt-2">
            <MdOutlinePriceChange className='w-6 h-6' />
            <h1 className="px-2 text-sm">Original Price:
              <span className='font-medium ml-1'>${original_price}</span></h1>
          </div>

          <div className="flex items-center mt-2">
            <MdOutlinePriceCheck className='w-7 h-7' />
            <h1 className="px-2 text-sm"> Sale Price:
              <span className='font-medium ml-1'>${resale_price}</span>
            </h1>
          </div>
          <div className="flex items-center mt-2">
            <FcCalendar className='w-5 h-5' />
            <h1 className="px-2 text-sm">
              {years_of_use} Used
            </h1>
          </div>
          <div className="flex items-center mt-2">
            <FaRegClock className='w-5 h-5' />
            <h1 className="px-2 text-sm">
              Posted Time: {post_time}
            </h1>
          </div>
          <div className="flex items-center mt-2">
            <GrLocation className='w-6 h-6' />
            <h1 className="px-2 text-sm">{location}</h1>
          </div>

          <div className="flex items-center mt-2">
            <FaRegUserCircle className='w-5 h-5' />
            <div className='flex items-center'>
              <h1 className="px-2 text-sm">{seller_name}</h1>
              {
                verification === "verified" && <>
                  <FaCheckCircle title='Verified' className='text-green-600 w-4 h-4' />  <span className='ml-1 text-sm text-green-600 '>Verified</span>
                </>
              }
            </div>
          </div>
          <div className='mt-3'>
            <button
              onClick={() => handelSetOrder(service)}
              className='btn-primary text-white h-10 w-full rounded-md transition-all ease-in-out duration-300'
            >Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryServicesCard;