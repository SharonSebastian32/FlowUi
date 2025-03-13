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
        src="https://i.pinimg.com/736x/bd/3b/16/bd3b16868f55313d5d70415d8b969a91.jpg"
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
