import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useAdmin } from '../../hooks/useAdmin';
import axios from 'axios';

const AllReports = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [isAdmin] = useAdmin(user?.email);

  const { data: allReports, isLoading } = useQuery({
    queryKey: ['allReports', user?.email],
    queryFn: () => axios.get(`${process.env.REACT_APP_API_URL}/all-reports/admin?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('Aero-Token')}`
      }
    })
      .then(res => {
        console.log('AllReports-', res?.data?.data);
        const data = res?.data?.data
        return data
      })
      .catch(err => {
        console.log(err)
      })
  })





  return (
    <div>
      <h1>All Reports</h1>
    </div>
  );
};

export default AllReports;