import React from "react";

function Registration() {
  return (
    <>
      <header>Please register</header>
      <div className="formData">
        <label htmlFor="">User Name</label>
        <input type="text" placeholder="Enter Name" />
        <label htmlFor="">User Email</label>
        <input type="email" placeholder="Email" />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Password" />
        <label htmlFor="">Phone Number</label>
        <input type="number" placeholder="Phone Number" />
        <input type="submit" value="Submit" />
      </div>
    </>
  );
}

export default Registration;
