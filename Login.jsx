import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    navigate("/booking");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
