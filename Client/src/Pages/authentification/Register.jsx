import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = ({setConnecter,setuser}) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
<<<<<<< HEAD
      const response = await fetch(`${apiUrl}users/signup`, {
=======
      const response = await fetch(`${import.meta.env.VITE_API_URL}/users/signup`, {
>>>>>>> 6f3f9fe (after add dashbord)
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setuser(data.data.user.name);
        setConnecter(true);
        toast.success("Successfully created !", {
          duration: 1500,
          position: "top-left",
          style: {
            border: "1px solid #10B981",
            padding: "16px",
            color: "#065F46",
            minWidth: "500px",
            fontWeight: "500",
            borderRadius: "10px",
            background: "#ECFDF5",
          },
          iconTheme: {
            primary: "#10B981",
            secondary: "#FFFAEE",
          },
        });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(data.message || "Registration failed", {
          duration: 4000,
          position: "top-center",
          style: {
            border: "1px solid #EF4444",
            padding: "16px",
            color: "#7F1D1D",
            fontWeight: "500",
            borderRadius: "10px",
            background: "#FEE2E2",
          },
        });
        setLoading(false);
      }
    } catch (err) {
      toast.error("Connection error. Please try again.", {
        duration: 4000,
        position: "top-center",
        style: {
          border: "1px solid #EF4444",
          padding: "16px",
          color: "#7F1D1D",
          fontWeight: "500",
          borderRadius: "10px",
          background: "#FEE2E2",
        },
      });
      setLoading(false);
    }
  };



  return (
    <div className="h-auto  overflow-hidden bg-bg-main flex items-center justify-center px-6 py-8 lg:px-12 ">
     
      <div className="w-full max-w-md sm:max-w-xl">
        <div className="bg-surface rounded-xl shadow-lg border border-border-custom p-8">
          <h2 className="text-2xl font-bold text-text text-center mb-2">
            Create Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
              <p className="mt-1 text-xs text-text-muted">
                At least 8 characters, including uppercase, lowercase, number,
                and special character
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-text mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white border border-primary rounded-lg focus:outline-none"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-2 rounded-lg transition-colors disabled:opacity-50 mt-4"
            >
              {loading ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-text-muted">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-primary-hover font-medium"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
