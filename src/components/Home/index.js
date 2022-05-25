import React,{useState, useEffect} from 'react';
import { compose } from 'recompose';
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification,
} from '../Session';
import Messages from '../Messages';
import * as ROUTES from '../../constants/routes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Navigation from '../Navigation';
function HomePage () {
  let { path, url } = useRouteMatch();
  return (
<div className="">
<div className="gradient__bg">
    
      </div>
<AuthUserContext.Consumer>
     
     {authUser => (
       
       <div>
         <h1>Account: {authUser.username}</h1>
                 <h1>Account: {authUser.uid}</h1>

       <Messages/>
     
     
       </div>
     )}
     
   </AuthUserContext.Consumer>
</div>
   
  )
};

const condition = authUser => !!authUser;
export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
