import "./Admin.css";
import Profile from "../../assets/Profile.png";
const AdminInfo = () => {
  return (
    <>
      <div
        id="admin-info"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexDirection: "row",
        }}
      >
        <img
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor: "pointer",
            objectFit: "cover",
          }}
          src={Profile}
          onClick={() => alert("Admin")}
        ><input type="text" /></img>
        <div className="admin-info">
          <span id="category">Admin</span>
          <span id="name">Sharon Sebastian</span>
        </div>
      </div>
    </>
  );
};

export default AdminInfo;
