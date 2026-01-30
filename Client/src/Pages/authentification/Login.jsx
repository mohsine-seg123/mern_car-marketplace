import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Utilisation des Computed Property Names
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // Permet d'envoyer/recevoir le cookie JWT
        body: JSON.stringify(formData),
      });
     
      const data = await response.json();

      if (response.ok) {
        // Succès : Utilisation du message du backend ou message générique
        toast.success("Successfully logged in !", {
          duration: 2000,
          position: "top-center",
          style: {
            border: "1px solid #10B981",
            padding: "16px",
            color: "#065F46",
            borderRadius: "10px",
            background: "#ECFDF5",
          },
        });

        // On attend que le toast soit visible avant de naviguer
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(data.message || "Invalid email or password", {
          duration: 4000,
          position: "top-center",
        });
      }
    } catch (err) {
      toast.error("Connection error. Please try again later.", {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" min-h-[calc(100vh-62px)] bg-bg-main flex items-center justify-center px-6 py-4 lg:px-12 lg:py-8">
      
      <div className="w-full max-w-md px-4">
        <div className="bg-surface rounded-xl shadow-lg border border-primary p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-text text-center mb-6">
            Sign In
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full px-4 py-3 bg-white border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                className="w-full px-4 py-3 bg-white border border-border-custom rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <div className="flex justify-end mt-2">
    <Link
      to="/forgot-password"
      className="text-sm text-primary hover:underline font-medium"
    >
      Forgot password?
    </Link>
  </div>


            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
          

          <p className="mt-6 text-center flex gap-8 justify-center text-sm text-text-muted">
            <p>Don't have an account?</p>
            <Link
              to="/register"
              className="text-primary hover:text-primary-hover font-medium"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
