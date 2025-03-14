import { FaFilter } from "react-icons/fa";
import "./Filter.css";
function Filter() {
  return (
    <>
      <button id="filter" onClick={() => alert("Filter Pending")}>
        <div id="filter-button">
          <span>
            <FaFilter id="icon-filter" />
          </span>
          <span>Filter</span>
        </div>
      </button>
    </>
  );
}

export default Filter;
