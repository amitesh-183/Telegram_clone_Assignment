import Sidebar from "../components/Sidebar";
import Messages from "../components/Messages";

const Chats = () => {
  return (
    <div className="flex bg-main">
      <Sidebar />
      <Messages />
    </div>
  );
};

export default Chats;
