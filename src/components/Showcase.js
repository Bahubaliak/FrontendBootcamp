import React from 'react';

function Showcase(props) {
  return (
    <div>
      <section className="bg-dark text-light text-center p-5 p-lg-0 text-sm-start pt-lg-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="pt-lg-0 pt-5">Become a <span className="text-warning">Web Developer</span></h1>
              <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quisquam numquam recusandae et incidunt quod nihil, nam minus!
            </p>
            <button 
              class="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#enroll"
            >Start The Enrollment</button>
            </div>
            <img className="img-fluid w-50 d-none d-sm-block" src='/images/showcase.svg' alt="show_case_image"/>
          </div>
          </div>
      </section>
      <div
        class="modal fade"
        id="enroll"
        tabindex="-1"
        aria-labelledby="enrollLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="enrollLabel">Enrollment</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p class="lead">Fill out this form and we will get back to you</p>
              <form>
                <div class="mb-3">
                  <label for="first-name" class="col-form-label">
                    First Name:
                  </label>
                  <input type="text" class="form-control" id="first-name" />
                </div>
                <div class="mb-3">
                  <label for="last-name" class="col-form-label">Last Name:</label>
                  <input type="text" class="form-control" id="last-name" />
                </div>
                <div class="mb-3">
                  <label for="email" class="col-form-label">Email:</label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="mb-3">
                  <label for="phone" class="col-form-label">Phone:</label>
                  <input type="tel" class="form-control" id="phone" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;<section className="bg-dark text-light">
</section>