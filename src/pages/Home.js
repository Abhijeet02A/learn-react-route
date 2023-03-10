import { Link } from "react-router-dom";

const HomePage = () => {
    return <> <h1>Welcome to HomePage</h1>
    <h4>Go to <Link to='/products'>products page</Link> </h4>
    </>
};

export default HomePage;