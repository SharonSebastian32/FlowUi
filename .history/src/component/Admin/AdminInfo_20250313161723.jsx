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
        }}
        src="../ass"
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
