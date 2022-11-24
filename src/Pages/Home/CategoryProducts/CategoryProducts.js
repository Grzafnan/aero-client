import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1 className='text-5xl font-bold text-center'>Category Products</h1>
    </div>
  );
};

export default CategoryProducts;