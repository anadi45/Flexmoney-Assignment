import React, { useState } from "react";
import "../styles/Enroll.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";

const Enroll = () => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [batch, setBatch] = useState("6-7 AM");
  const [phone, setPhone] = useState(0);
  const [mail, setMail] = useState("");
  const [age, setAge] = useState(0);
  const [card, setCard] = useState(0);
  const [cvv, setCvv] = useState(0);
  const [modal, setModal] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const secondNameChange = (e) => {
    setSecondName(e.target.value);
  };

  const batchChange = (e) => {
    setBatch(e.target.value);
  };

  const mailChange = (e) => {
    setMail(e.target.value);
  };

  const phoneChange = (e) => {
    setPhone(e.target.value);
  };

  const ageChange = (e) => {
    setAge(e.target.value);
  };

  const cardChange = (e) => {
    setCard(e.target.value);
  };

  const cvvChange = (e) => {
    setCvv(e.target.value);
  };

  const onSubmit = (data) => {
    handleShow()
    // e.preventDefault();
    // console.log(firstName,secondName,mail,phone,age,batch);
    console.log(data);
  };
  return (
    <div className="container">
      <h4 className="form-heading">Yoga Classes Enrollment Form</h4>
      <form>
        <div className="input-out-div">
          <div className="mb-3 input-div">
            <label htmlFor="inputFirstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName"
              autoComplete="off"
              onChange={firstNameChange}
              {...register("firstName", { required: true, maxLength: 12 })}
            />
            {errors.firstName && <p>Field required with letter limit: 12</p>}
          </div>
          <div className="mb-3 input-div">            
            <p>Second Name</p>            
            <input
              type="text"
              className="form-control"
              id="inputSecondName"
              autoComplete="off"
              onChange={secondNameChange}
              {...register("secondName", { required: true, maxLength: 12 })}
            />
            {errors.secondName && <p>Field required with letter limit: 12</p>}
          </div>
          <div className="mb-3 input-div">            
            <p>Phone Number</p>            
            <input
              type="number"
              className="form-control"
              id="inputPhone"
              autoComplete="off"
              onChange={phoneChange}
              {...register("phone", {
                required: true,
                pattern: /^[6-9]\d{9}$/,
              })}
            />
            {errors.phone && <p>Invalid Phone Number</p>}
          </div>
        </div>
        <div className="input-out-div">
          <div className="mb-3 input-div">            
            <p>Email</p>            
            <input
              type="mail"
              className="form-control"
              id="inputMail"
              autoComplete="off"
              onChange={mailChange}
              {...register("mail", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.mail && <p>Invalid Mail</p>}
          </div>
        </div>
        <div className="input-out-div">
          <div className="mb-3 input-div">            
            <p>Age</p>            
            <input
              type="number"
              className="form-control"
              id="inputAge"
              autoComplete="off"
              onChange={ageChange}
              {...register("age", {
                required: true,
                min: 18,
                max: 65,
              })}
            />
            {errors.age && <p>Age Range Allowed: 18-65</p>}
          </div>
          <div className="mb-3 input-div">            
            <p>Batch</p>            
            <select className="form-select" onChange={batchChange}>
              <option value="6-7 AM" className="form-control">
                6-7 AM
              </option>
              <option value="7-8 AM" className="form-control">
                7-8 AM
              </option>
              <option value="8-9 AM" className="form-control">
                8-9 AM
              </option>
              <option value="5-6 PM" className="form-control">
                5-6 PM
              </option>
            </select>
          </div>
        </div>
        Payment
        <div className="mb-3 card-div">          
          <p>Card Number (Type 0000111122223333 for demo)</p>          
          <input
            type="number"
            className="form-control"
            id="inputCardNumber"
            onChange={cardChange}
            {...register("card", {
              required: true,
              pattern: /^\d{16}$/,
            })}
          />
          {errors.card && <p>Card Number must be 16 digits.</p>}          
          <p>CVV (Type 123 for demo)</p>          
          <input
            type="number"
            className="form-control"
            id="inputCVV"
            onChange={cvvChange}
            {...register("cvv", {
              required: true,
              pattern: /^\d{3}$/,
            })}
          />
          {errors.cvv && <p>CVV must be 3 digits.</p>}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </form>

      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter OTP to complete payment (Enter 1234 for demo)</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Enroll;
