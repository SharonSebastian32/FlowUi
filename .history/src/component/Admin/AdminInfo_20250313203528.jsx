import "./Admin.css";
const AdminInfo = () => {
  return (
    <>
      <div
        id="admin-info"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexDirection: "row",
        }}
      >
        <img
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor: "pointer",
            objectFit: "cover",
          }}
          src="https://i.pinimg.com/736x/23/4a/ac/234aac3fa455793b380609f5ebbef2f7.jpg"
          onClick={() => alert("Admin")}
        ></img>
        <div className="admin-info">
          <span id="category">Admin</span>
          <span id="name">Sharon Sebastian</span>
        </div>
      </div>
    </>
  );
};

export default AdminInfo;
