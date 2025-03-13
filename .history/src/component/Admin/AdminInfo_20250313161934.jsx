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
          ba
        }}
        src="https://i.pinimg.com/736x/2e/4d/51/2e4d51788b6f90ee54d4eafffd6018cb.jpg"
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
