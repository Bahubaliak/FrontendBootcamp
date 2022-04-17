import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

const ContactAndMap = (props) => {
  return (
    <>
      <div className="contact_and_map p-3 p-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <h2 className="text-dark text-center">
                Contact Info
              </h2>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <span className="fw-bold">
                    Main Location:
                  </span> Bangalore
                </li>
                <li class="list-group-item">
                  <span className="fw-bold">
                  Enrollment Phone:
                  </span> (000) 000-000
                </li>
                <li class="list-group-item">
                  <span className="fw-bold">
                  Student Phone:
                  </span> (333) 333-333
                </li>
                <li class="list-group-item">
                  <span className="fw-bold">
                  Enrollment Email:
                  </span> Enrollment@gmail.com
                </li>
                <li class="list-group-item">
                  <span className="fw-bold">
                  Student Email:
                  </span> Student@gmail.com
                </li>
              </ul>
            </div>
            <div class="col-md mt-2 map-image-container">
              <img
                className="map-image" 
                src="images/bangalore.jpg" 
                alt="bangalore"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCJl-ttcHJ2Jn2P04EQN5T1MybLIxZELJI'
})(ContactAndMap);
