import React, { useContext } from 'react';
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ isOpen, closeModal, order }) => {
  const { user } = useContext(AuthContext)

  console.log(order);

  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const phone = form.phone.value;

    const booking = {
      brand: order.brand,
      name: order.name,
      userName: user?.displayName,
      userEmail: user?.email,
      location: location,
      phone: phone,
      price: order?.resellPrice,
      image: order?.img
    }
    axios.post(`${process.env.REACT_APP_API_URL}/bookings`, booking, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('Aero-Token')}`
      }
    })
      .then(res => {
        console.log(res);
        if (res?.data?.data?.acknowledged) {
          toast.success(`Successfully booked ${order?.brand} ${order?.name}`)
          closeModal();
        }
      })
      .catch(err => {
        console.log(err);
        toast.error(err?.response?.data?.message)
      })
  }


  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 " />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-2xl transition-all shadow-gray-900">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {order?.brand} {order?.name}
                  </Dialog.Title>
                  <div className="mt-2 font-[Poppins]">

                    <form onSubmit={handelSubmit}>
                      <div>
                        <label htmlFor="name" className='text-sm'>Name</label>
                        <input name='name' type="text" defaultValue={user?.displayName} className="input w-full border-1 placeholder:text-sm border-gray-900 focus:outline-none" disabled />
                      </div>

                      <div>
                        <label htmlFor="email" className='text-sm'>Email</label>
                        <input name='email' type="email"
                          defaultValue={user?.email}
                          className="input w-full border-1 placeholder:text-sm border-gray-900 focus:outline-none" disabled />
                      </div>

                      <div>
                        <label htmlFor="price" className='text-sm'>Price</label>
                        <input name='price' type='text' defaultValue={`$${order?.resellPrice
                          }`} className="input w-full border-1 placeholder:text-sm border-gray-900 focus:outline-none" disabled />
                      </div>

                      <div>
                        <label htmlFor="location" className='text-sm'>Meet Location</label>
                        <input name='location' type="text" placeholder="Write a location" className="input w-full border-1 placeholder:text-sm border-gray-900 focus:outline-none" required />
                      </div>

                      <div>
                        <label htmlFor="phone" className='text-sm'>Phone</label>
                        <input name='phone' type="number" placeholder="+880" className="input w-full border-1 placeholder:text-sm border-gray-900 focus:outline-none" required />
                      </div>

                      <div className="mt-4">
                        <input type="submit" value="Submit"
                          className="inline-flex justify-center rounded-md btn-primary text-white px-4 py-3 font-medium w-full transition-all duration-500 ease-in-out cursor-pointer"
                        />
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BookingModal;