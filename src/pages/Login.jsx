

import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useRef, useState } from "react";


const Login = () => {
  const { logIn,googleSignIn  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();


  const handleGoogleSignIn =()=>{
    googleSignIn().then((result)=>{
      console.log(result)
    }).catch((error)=>{
      console.log(error)
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password)
      .then((result) => {
        // if (!result.user.emailVerified) {
        //   alert("Please verify your email address.");
        //   return;
        // }
        console.log(result)
        navigate(location.state || "/");
      })
      .catch((error) => {
        setError(error.message);
        toast(error.message);
      });
  };

  const goToForgotPassword = () => {
    const email = emailRef.current.value;
    navigate("/forgot-password", { state: { email } });
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="card bg-base-100 max-w-sm shadow-2xl">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>
        <form onSubmit={handleLogin} className="card-body">
          <label className="label">Email</label>
          <input ref={emailRef} name="email" type="email" className="input" required />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" required />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <div onClick={goToForgotPassword}>
            <span className="link link-hover cursor-pointer">Forgot password?</span>
          </div>
          <button type="submit" className="btn btn-secondary rounded-full mt-3">Login</button>
          <p>or</p>
          <button type="button" onClick={handleGoogleSignIn} className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
 Continue with Google
</button>
          <p className="font-semibold text-lg pt-5">
            Have no account? Please <Link className='text-secondary' to='/auth/register'>Register</Link>
          </p>
       
        </form>
      </div>
    </div>
  );
};

export default Login;
