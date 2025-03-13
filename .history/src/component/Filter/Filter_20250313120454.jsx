import { CiFilter } from "react-icons/ci";
import "./Filter.css";
function Filter() {
  return (
    <>
      <button id="filter" onClick={() => alert("Add Member")}>
        <div>
          <span>
            <CiFilter id="icon-filter" />
          </span>
         <span></span> Filter
        </div>
      </button>
    </>
  );
}

export default Filter;
