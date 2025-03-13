import "./Admin.css";
const AdminInfo = () => {
  return (
    <>
      <img
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          cursor: "pointer",
          objectFit: "cover",
        }}
        src="https://i.pinimg.com/736x/2f/5c/41/2f5c41686582e85f78e91e09ef12067a.jpg"
        onClick={() => alert("Admin")}
      ></img>
      <div className="admin-info">
        <span id="category">Admin</span>
        <span id="name">Sharon Sebastian</span>
      </div>
    </>
  );
};

export default AdminInfo;
