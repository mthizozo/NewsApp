import axios from 'axios';
import {API_URL_, APP_ENV_} from '../config/config';


export const setCountry = (country) => {
  console.log("setting country", country)
  return {
    type: 'SET_COUNTRY',
    country: country,
  
  };
};

export const formUpdate = (prop, value) => {
    return {
      type: 'FORM_UPDATE',
      payload: {prop, value},
    };
  };

  export const register = ({userid, email, password, }) => {
    return async (dispatch) => {
 
      axios(`${API_URL_}/auth/register`, {
        method: 'POST',
        data: JSON.stringify({
          _USERID: userid,
          _EMAIL: email,
          _PASSWORD: password,
        }),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
        .then((response) => {
          if (response.data.data != null) {
            dispatch({type: 'REGISTER_FAIL', payload: response});
          } else {
            dispatch({type: 'REGISTER', payload: response});
          }
        })
        .catch((error) => {
          console.log('error', error);
          dispatch({type: 'INTERNAL_ERROR', payload: error});
        });
    };
  };

  export const getNewsHeadlines = ({c}) => {
 
    return (dispatch) => {
      dispatch({type: 'RETRIEVING_HEADLINES'});
      return new Promise((resolve, reject) => {
     console.log("country 3 is" , c)
      axios(`${API_URL_}/getHeadlines`, {
        method: 'POST',
        data: JSON.stringify({
            country: c,
          }),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
        .then((response) => {
          
          dispatch({type: 'GET_HEADLINES', payload: response});
          resolve();
        })
        .catch((error) => {
          console.log('error', error);
          reject();
          dispatch({type: 'HEADLINES_ERROR', payload: error});
        });
      });
    };
  };

  export const login = ({
    e,
    password,

  }) => {
    return  (dispatch) => {

      axios(`${API_URL_}/auth/login`, {
        method: 'POST',
        data: JSON.stringify({
          _USER_ID: e,
          _PASSWORD: password,
        }),
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      })
        .then((response) => {
          dispatch({type: 'LOGIN', payload: response});
        })
        .catch((error) => {
  
          console.log(error);
   
          dispatch({type: 'LOGIN_ERROR', payload: error});
        });
    };
  };

  export const logout = () => {
    return {
      type: 'LOGOUT',
    };
  };