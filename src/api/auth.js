import axios from 'axios';
import toast from 'react-hot-toast';

//   Save user in db & get token
export const savedUserDB = (name, email, role) => {

  const user = {
    name,
    email,
    role,
  }

  axios.post(`${process.env.REACT_APP_API_URL}users`, user)
    .then(res => {
      if (res?.data?.data?.acknowledged) {
        console.log(res);
        // localStorage.setItem('Aero-Token')
      }
    }).catch(err => {
      console.log(err);
    })
}

