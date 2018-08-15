//next is a reference to the next middleware in the chain
//next is also a function that pushes the action onto the next middleware
export default ({ dispatch }) => next => action => {
  //check to see if the action
  //has a promise on its 'payload' property
  //if it does then wait for it to resolve
  //if it doesn't, then send then action onto then
  //next middleware

  debugger;

  if(!action.payload || !action.payload.then){
    return next(action);
  }

  //We want to wait for the promis to resolve
  //(get its data) and then create a new action
  //with that data and dispatch it

  action.payload.then(function(response) {
    //grabs all props and data from the action
    //overwrite payload with new response
    const newAction = {...action, payload: response}
    dispatch(newAction);
  });

};
