import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { authLupaPassword } from '../redux/action/authAction';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import Button from '../modul/button';
export default function Forgot() {
  const dispatch = useDispatch();
  const [errorEmail, setErrorEmail] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  // const [errorPassword, setErrorPassword] = React.useState();
  let navigate = useNavigate();
  const [payload, setPayload] = React.useState({
    email: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setPayload((payload) => {
      return {
        ...payload,
        [e.target.name]: e.target.value,
      };
    });
  };

  let [messageError, setMessageError] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await dispatch(authLupaPassword(payload));
      console.log('response =>', response);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'success',
        title: response?.msg,
      });
      if (response?.response?.data?.status === 'Fail') {
        console.log(response?.response?.data?.errors?.email?.msg);
      } else {
        setErrorEmail(response?.response?.data?.msg);
        // setErrorPassword(response?.response?.data?.msg);
      }
      // alert("masih ada yg kosong Silahkan Isi doelu")
      if (payload.password === '') {
        // setErrorPassword('Password wajib diisi');
      } else if (payload.password.length < 8) {
        setErrorEmail('Password harus 8 karakter');
      }
      if (payload.email === '') {
        setErrorEmail('Email wajib diisi');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  console.log('payload =>', payload);
  return (
    <div className="bg-green-500 h-screen w-screen p-10 flex justify-center items-center">
      <div className="bg-white-500 h-5/4 w-1/2 mx-1/2 border border-black">
        <form
          className="w-full h-full flex flex-col justify-between"
          onSubmit={handleSubmit}
        >
          <div>
            <h3>Forgot Password</h3>
          </div>

          <div>
            <div className="mb-3 text-left p-2">
              <label>Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={payload.email}
              />
            </div>
            <p className="text-red-500">{errorEmail}</p>
          </div>

          <div>
            <div className="d-grid p-2 rounded-full">
              <button type="submit" className="bg-orange-500 text-white">
                {isLoading ? 'sedang berjalan' : 'Send'}
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-content-between">
              <p className="reset-password text-right">
                <a href="Reset">Reset password?</a>
              </p>
              <p className="Back text-left">
                <a href="/sign-up">Back to Login</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
