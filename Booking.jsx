import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Successful!");
    navigate("/payment");
  };

  return (
    <div className="container">
      <h2>Book Your Celebration</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required />
        <input placeholder="Phone Number" required />
        <select required>
          <option>Birthday</option>
          <option>Bride To Be</option>
          <option>Anniversary</option>
          <option>Farewell</option>
        </select>
        <input type="datetime-local" required />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
