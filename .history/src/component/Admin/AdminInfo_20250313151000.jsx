import "./Admin.css";
const AdminInfo = () => {
  return (
    <>
      <span
        id="admin-icon"
        style={{
          padding: "9px",
          borderRadius: "50%",
          backgroundColor: "#fffce3",
          fontSize: "15px",
          fontWeight: "550",
        }}
      >
        SH
      </span>
      <div className="admin-info">
        <span id="category">Admin</span>
        <span id="name">Sharon Sebastian</span>
      </div>
    </>
  );
};

export default AdminInfo;
