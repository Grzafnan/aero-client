import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const CategoryCard = ({ category }) => {

  const { categories_id, title, img, description } = category;

  return (
    <>
      <div className="card bg-base-100 shadow font-[Poppins]">
        <figure>
          <img src={img} className='h-60 w-full' alt={title} />
        </figure>
        <div className="card-body px-3 py-5">
          <h2 className="card-title">
            {title}
          </h2>
          <p className='text-justify text-[15px]'>
            {
              description?.length > 110 ? description.slice(0, 110) + "..." : description
            }
          </p>
          <div className="card-actions justify-center mt-1 w-full">
            <Link
              to={`/category/${categories_id}`}
              className="w-full"
            >
              {/* <button className="h-10 text-white rounded-lg w-full btn-primary">
                SEE MORE
              </button> */}

              <PrimaryButton>SEE MORE</PrimaryButton>
            </Link>
          </div>
        </div>
      </div >

    </>
  );
};

export default CategoryCard;