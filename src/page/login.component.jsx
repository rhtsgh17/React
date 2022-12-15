import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { loginProses } from 'react';
import { authLogin } from '../redux/action/authAction';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

export default function Login() {
  const dispatch = useDispatch();
  const [errorEmail, setErrorEmail] = React.useState();
  const [errorPassword, setErrorPassword] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  let navigate = useNavigate();

  const [payload, setPayload] = React.useState({
    email: '',
    password: '',
  });
  // const [isLoading, setIsLoading] =
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
      const response = await dispatch(authLogin(payload));
      console.log('response =>', response);
      if (response?.status === 'Success') {
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
        return navigate('/dashboard', { replace: true });
      }
      if (response?.response?.data?.status === 'Fail') {
        console.log(response?.response?.data?.errors?.email?.msg);
      } else {
        setErrorEmail(response?.response?.data?.msg);
        setErrorPassword(response?.response?.data?.msg);
      }
      alert('masih ada yg kosong Silahkan Isi doelu');
      if (payload.password === '') {
        setErrorPassword('Password wajib diisi');
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
      <div className="bg-white-500 h-2/3 w-1/2 border border-black">
        <form className="w-full h-full flex flex-col justify-between border border-black">
          <div>
            <h3>Login</h3>
          </div>

          <div>
            <div className=" text-left border border-black-500 p-3">
              <label>Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                value={payload.email}
                className="form-control"
                placeholder="Enter email"
              />
            </div>
            <p className="text-red-500">{errorEmail}</p>
            <div className="mb-3 text-left p-3">
              <label>Password</label>
              <input
                onChange={handleChange}
                value={payload.password}
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>
            <p className="text-red-500">{errorPassword}</p>
            <div className="d-grid p-3">
              <button
                type="submit"
                className="bg-orange-500 text-white"
                onClick={handleSubmit}
              >
                {isLoading ? 'sedang berjalan' : 'Login'}
              </button>
            </div>
          </div>

          <div>
            <div className="flex justify-content-between p-3">
              <p className="forgot-password text-right">
                <a href="forgot">Forgot password?</a>
              </p>
              <p className="Register text-left">
                <a href="/sign-up">Create an Account</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
