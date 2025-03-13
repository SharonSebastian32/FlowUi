import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddMember() {
  return (
    <div>
      <button>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span>
            <IoIosAddCircleOutline />
          </span>
          Add Member
        </div>
      </button>
    </div>
  );
}

export default AddMember;
