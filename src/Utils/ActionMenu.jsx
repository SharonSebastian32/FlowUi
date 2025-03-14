import { useState, useRef, useEffect } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ActionMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  return (
    <div className="relative" ref={menuRef}>
      <span style={{ color: "black" }}>
        <BsThreeDotsVertical
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          style={{ cursor: "pointer" }}
        />
      </span>

      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            zIndex: 1,
            marginRight: "60px",
          }}
        >
          <button
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => alert("Functionality not implemented")}
            style={{
              fontSize: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "right",
                gap: "10px",
              }}
            >
              <span>Edit</span>
            </div>
          </button>

          <button
            className="w-full text-left px-4 py-2 text-sm  hover:bg-gray-100 text-red-500"
            onClick={() => alert("Functionality not implemented")}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
