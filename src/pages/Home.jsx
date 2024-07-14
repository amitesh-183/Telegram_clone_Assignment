import React from "react";
import Sidebar from "../components/Sidebar";
import Messages from "../components/Messages";

const Home = () => {
  return (
    <div className="flex bg-main">
      <Sidebar />
      <Messages />
    </div>
  );
};

export default Home;
