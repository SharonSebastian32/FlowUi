import "./Admin.css";
const AdminInfo = () => {
  return (
    <>
      <span className="admin-icon" onClick={() => alert("Admin")}>
        <img src="./images/admin.png" alt="" />
      </span>
      <div className="admin-info">
        <span id="category">Admin</span>
        <span id="name">Sharon Sebastian</span>
      </div>
    </>
  );
};

export default AdminInfo;
