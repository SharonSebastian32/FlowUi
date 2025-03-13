import { IoMdNotificationsOutline } from "react-icons/io";

function Notification() {
  return (
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
  );
}

export default Notification;
