import axios from 'axios';
import { useEffect, useState } from 'react';

const useRole = (email) => {
  const [role, setRole] = useState(null);
  const [isRoleLoading, setIsRoleLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('Aero-Token')}`
      }
    })
      .then(res => {
        setRole(res?.data?.data?.role);
        setIsRoleLoading(false)
      })
      .catch(err => {
        console.log(err);
      })
  }, [email])

  return [role, isRoleLoading]
};

export default useRole;