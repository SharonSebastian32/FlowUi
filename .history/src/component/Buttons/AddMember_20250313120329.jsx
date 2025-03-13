import { IoIosAddCircleOutline } from "react-icons/io";
import "./Button.css";
function AddMember() {
  return (
    <div>
      <button id="filter" onClick={() => alert("Add Member")}>
        <div>
          <span>
            <IoIosAddCircleOutline id="icon-add" />
          </span>
          Add Member
        </div>
      </button>
    </div>
  );
}

export default AddMember;
