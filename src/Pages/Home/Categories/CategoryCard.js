import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

  const { categories_id, title, img, description } = category;

  return (
    <>
      <div className="card bg-base-100 shadow">
        <figure>
          <img src={img} className='h-60 w-full' alt={title} />
        </figure>
        <div className="card-body px-3 py-5">
          <h2 className="card-title">
            {title}
          </h2>
          <p className='text-justify'>
            {
              description?.length > 120 ? description.slice(0, 120) + "..." : description
            }
          </p>
          <div className="card-actions justify-center mt-1 w-full">
            <Link
              to={`/category/${categories_id}`}
              className="w-full"
            >
              <button className="h-10 text-white rounded-lg w-full btn-primary">
                SEE MORE
              </button>
            </Link>
          </div>
        </div>
      </div >
    </>
  );
};

export default CategoryCard;