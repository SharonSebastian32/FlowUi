import "./Admin.css";
const AdminInfo = () => {
  return (
    <>
      {" "}
      <span
        style={{
          padding: "9px",
          borderRadius: "50%",
          backgroundColor: "white",
        }}
      >
        SH
      </span>
      <div className="admin-info">
        <span id="category">Admin</span>
        <span id="name" className="text-bold text-black">
         M
        </span>
      </div>
    </>
  );
};

export default AdminInfo;
