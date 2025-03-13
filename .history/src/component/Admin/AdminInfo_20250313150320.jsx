import "./Admin.css";
const AdminInfo = () => {
  return (
    <>
      {" "}
      <span
        style={{
          padding: "9px",
          borderRadius: "50%",
          backgroundColor: "#fffce3",
          fontSize: "15px",
        }}
      >
        SH
      </span>
      <div className="admin-info">
        <span id="category">Admin</span>
        <span id="name" className="text-bold text-black">
          Sharon Sebastian
        </span>
      </div>
    </>
  );
};

export default AdminInfo;
