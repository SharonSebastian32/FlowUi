import "./Admin.css";
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
          src="tps://i.pinimg.com/736x/2f/5c/41/2f5c41686582e85f78e91e09ef12067a.jpg"
          onClick={() => alert("Admin")}
        ></img>
        <div className="admin-info">
          <span id="category">Admin</span>
          <span id="name">Sharon Sebastian</span>
        </div>
      </div>
    </>
  );
};

export default AdminInfo;
