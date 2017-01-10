import {combineReducers} from 'redux';

/*****IMORT YOUR REDUCER HERE!!!*****/
const user = (state = false, action) => {
  switch (action.type) {
  	case "GET_USER":
  		return action.data
    default:
    	return state
  }
}


/*****ADD YOUR REDUCER TO THIS OBJECT REMEMBER WHAT YOU NAME IT HERE IS WHAT IT WILL BE NAMED IN THE STORE!!!*****/
const reducers = {
	user: user,
}


const reducer = combineReducers(reducers);

export default reducer;