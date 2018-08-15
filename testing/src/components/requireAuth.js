import React, {Component} from 'react';
import {connect} from 'react-redux';

//High order component
//To determine whether a component should be a HOC or not
//Check if any code in your components is being used multiple times and write HOC creating reusable code
export default ChildComponent => {
  class ComposedComponent extends Component {

    componentDidMount(){
      this.shouldNavigateAway();
    }

    componentDidUpdate(){
      this.shouldNavigateAway();
    }

    shouldNavigateAway(){
      if(!this.props.auth){
        this.props.history.push('/');
      }
    }

    render(){
      return(
        <ChildComponent  {...this.props} />
      );
    }
  }

  function mapStateToProps(state){
    return {auth: state.auth};
  }

  return connect(mapStateToProps)(ComposedComponent);
};
