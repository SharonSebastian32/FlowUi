import { IoIosAddCircleOutline } from "react-icons/io";
import "./Button.css";
function AddMember() {
  return (
    <div>
      <button id="add-member" onClick={() => console.log("Add Member")}>
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
