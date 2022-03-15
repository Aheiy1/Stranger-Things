import React from "react";

const LogOut = () => {
  const handleLogOut = async (e) => {
    e.preventDefault();
    localStorage.clear()
    window.location.reload();
  };

  return (
    <div>
      <button onClick={handleLogOut} type="button">
        Logout
      </button>
    </div>
  );
};

export default LogOut;
