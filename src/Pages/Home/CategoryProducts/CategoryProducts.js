import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <section>
      <h1 className='text-5xl font-bold text-center'>Category Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div>

        </div>
      </div>
    </section>
  );
};

export default CategoryProducts;