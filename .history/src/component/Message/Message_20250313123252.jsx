import { LuMessageCircleMore } from "react-icons/lu";
import Notification from "../Notification/Notification";
function Message() {
  return (
    <>
    <div></div>
      <LuMessageCircleMore
        style={{
          color: "black",
          cursor: "pointer",
          height: "20px",
          width: "20px",
        }}
      />
      <Notification />
    </>
  );
}

export default Message;
