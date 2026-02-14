import royal from "../assets/royal.jpg";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${royal})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "60px",
        fontWeight: "bold",
        color: "gold",
        textShadow: "2px 2px 10px black"
      }}
    >
      Royal Celebration
    </div>
  );
};

export default Home;
