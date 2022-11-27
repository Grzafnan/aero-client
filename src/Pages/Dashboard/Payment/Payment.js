import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';
import CheckOutForm from './CheckOutForm';

const Payment = () => {

  const { id } = useParams();
  console.log(id);

  const stripe = loadStripe(process.env.REACT_APP_PB_KEY);
  // console.log(stripeKey);

  const { data: booking, isLoading } = useQuery({
    queryKey: ['booking', id],
    queryFn: () => axios.get(`${process.env.REACT_APP_API_URL}/bookings/${id}`)
      .then(res => {
        const data = res?.data?.data;
        return data
      })
      .catch(err => console.log(err))
  })

  console.log(booking);

  if (isLoading) {
    return <Spinner />
  }


  return (
    <div className='container mx-auto px-6 md:px-6 lg:px-10'>
      <h1 className='text-2xl font-bold pt-11'>Payment for {booking?.brand} {booking?.name}</h1>
      <div className='w-96 mt-5 mb-10'>
        <Elements stripe={stripe}>
          <CheckOutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;