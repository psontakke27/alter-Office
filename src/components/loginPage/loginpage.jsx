import React from "react";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";
import circlesBg from "../../assets/circles_bg.png";
import taskImg from "../../assets/task.png";
import { FcGoogle } from "react-icons/fc";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      // Simulate authentication (Replace with Firebase authentication)
      console.log("Google login clicked");

      // Redirect to Dashboard after successful login
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="heroSection">
      <div className="left-hs">
        <div className="heroSection_box_left">
          <div className="taskbuddy">
            <span className="text-3xl">
              <img src={taskImg} alt="Hero Background" />
            </span>{" "}
            TaskBuddy
          </div>
          <p className="taskbuddy-text">
            Streamline your workflow and track progress effortlessly
            <span className="break-line">
              with our all-in-one task management app.
            </span>
          </p>
          <button className="taskbuddy-button" onClick={handleGoogleLogin}>
            <FcGoogle className="button-logo" />
            <div className="button-text">Continue with Google</div>
          </button>
        </div>
      </div>

      <div className="right-hs">
        <img src={circlesBg} alt="Background" className="circles-bg" />
      </div>
    </div>
  );
};

export default HeroSection;
