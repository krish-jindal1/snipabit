import React from "react";

const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

function Contact() {
    return (
        <div className="container col-xl-13 col-xxl-8 px-4 py-5" id="contactpage">
            <div className="row align-items-center g-lg-4 py-7">
              <div className="col-lg-7 text-center text-lg-start">
                <h1 className="display-5 fw-bold lh-2 mb-4">Contact</h1>
                <p class="col-lg-10 fs-4">{contactContent}</p>
              </div>
              <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5 border rounded-3 bg-dark">
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label" style={{color: 'white'}}>Enter your message!</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>

                  <button className="w-100 btn btn-lg btn-outline-light" type="submit">Submit</button>
                  <hr className="my-4"/>
                  <small className="text-muted">Thanks, for bothering us :)</small>
                </form>
              </div>
            </div>
        </div>
    )
}

export default Contact;