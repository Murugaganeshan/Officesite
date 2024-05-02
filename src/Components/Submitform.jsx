import { useState } from "react";
import "../Assets/Css/Submitform.css";
import interview from "./Assest/aa.png";
import Footer from "./Footer";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Submitform = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    contact: "",
    position: "",
    experience: "",
    message: "",
    file: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
    if (errors.file) {
      setErrors({ ...errors, file: "" });
    }
  };


  const submit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    

    if (!formData.user_name.trim()) {
      validationErrors.user_name = "Name is required";
    }

    if (!formData.user_email.trim()) {
      validationErrors.user_email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(
        formData.user_email
      )
    ) {
      validationErrors.user_email = "Invalid email format";
    }

    if (!formData.contact.trim()) {
      validationErrors.contact = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      validationErrors.contact = "Invalid phone number (must be 10 digits)";
    }

    if (!formData.position.trim()) {
      validationErrors.position = "Position is required";
    }

    if (!formData.experience.trim()) {
      validationErrors.experience = "Experience is required";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

     if (!formData.file) {
      validationErrors.file = "File is required";
    } else {
      const allowedFileSize = 5 * 1024 * 1024; // 5MB in bytes
      if (formData.file.type !== "application/pdf") {
        validationErrors.file = "Only PDF files are allowed";
      } else if (formData.file.size > allowedFileSize) {
        validationErrors.file = "File size must be less than 5MB";
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

    } else {
      console.log("Form submitted:", formData);
    toast.info("Application Submitted")

      setFormData({
        user_name: "",
        user_email: "",
        contact: "",
        position: "",
        experience: "",
        message: "",
        file: null,
      });
      setErrors({});
    }
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${interview})` }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-6 glass">
              <h1 className="text-center" style={{ color: "white" }}>
                Job Application
              </h1>
              <form className="my-5">
                <div className="form-group">
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    className={`form-control email ${
                      errors.user_name ? "is-invalid" : ""
                    }`}
                    placeholder="Name"
                  />
                  {errors.user_name && (
                    <div className="invalid-feedback">{errors.user_name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    className={`form-control email ${
                      errors.user_email ? "is-invalid" : ""
                    }`}
                    placeholder="Your Email"
                  />
                  {errors.user_email && (
                    <div className="invalid-feedback">
                      {errors.user_email}
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className={`form-control email ${
                      errors.contact ? "is-invalid" : ""
                    }`}
                    placeholder="Contact"
                  />
                  {errors.contact && (
                    <div className="invalid-feedback">{errors.contact}</div>
                  )}
                </div>
                <div className="row row-cols-md-2 row-cols-1">
                  <div className="form-group col">
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      id="inputState"
                      className={`form-control email ${
                        errors.position ? "is-invalid" : ""
                      }`}
                      style={{ width: "100%" }}
                    >
                      <option selected>Choose Position...</option>
                      <option>Backend (Nodejs)</option>
                      <option>Digital Marketing</option>
                      <option>Business Development Executive</option>
                    </select>
                    {errors.position && (
                      <div className="invalid-feedback">
                        {errors.position}
                      </div>
                    )}
                  </div>
                  <div className="form-group col">
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className={`form-control email ${
                        errors.experience ? "is-invalid" : ""
                      }`}
                      placeholder="Experience"
                      style={{ width: "100%" }}
                    />
                    {errors.experience && (
                      <div className="invalid-feedback">
                        {errors.experience}
                      </div>
                    )}
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    style={{ width: "100%", padding: "8px" }}
                    className={`email ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Text your message here..."
                    rows="5"
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>
                <div>
                  <input
                    className={`form-control form-control-lg email ${
                      errors.file ? "is-invalid" : ""
                    }`}
                    id="formFileLg"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                  />
                  {errors.file && (
                    <div className="invalid-feedback">{errors.file}</div>
                  )}
                </div>
                <div className="Submit_form">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={submit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Submitform;


