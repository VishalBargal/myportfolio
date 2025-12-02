import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("your-backend-url", formData);
      // Handle success, maybe show a success message
      window.alert("Thanks for contact with us ");

    } catch (error) {
      // console.error("Error submitting form:", error);
      window.alert("Thanks for contact us");
      window.location.reload();

      // Handle error, maybe show an error message
    }
  };

  return (
    <>
      <div className="contactmain" id="contact">
        <div className="container">
          <div className="col-md-12 mt-5">
            <div className="col-12 col-sm-12 col-md-6 col-xl-5 float-left bg-dark w-100 mt-5 con-left-div" 
              data-scroll
              // data-scroll-direction="horizontal"
              data-scroll-speed="1">
              <div className="leftfirst">
                <img
                  className="conimg"
                  src="https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg"
                  alt="Contact person"
                ></img>
              </div>
              <div className="leftsecond p-5">
                <h1 className="font-weight-bold text-warning">V.L.Bargal</h1>
                <h2 className="text-muted">Junior Web Developer</h2>
                <h4 className="text-muted">
                  I am available for freelance work. Connect with me via and
                  call in to my account.
                </h4>
                <h4 className="text-muted">
                  <b>Phone :</b> <u className="text-muted">+917219199124</u>{" "}
                </h4>
                <h4 className="text-muted">
                  <b>E-mail :</b>{" "}
                  <u className="text-muted">bargalvishal@gmail.com</u>
                </h4>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-xl-7 float-left con-right-div mt-5 text-white"
              data-scroll
              // data-scroll-direction="horizontal"
              data-scroll-speed="-1">
              <div className="mb-5">
                <h2>Contact With Me</h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <h5>Your Name</h5>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "lightgray")
                    }
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
                    style={{
                      backgroundColor: formData.name ? "lightgray" : "",
                    }}
                  ></input>
                </div>
                <div>
                  <h5>Your E-mail</h5>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'lightgray'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = ''}
                    style={{ backgroundColor: formData.email ? 'lightgray' : '' }}
                  ></input>

               
                </div>
                <div>
                  <h5>Contact No.</h5>
                  <input
                    type="text"
                    className="form-control"
                    name="contactNo"
                    value={formData.contactNo}
                    onChange={handleChange}
                    required
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "lightgray")
                    }
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
                    style={{
                      backgroundColor: formData.contactNo ? "lightgray" : "",
                    }}
                  ></input>
                </div>
                <div>
                  <h5>Message</h5>
                  <textarea
                    rows={4}
                    className="form-control"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "lightgray")
                    }
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "")}
                    style={{
                      backgroundColor: formData.message ? "lightgray" : "",
                    }}
                  ></textarea>
                </div>
                <div className="text-center mt-5 mb-5">
                  <div className="submit">
                    <button type="submit" className="subscribr__btn99">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
