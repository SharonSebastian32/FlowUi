import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./Message.css";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";

function Message() {
  return (
    <>
      <div id="message">
        <div className="icon-container">
          <LuMessageCircleMore
            id="message-icon"
            onClick={() => {
              alert("You have one message");
            }}
          />
          <span className="red-dot message-dot"></span>
        </div>
        <div className="icon-container">
          <MdNotificationsNone
            id="notification-icon"
            onClick={() => {
              alert("No new notifications for you");
            }}
          />
          <span className="red-dot notification-dot"></span>
        </div>
      </div>
    </>
  );
}

export default Message;
