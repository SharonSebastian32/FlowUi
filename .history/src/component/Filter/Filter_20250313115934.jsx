function Filter() {
  return (
    <>
      <button id="add-member" onClick={() => alert("Add Member")}>
        <div>
          <span>
            <IoIosAddCircleOutline id="icon-add" />
          </span>
          Add Member
        </div>
      </button>
    </>
  );
}

export default Filter;
