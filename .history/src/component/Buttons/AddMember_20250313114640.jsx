import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function AddMember() {
  return (
    <div>
      <button id="add-member">
        <div>
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
