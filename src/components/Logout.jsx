import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logedIn } from "../Redux/actions";

export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
  const dis = useDispatch();

  useEffect(() => {
    dis(logedIn(false));
  }, []);

  return (
    <>
      <Navigate to={"/"} />;
    </>
  );
};
