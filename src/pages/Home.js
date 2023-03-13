import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('products');
    }
  return (
    <>
      <h1>Welcome to HomePage</h1>
      <h4>
        Go to <Link to="products">products page</Link>{" "}
      </h4>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default HomePage;
