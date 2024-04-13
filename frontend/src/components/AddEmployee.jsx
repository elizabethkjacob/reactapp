import React, { useState } from "react";
import { Button } from "@mui/material";
import axiosInstance from "../axiosinterceptor";
import { useNavigate } from "react-router-dom";
import backgroundimage from '../images/list.jpg'
const AddEmployee = () => {
  const [post, setPosts] = useState({});
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setPosts({ ...post, [e.target.name]: e.target.value });
  };

  const addData = () => {
    console.log(post);
    axiosInstance
      .post("http://localhost:3005/admin/add", post)
      .then((res) => {
        alert(res.data.message);
        navigate("/employees");
      })
      .catch((error) => {
        console.error("Error adding employee:", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "calc(100vh - 64px)",
          backgroundImage:`url(${backgroundimage})`,
        padding: "20px",
      }}
    >
      <div
        style={{
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.4)",
          padding: "20px",
          textAlign: "center",
          width: "80%",
          maxWidth: "600px",
        }}
      >
        <h1>Create</h1>
        <div className="container">
          <div className="row">
            <form className="mt-5">
              <div
                className="mb-3 col-lg-6 col-md-6 col-12"
                style={{ textAlign: "left" }}
              >
                <label htmlFor="nameInput" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  onChange={inputHandler}
                  name="name"
                  id="nameInput"
                  className="form-control"
                  style={{ width: "540px", textAlign: "left" }}
                />
              </div>
              <div
                className="mb-3 col-lg-6 col-md-6 col-12"
                style={{ textAlign: "left" }}
              >
                <label className="form-label">Position</label>
                <input
                  type="text"
                  onChange={inputHandler}
                  name="pos"
                  className="form-control"
                  style={{ width: "540px", textAlign: "left" }}
                />
              </div>
             
             
              <div
                className="mb-3 col-lg-6 col-md-6 col-12"
                style={{ textAlign: "left" }}
              >
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  onChange={inputHandler}
                  name="email"
                  className="form-control"
                  style={{ width: "540px", textAlign: "left" }}
                />
              </div>
             
              <div
                className="mb-3 col-lg-6 col-md-6 col-12"
                style={{ textAlign: "left" }}
              >
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Address
                </label>
                <textarea
                  onChange={inputHandler}
                  name="display"
                  id="addressInput"
                  className="form-control"
                  rows="3"
                  style={{ width: "540px", textAlign: "left" }}
                />
              </div>
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={addData}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
