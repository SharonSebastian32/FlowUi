import "./Admin.css";
const AdminInfo = () => {
  return (
    <>
      {" "}
      <span
        style={{
          padding: "9px",
          borderRadius: "50%",
          fontSize: "15px",
        }}
      >
        MN
      </span>
      <div className="admin-info">
        <span id="category">Admin</span>
        <span id="name" className="text-bold text-black">
          Muhammed Navab
        </span>
      </div>
    </>
  );
};

export default AdminInfo;
