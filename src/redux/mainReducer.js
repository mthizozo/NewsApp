let initialState = { isFetching: true, articles:[], hasError:false, errorMsg: "", userid: "", email: "", password: "", country: "" };


export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOGOUT':
        return {
          ...state,
          initialState,
        };
      case 'RETRIEVING_HEADLINES': {
        return {
          ...state,
          isFetching: true,
        };
      }
      case 'SET_COUNTRY': {
        return {
          ...state,
          country: action.country,
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


      case  'GET_HEADLINES':{
        console.log("getting headlines ...")
          let  articles  = action.payload.data.articles;
         
          return {...state, isFetching:false, articles, hasError:false};
      }

      case 'HEADLINES_ERROR':{
          const error = action.error;

          return {...state, isFetching:false, hasError:true, errorMsg:error};
      }
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
  