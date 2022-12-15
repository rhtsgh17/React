import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { authRegister } from '../redux/action/authAction';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
export default function SignUp() {
  const dispatch = useDispatch();
  const [errorEmail, setErrorEmail] = React.useState();
  const [errorPassword, setErrorPassword] = React.useState();
  const [errorName, setErrorName] = React.useState();
  const [errorPasswordConfirm, setErrorPasswordConfrim] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  let navigate = useNavigate();
  const [payload, setPayload] = React.useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    status: '',
    jenisKelamin: '',
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
      const response = await dispatch(authRegister(payload));
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
        return navigate('/sign-in', { replace: true });
      }
      if (response?.response?.data?.status === 'fail') {
        console.log(response?.response?.data?.errors?.email?.msg);
        console.log(response?.response?.data?.errors?.status?.msg);
        console.log(response?.response?.data?.errors?.jenisKelamin?.msg);
        console.log(response?.response?.data?.errors?.password?.msg);
        console.log(response?.response?.data?.errors?.passwordConfirm?.msg);
      } else {
        setErrorEmail(response?.response?.data?.msg);
        setErrorPassword(response?.response?.data?.msg);
        setErrorName(response?.response?.data?.msg);
        setErrorPasswordConfrim(response?.response?.data?.msg);
      }
      
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
      <div className="bg-white-500 h-3/3 w-1/2 mx-1/2 border border-blue-400">
        <form onSubmit={handleSubmit}>
          <h3>Register</h3>

          <div className="mb-3 text-left p-2">
            <label> name</label>
            <input
              onChange={handleChange}
              name="name"
              type="name"
              className="form-control"
              placeholder="name"
              value={payload.name}
            />
          </div>
          <p className="text-red-500">{errorName}</p>
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
          <div className="mb-3 text-left p-2">
            <label>Password</label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={payload.password}
            />
          </div>
          <p className="text-red-500">{errorPassword}</p>
          <div className="mb-3 text-left p-2">
            <label>PasswordConfirm</label>
            <input
              onChange={handleChange}
              name="passwordConfirm"
              type="password"
              className="form-control"
              placeholder="Enter passwordConfirm"
              value={payload.passwordConfirm}
            />
          </div>
          <p className="text-red-500">{errorPasswordConfirm}</p>
          <div className="mb-3 text-left p-2">
            <label>Status</label>

            <select
              name="status"
              id="status"
              className=""
              onChange={handleChange}
              value={payload.status}
            >
              <option
                typeof="enum"
                value="active"
                name={'status'}
                className="bg-black-500"
              >
                Active
              </option>
              <option
                typeof="enum"
                value="nonactive"
                name={'status'}
                className="bg-black-500"
              >
                non Active
              </option>
            </select>
          </div>

          <div className="mb-3 text-left p-2">
            <label>Jenis Kelamin</label>

            <select
              name="jenisKelamin"
              id="select"
              className=""
              onChange={handleChange}
              value={payload.jenisKelamin}
            >
              <option value="laki-laki" className="bg-black-500">
                laki-laki
              </option>
              <option value="perempuan" className="bg-black-500">
                perempuan
              </option>
            </select>
          </div>

          <div className="d-grid p-2">
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-orange-500 text-white"
            >
                 {isLoading ? 'sedang berjalan' : 'Register'}
            </button>
          </div>
          <p className="Register text-left p-2">
            <a href="/sign-in">Back to Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
