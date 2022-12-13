import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authResetPassword } from '../redux/action/authAction';
import Swal from 'sweetalert2';
export default function Reset() {
  let { id, token } = useParams();
  const dispatch = useDispatch();

  const [errorPassword, setErrorPassword] = React.useState();
  const [errorPasswordConfirm, setErrorPasswordConfrim] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false)
  let navigate = useNavigate();
  const [payload, setPayload] = React.useState({
    passwordBaru: '',
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
      setIsLoading(true)
      const response = await dispatch(authResetPassword(id, token, payload));
      console.log('response =>', response);
      if (response?.status === 'Success') {
        return navigate('/sign-in', { replace: true });
      }
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
        // setErrorEmail(response?.response?.data?.msg);
        setErrorPassword(response?.response?.data?.msg);
        setErrorPasswordConfrim(response?.response?.data?.msg);
      }
      // alert("masih ada yg kosong Silahkan Isi doelu")
      if (payload.password === '') {
        setErrorPassword('Password wajib diisi');
      } else if (payload.password.length < 8) {
        setErrorPassword('Password harus 8 karakter');
      }
      if (payload.email === '') {
        // setErrorEmail('Email wajib diisi');
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
      <div className="bg-white-500 h-3/3 w-1/2 mx-1/2 border border-black">
        <form onSubmit={handleSubmit}>
          <h3>Reset Password</h3>

          <div className="mb-3 text-left">
            <label>Password</label>
            <input
              onChange={handleChange}
              value={payload.passwordBaru}
              name="passwordBaru"
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <p className="text-red-500">{errorPassword}</p>
          <div className="mb-3 text-left">
            <label>Confirm Password</label>
            <input
              onChange={handleChange}
              value={payload.confirmPassword}
              name="confirmPassword"
              type="password"
              className="form-control"
              placeholder="Enter confirmPassword"
            />
          </div>
          <p className="text-red-500">{errorPasswordConfirm}</p>
          <div className="d-grid">
            <button
              type="submit"
              // onClick={handleSubmit}
              className="bg-orange-500 text-white"
            >
            {isLoading ? 'sedang berjalan' : 'Reset'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
