import { IoIosAddCircleOutline } from "react-icons/io";
import "./Button.css";
function AddMember() {
  return (
    <div>
      <button id="add-member" on>
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
