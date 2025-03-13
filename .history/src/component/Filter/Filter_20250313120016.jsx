import { CiFilter } from "react-icons/ci";

function Filter() {
  return (
    <>
      <button id="add-member" onClick={() => alert("Add Member")}>
        <div>
          <span>
            <CiFilter id="icon-add" />
          </span>
          Add Member
        </div>
      </button>
    </>
  );
}

export default Filter;
