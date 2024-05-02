import { useState } from "react";
import "../Assets/Css/Submitform.css";
import interview from "./Assest/aa.png";
import Footer from "./Footer";
import axios from "axios";
import {ApplyForm}from '../Authiapis/backendcall'
import { toast } from "react-toastify";
const Submitform = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    Position: "",
    Experience: "",
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


  const submit = async(e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(
        formData.email
      )
    ) {
      validationErrors.email = "Invalid email format";
    }

    if (!formData.contact.trim()) {
      validationErrors.contact = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      validationErrors.contact = "Invalid phone number (must be 10 digits)";
    }

    if (!formData.Position.trim()) {
      validationErrors.position = "Position is required";
    }

    if (!formData.Experience.trim()) {
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
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("contact", formData.contact);
      formDataToSend.append("Position", formData.Position);
      formDataToSend.append("Experience", formData.Experience);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("pdfFile", formData.file);

      try {
        // Reset form data and errors after successful submission
        const response = await ApplyForm(formDataToSend)
        if(response.status){

    
          toast.success(response.message)
        }
        else{
  
          toast.error(response.message)
        }
        setFormData({
          name: "",
          email: "",
          contact: "",
          Position: "",
          Experience: "",
          message: "",
          file: null,
        });
        setErrors({});
        window.location.href='/'
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error if needed
      }
    }
  };
;

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
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`form-control email ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-control email ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Your Email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">
                      {errors.email}
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
                      name="Position"
                      value={formData.Position}
                      onChange={handleInputChange}
                      id="inputState"
                      className={`form-control email ${
                        errors.Position ? "is-invalid" : ""
                      }`}
                      style={{ width: "100%" }}
                    >
                      <option selected>Choose Position...</option>
                      <option>Backend (Nodejs)</option>
                      <option>Digital Marketing</option>
                      <option>Business Development Executive</option>
                    </select>
                    {errors.Position && (
                      <div className="invalid-feedback">
                        {errors.Position}
                      </div>
                    )}
                  </div>
                  <div className="form-group col">
                    <input
                      type="text"
                      name="Experience"
                      value={formData.Experience}
                      onChange={handleInputChange}
                      className={`form-control email ${
                        errors.Experience ? "is-invalid" : ""
                      }`}
                      placeholder="Experience"
                      style={{ width: "100%" }}
                    />
                    {errors.Experience && (
                      <div className="invalid-feedback">
                        {errors.Experience}
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
                    id="file"
                    type="file"
                    accept=".pdf"
                     name="file" 
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


