import React,{Component} from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom';
import Home from './components/home/Home'

const PrivateRoute = ({component:Component,...rest}) => (
  <Route
   {...rest} 
   render={props => {

    const token_id=localStorage.getItem('token_id');
    if(token_id==='undefined'||token_id==='null'||token_id===null||token_id===undefined||token_id===""){
      return <Redirect
      to={{
        pathname:"/"
      }}
      />
    }
    else {
      return <Component {...props} />
    }


  } }
  />
);

class App extends Component {

render(){
  return(
    <div>
    <Route exact path="/" component={() => (< Home />)} />
    </div>
  )
}

}

export default withRouter(App);