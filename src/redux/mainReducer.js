let initialState = { isFetching: true, articles:[], hasError:false, errorMsg: "", userid: "", email: "", password: "" };


export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOGOUT':
        return {
          ...state,
          initialState,
        };
      case 'START_LOADING': {
        return {
          ...state,
          loading: true,
        };
      }
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true,
          email: '',
          password: '',
          userid: action.payload.data.userid,
          token: action.payload.data.token,
          loginRes: action.payload,
 
        };
 
      case 'FORM_UPDATE':
        return {
          ...state,
          [action.payload.prop.prop]: action.payload.prop.value,
        };
 
 
      case 'INTERNAL_ERROR': {
        return {
          ...state,
          error: action.payload,
        };
      }
  
      case 'LOGIN_ERROR': {
        return {
          ...state,
          password: '',
          loginError: action.payload,
        };
      }
 
      case 'REGISTER':
        return {
          ...state,
          userid: '',
          email: '',
          password: '',
          result: action.payload.data.RESULT,
          data: action.payload.data,
        };
      case 'GET_HEADLINES':
        return {
          ...state,
          data: action.payload.data,
        };
      case 'REGISTER_FAIL': {
        return {
          ...state,
          data: action.payload.data,
        };
      }
      default:
        return state;
    }
  };
  