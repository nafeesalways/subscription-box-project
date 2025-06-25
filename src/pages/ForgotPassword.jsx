import { useState, useContext, useEffect } from "react";

import { AuthContext } from "../Provider/AuthProvider";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useLocation} from 'react-router';

const ForgotPassword = () => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location?.state?.email) {
      setEmail(location?.state?.email);
    }
  }, [location]);

  const handleReset = () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset email sent. Redirecting to Gmail...");
        window.location.href = "https://mail.google.com"; // Redirect to Gmail
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="card bg-base-100 max-w-sm shadow-2xl p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Reset Your Password</h2>
        <label>Email</label>
        <input
          type="email"
          value={email}
          className="input mb-4"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button onClick={handleReset} className="btn btn-primary w-full">Send Reset Email</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
