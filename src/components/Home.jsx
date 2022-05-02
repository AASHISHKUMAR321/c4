import { useSelector } from "react-redux";
import { store } from "../Redux/store";

export const Home = () => {
  const user = useSelector((store) => store);
  console.log(user);
  return (
    <div className="homepage">
      Welcome to Laptop service center. Please login to continue
    </div>
  );
};
