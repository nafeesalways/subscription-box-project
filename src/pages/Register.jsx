import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const [nameError, setNameError] = useState("");
  const [showPassword,setShowPassword] =useState(false)
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, name, photo);
    if (name.length < 5) {
      setNameError("Name should be more than 5 character");
      return;
    } else {
      setNameError('');
    }
const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/

if (!passwordRegEx.test(password)) {
  alert("Password must have at least 1 uppercase letter, 1 lowercase letter, and be at least 6 characters long.");
  return;
}
createUser(email, password)
.then((result) => {
  const user = result.user;

  // Send Email Verification
  sendEmailVerification(user)
    .then(() => {
      toast.success("Verification email sent. Please check your inbox.");

      // Update Profile
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          navigate("/");
        })
        .catch((err) => {
          toast.error(`Update Profile Error: ${err.message}`);
          setUser(user); 
        });
    })
    .catch((err) => {
      toast.error(`Email Verification Error: ${err.message}`);
    });
})
.catch((error) => {
  toast.error(`${error.code}: ${error.message}`);
});
};
  return (
    <div className="flex justify-center items mt-5">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
              required
            />
            {nameError && <p className="text-xs text-error">{nameError}</p>}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input"
              placeholder="Photo URL"
              required
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
        <div className="relative">
        <input
              name="password"
              type={showPassword?'text':'password'}
              className="input"
              placeholder="Password"
              required
            />
            <button onClick={()=>{setShowPassword(!showPassword)}} className="btn btn-xs absolute top-2 right-6 ">{showPassword? <FaRegEyeSlash size={20}></FaRegEyeSlash>: <FaEye size={20}></FaEye>}</button>
        </div>
            
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
            <p className="font-semibold text-lg pt-5">
              Already have an account? Please{" "}
              <Link className="text-secondary" to="/auth/login">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
