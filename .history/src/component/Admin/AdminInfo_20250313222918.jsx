import "./Admin.css";
import Profile from "../../assets/Profile.png";
import { useState, useRef } from "react";

const AdminInfo = () => {
  // State to manage the displayed image
  const [avatar, setAvatar] = useState(
    localStorage.getItem("adminAvatar") || Profile
  );
  const fileInputRef = useRef(null);

  // Handle image click to trigger file input
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection and upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file");
        return;
      }

      // Check file size (e.g., max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size should be less than 5MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageDataUrl = e.target.result;
        // Save to localStorage
        localStorage.setItem("adminAvatar", imageDataUrl);
        // Update state to display new avatar
        setAvatar(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

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
        <div style={{ position: "relative" }}>
          <img
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              cursor: "pointer",
              objectFit: "cover",
            }}
            src={avatar}
            onClick={handleImageClick}
            alt="Admin Avatar"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>

        <div className="admin-info">
          <span id="category">Admin</span>
          <span id="name">Sharon Sebastian</span>
        </div>
      </div>
    </>
  );
};

export default AdminInfo;
