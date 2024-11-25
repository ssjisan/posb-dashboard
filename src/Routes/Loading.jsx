import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import loaderAnimation from "../assets/loader.json"; // Import your animation JSON
import Lottie from "lottie-react";

export default function Loading() {
  const [counter, setCounter] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((currentCounter) => --currentCounter);
    }, 1000);

    counter === 0 &&
      navigate("/login", {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div
      style={{
        height: "100vh",
        border: "1px solid red",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Lottie
        animationData={loaderAnimation} // Use imported animation JSON directly
        loop
        style={{ width: 120, height: 120 }} // Adjust dimensions as needed
      />
    </div>
  );
}
