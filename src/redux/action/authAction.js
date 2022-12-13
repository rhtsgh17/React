import Cookies from 'js-cookie';
import {
  authMeProcess,
  LoginProses,
  LupaPasswordProses,
  RegisterProses,
  ResetPasswordProses,
} from '../../API/login_API/auth';

export function authLogin(payload) {
  return async (dispatch) => {
    try {
      let response = await LoginProses(payload);
      // let response = await authMeProcess();
      let data = response.data;
      console.log('dataAuthAction =>', data);

      dispatch({
        type: 'login',
        name: data?.user?.name,
        email: data?.user?.email,
        password: data?.user?.password,
        status: data?.user?.status,
        jenisKelamin: data?.user?.jenisKelamin,
        isAuth: true,
      });

      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log('auth error =>', err);
      return err;
    }
  };
}

export function authMe(payload) {
  return async (dispatch) => {
    try {
      // let response = await LoginProses(payload);
      let response = await authMeProcess();
      let data = response.data;
      console.log('data =>', data);

      dispatch({
        type: 'login',
        name: data?.user?.name,
        email: data?.user?.email,
        password: data?.user?.password,
        status: data?.user?.status,
        jenisKelamin: data?.user?.jenisKelamin,
        isAuth: true,
      });

      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log('auth error =>', err);
      return err;
    }
  };
}

export function authRegister(payload) {
  return async (dispatch) => {
    try {
      let response = await RegisterProses(payload);
      let data = response.data;
      console.log('data', data);
      dispatch({
        type: 'register',
        name: data?.user?.name,
        email: data?.user?.email,
        password: data?.user?.password,
        status: data?.user?.status,
        jenisKelamin: data?.user?.jenisKelamin,
        isAuth: true,
      });
      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log('auth error =>', err);
      return err;
    }
  };
}

export function authLupaPassword(payload) {
  return async (dispatch) => {
    try {
      let response = await LupaPasswordProses(payload);
      let data = response.data;
      console.log('data', data);
      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log('auth error =>', err);
      return err;
    }
  };
}

export function authResetPassword(id, token, payload) {
  return async (dispatch) => {
    try {
      let response = await ResetPasswordProses(id, token, payload);
      let data = response.data;
      console.log('data', data);
      Cookies.set('myapps_token', data?.token);
      return data;
    } catch (err) {
      console.log('auth error =>', err);
      return err;
    }
  };
}
