import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../../Components/Spinner/Spinner';
import CategoryServicesCard from './CategoryServicesCard';

const CategoryServices = () => {
  const { id } = useParams();

  const { data: services, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: () => axios.get(`${process.env.REACT_APP_API_URL}/services/${id}`)
      .then(res => {
        console.log(res?.data?.data);
        const data = res?.data?.data;
        return data
      })
      .catch(err => console.log(err))
  })

  console.log(services);


  if (isLoading) {
    return <Spinner />
  }

  return (
    <section className='my-10'>
      <h1 className='text-5xl font-bold text-center'>Category Cars</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 my-10'>
        {
          services?.map(service => <CategoryServicesCard
            key={service._id}
            service={service}
          />)
        }
      </div>
    </section>
  );
};

export default CategoryServices;