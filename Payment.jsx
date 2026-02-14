import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Payment Successful!");
    navigate("/logout");
  };

  return (
    <div className="container">
      <h2>Payment</h2>
      <p>Complete your payment to confirm booking.</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
