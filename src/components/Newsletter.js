import React from 'react';

function Newsletter(props) {
  return (
    <div>
      <section className="bg-primary p-3 p-lg-5 text-light">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h3 className="mb-3mb-md-0">
              Sign Up For Our News Letter
            </h3>
            <div class="input-group news-input">
              <input type="text" class="form-control" placeholder="Enter Email" />
              <button class="btn btn-dark btn-lg">Button</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newsletter;