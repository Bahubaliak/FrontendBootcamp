import React from 'react';

function Instructors(props) {
  return (
    <div id="instructors">
      <section className="p-3 p-lg-5 bg-primary">
        <div className="container">
          <h2 className="text-center text-white">
            Our Instructors
          </h2>
          <p className="text-center text-white lead mb-5">
            Our instructors all have 5+ years working as a web developer in the industry
          </p>
          <div className="row text-center g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/men/20.jpg" 
                    alt="men_20" 
                    className="rounded-circle mb3"
                  />
                  <h3 className="card-title mb-3">John Doe</h3>
                  <p className="card-text mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quidem illum tempora nesciunt eaque consequuntur!
                  </p>
                  <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                </div>
              </div>
            </div>    
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/women/8.jpg" 
                    alt="women_20" 
                    className="rounded-circle mb3"
                  />
                  <h3 className="card-title mb-3">Smitha Doe</h3>
                  <p className="card-text mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quidem illum tempora nesciunt eaque consequuntur!
                  </p>
                  <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                </div>
              </div>
            </div> 
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/men/29.jpg" 
                    alt="men_10" 
                    className="rounded-circle mb3"
                  />
                  <h3 className="card-title mb-3">David boe</h3>
                  <p className="card-text mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quidem illum tempora nesciunt eaque consequuntur!
                  </p>
                  <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                </div>
              </div>
            </div> 
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img src="https://randomuser.me/api/portraits/women/11.jpg" 
                    alt="women_10" 
                    className="rounded-circle mb3"
                  />
                  <h3 className="card-title mb-3">Clare boe</h3>
                  <p className="card-text mb-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quidem illum tempora nesciunt eaque consequuntur!
                  </p>
                  <a href="#"><i className="bi bi-twitter text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-instagram text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-facebook text-dark mx-1"></i></a>
                  <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section> 
    </div>
  )}

export default Instructors;