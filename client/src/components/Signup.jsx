import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
  }

  return (
    <div className="wrapper signUp">
      <div className="illustration">
        {/* <img src="https://unsplash.com/random" alt="illustration" /> */}
      </div>
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="name">E-Mail</label>
            <input type="text" id="name" placeholder="Enter your mail" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter you password"
            />
          </div>
          <button type="submit" onClick={handleSignup}>Submit</button>
          <h2 align="center" class="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/signin"> Login </Link>
        </p>
      </div>
    </div>
  );
}
