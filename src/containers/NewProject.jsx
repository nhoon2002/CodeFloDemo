// // Create Your Project Team
// -Enter Project Name
// -Enter Project Description
// -Add Project Tags (Tech stack, techonologies, industry, etc)
//
// if 1) Submit (update Team data for User model)
// else if 2) Add Members
//
// 1: Submit Team to Database (1 member -- curentUser), redirect to Project Home
// 2: Populate field with users -- linkedin/githubFinder style, searchable by username;
//   - Invite to Project
//
//


import React, { Component, Props }from 'react';
import axios from 'axios';
// import Register from './Register.jsx'
import UserInfo from '../components/UserInfo.jsx'




class NewProject extends Component {
   constructor(props) {
     super(props);
     this.state = {} ;
   }

   componentWillMount() {
      axios.get('/register/users').then((response) => {
         console.log(response);
         this.setState({
            usernames: response
         });
      })
   }

   render() {
     return (
        <div>
           {this.state.response}
           {/* {this.state.options.map((option, index) => <UserInfo users={option} key={index} i={index}/>)} */}
        </div>










     )
   }
 };
 export default NewProject;
