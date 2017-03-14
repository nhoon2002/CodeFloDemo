import React, { Component } from 'react';
import ProfileItems from '../components/ProfileItems.jsx';
// import profilepic from '../components/profilepic.jpg';

const PROFILE_ITEMS = [
  {
    name: 'Alex Kim',
    img: "assets/img/profilepic.jpg",
    description: 'Hey, whatsup?'
  },
  {
    name: 'Kevin Duong',
    img: "#",
    description: 'Hey, whatsup?'
  },
  {
    name: 'Henry Lee',
    img: "#",
    description: 'Hey, whatsup?'
  }

];

class Profile extends Component {
	render() {
		return (

        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-6'>
            <div className='container'>
              <h1><span>hello</span></h1>
              {PROFILE_ITEMS.map((item, index) => {
                return <ProfileItems
                  key={index}
                  fullName={item.name}
                  description={item.description}
                  imgSource={item.img}
                />;
              })}
            </div>
          </div>
          <div className='col-md-3'></div>



        </div>



    );
  };
}

export default Profile;
