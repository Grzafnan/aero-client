import React from 'react';
import { FcCalendar } from "react-icons/fc";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePriceChange, MdOutlinePriceCheck } from "react-icons/md";
import { FaCheckCircle, FaRegClock, FaRegUserCircle } from "react-icons/fa";
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';


const CategoryServicesCard = ({ service }) => {

  const { brand, img, location, name, original_price, post_time, resale_price, seller_name, verification, years_of_use } = service;

  return (
    <>
      <div class="w-full overflow-hidden bg-white rounded-lg shadow-lg font-[Poppins]">
        <img class="object-cover object-center w-full h-56" src={img} alt={name} />
        <div class="px-6 py-4">

          <div className='flex items-center justify-between'>
            <h1 class="text-xl font-semibold text-gray-800 dark:text-white"> {name} </h1>
            <div className="badge badge-outline badge-primary font-medium text-gray-900">{brand}</div>
          </div>

          <p class="py-2">Full Stack maker & UI / UX Designer , love hip hop music Author of Building UI.</p>


          <div class="flex items-center mt-2">
            <MdOutlinePriceChange className='w-6 h-6' />
            <h1 class="px-2 text-sm">Original Price:
              <span className='font-medium ml-1'>${original_price}</span></h1>
          </div>

          <div class="flex items-center mt-2">
            <MdOutlinePriceCheck className='w-7 h-7' />
            <h1 class="px-2 text-sm"> Sale Price:
              <span className='font-medium ml-1'>${resale_price}</span>
            </h1>
          </div>
          <div class="flex items-center mt-2">
            <FcCalendar className='w-5 h-5' />
            <h1 class="px-2 text-sm">
              {years_of_use} Used
            </h1>
          </div>
          <div class="flex items-center mt-2">
            <FaRegClock className='w-5 h-5' />
            <h1 class="px-2 text-sm">
              Posted Time: {post_time}
            </h1>
          </div>
          <div class="flex items-center mt-2">
            <GrLocation className='w-6 h-6' />
            <h1 class="px-2 text-sm">{location}</h1>
          </div>

          <div class="flex items-center mt-2">
            <FaRegUserCircle className='w-5 h-5' />
            <div className='flex items-center'>
              <h1 class="px-2 text-sm">{seller_name}</h1>
              {
                verification === "verified" && <>
                  <FaCheckCircle title='Verified' className='text-green-600 w-4 h-4' />  <span className='ml-1 text-sm text-green-600 '>Verified</span>
                </>
              }
            </div>
          </div>
          <div className='mt-3'>
            <PrimaryButton>Book Now</PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryServicesCard;