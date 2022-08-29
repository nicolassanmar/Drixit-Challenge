import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="spinner-container">
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
}
