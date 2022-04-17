import React from 'react';

function Learn(props) {
  return (
    <div>
      <section className="p-3 p-lg-5" id="learn">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md">
              <img src="/images/fundamentals.svg" class="img-fluid" alt="" />
            </div>
            <div className="col-md p-3 p-lg-5">
              <h2>
                Learn The Fundamentals
              </h2>
              <p class="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique deleniti possimus magnam corporis ratione facere!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
              reiciendis eius autem eveniet mollitia, at asperiores suscipit
              quae similique laboriosam iste minus placeat odit velit quos,
              nulla architecto amet voluptates?
            </p> 
            <a href="#" class="btn btn-light mt-3">
              <i class="bi bi-chevron-right"></i> Read More
            </a>
            </div>
          </div>
        </div>
      </section>

      <section className="p-3 p-lg-5" id="learn">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-3 p-lg-5">
              <h2>
                Learn React
              </h2>
              <p class="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p> 
              <a href="#" class="btn btn-light mt-3">
                <i class="bi bi-chevron-right"></i> Read More
              </a>
            </div>
            <div className="col-md">
              <img src="/images/react.svg" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Learn;