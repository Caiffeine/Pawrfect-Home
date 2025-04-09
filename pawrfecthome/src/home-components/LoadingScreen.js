import React from "react";
import "./../styles/LoadingScreen.css";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-animation">
          <img
            src="https://kutto.netlify.app/img/preloader.gif"
            alt="Dog loading animation"
          />
        </div>
        <h2>Pawrfect Home</h2>
        <p>Finding your furry friend...</p>
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
