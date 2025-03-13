import "./Admin.css";
const AdminInfo = () => {
  return (
    <>
      <img
        className="admin-icon"
        src="https://i.pinimg.com/736x/cb/7e/3e/cb7e3ebc6de6214e146948ba9fdf3053.jpg"
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
