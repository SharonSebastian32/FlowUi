import { LuMessageCircleMore } from "react-icons/lu";
import Notification from "../Notification/Notification";
function Message() {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
      }}>
        <LuMessageCircleMore
          style={{
            color: "black",
            cursor: "pointer",
            height: "20px",
            width: "20px",
          }}
        />
        <Notification />
      </div>
    </>
  );
}

export default Message;
