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
        <span id="category">MN</span>
        <span id="name" className="text-bold text-black">
         Muhammed Navab
        </span>
      </div>
    </>
  );
};

export default AdminInfo;
