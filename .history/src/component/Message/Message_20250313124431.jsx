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
          onC
        />
        <div>
          <IoMdNotificationsOutline
            style={{
              color: "black",
              cursor: "pointer",
              height: "20px",
              width: "20px",
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Message;
