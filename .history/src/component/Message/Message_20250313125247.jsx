import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";
import "./Message.css";
function Message() {
  return (
    <>
      <div id="message">
        <LuMessageCircleMore
          id="message-icon"
          onClick={() => {
            alert("You have one message");
          }}
        />
        <div>
          <IoMdNotificationsOutline
            id="notification-icon"
            onClick={() => {
              alert("No neew notifications for you");
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Message;
