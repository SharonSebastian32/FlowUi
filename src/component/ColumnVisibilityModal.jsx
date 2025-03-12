const ColumnVisibilityModal = ({
  isOpen,
  onClose,
  columns,
  columnVisibility,
  setColumnVisibility,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Configuration</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>
        <div className="max-h-64 overflow-y-auto">
          {columns.map((column) => {
            if (column.id === "select" || column.id === "Action") return null;

            return (
              <div key={column.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  style={{
                    accentColor: "red",
                  }}
                  id={`column-${column.id}`}
                  checked={columnVisibility[column.id] !== false}
                  onChange={() => {
                    setColumnVisibility((prev) => ({
                      ...prev,
                      [column.id]: prev[column.id] === false,
                    }));
                  }}
                  className="mr-2"
                />
                <label
                  htmlFor={`column-${column.id}`}
                  className="cursor-pointer"
                >
                  {typeof column.header === "string"
                    ? column.header
                    : column.id}
                </label>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColumnVisibilityModal;
