import { LuMessageCircleMore } from "react-icons/lu";
import { IoMdNotificationsOutline } from "react-icons/io";

function Message() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
        }}
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
              alert("You have one message");
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Message;
