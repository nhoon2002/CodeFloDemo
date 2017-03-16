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

        // <div className='row'>
        //   <div className='col-md-3'></div>
        //   <div className='col-md-6'>
        //     <div className='container'>
        //       <h1><span>hello</span></h1>
        //       {PROFILE_ITEMS.map((item, index) => {
        //         return <ProfileItems
        //           key={index}
        //           fullName={item.name}
        //           description={item.description}
        //           imgSource={item.img}
        //         />;
        //       })}
        //     </div>
        //   </div>
        //   <div className='col-md-3'></div>
        //
        //
        //
        // </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 holder">
              <img className="img-circle" src="http://www.placehold.it/200x200" />
              <hr />
              <h2>John Doe</h2>
              <hr />
              <h4>Link: <a href="#">www.porfolio.com/john</a></h4>
              <div className="icons-holder">
                <a target='_blank' href="http://www.github.com">
                  <img src="assets/icons/github.png" className="profIcons"/>
                </a>
                <a target='_blank' href="http://www.linkedin.com">
                  <img src="assets/icons/linkedin.png" className="profIcons"/>
                </a>
              </div>
              <div className="buttons-holder">
                  <button type="button" className="btn btn-danger actionButtons">Add to Team</button>
                  <button type="button" className="btn btn-success actionButtons">Connect</button>
                  <button type="button" className="btn btn-primary actionButtons">Send Message</button>
                  <button type="button" className="btn btn-warning actionButtons">Send Message</button>
              </div>
          </div>
          <div className="col-md-3"></div>
        </div>



    );
  }
}

export default Profile;
