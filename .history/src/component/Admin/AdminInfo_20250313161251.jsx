import "./Admin.css";
const AdminInfo = () => {
  return (
    <>
      <img className="admin-icon" src="" onClick={() => alert("Admin")}></img>
      <div className="admin-info">
        <span id="category">Admin</span>
        <span id="name">Sharon Sebastian</span>
      </div>
    </>
  );
};

export default AdminInfo;
