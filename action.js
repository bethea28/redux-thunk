import $ from "jquery";

const getUser = currentUser => ({
  type: 'GET_USER',
  data: currentUser,
})

const getUserServer = function(data){
 return function(dispatch){
 	console.log('im in getUserServer')
	  $.ajax({
	    url: 'http://localhost:8888/api/profile',
	    type: 'GET',
	    data: data,
	  })
	  .done(data => {
	    dispatch(getUser(data));
	  })
	  return Promise.resolve();
	}
}

export default {
	getUserServer: getUserServer
}