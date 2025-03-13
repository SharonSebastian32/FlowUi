import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";

function Message() {
  return (
    <>
      <div id="message"
 
      >
        <LuMessageCircleMore
          style={{
            color: "black",
            cursor: "pointer",
            height: "20px",
            width: "20px",
          }}
          onClick={() => {
            alert("You have one message");
          }}
        />
        <div>
          <IoMdNotificationsOutline
            style={{
              color: "black",
              cursor: "pointer",
              height: "20px",
              width: "20px",
            }}
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
