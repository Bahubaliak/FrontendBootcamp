import React from 'react';

function Boxes(props) {
  return (
    <div>
      <section className="p-3 p-lg-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md py-3 py-lg-0">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">Virtual</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md py-3 py-lg-0">
              <div className="card bg-secondary text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-person-square"></i>
                  </div>
                  <h3 className="card-title mb-3">Hybrid</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md py-3 py-lg-0">
              <div className="card bg-dark text-light">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <i className="bi bi-laptop"></i>
                  </div>
                  <h3 className="card-title mb-3">In Person</h3>
                  <p className="card-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, quas quidem possimus dolorum esse eligendi?
                  </p>
                  <a href="#" className="btn btn-warning">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Boxes;