import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Chats from "./pages/Chats";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chats />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
