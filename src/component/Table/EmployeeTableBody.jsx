import { flexRender } from "@tanstack/react-table";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";

const EmployeeTableBody = ({ table }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {table.getRowModel().rows.map((row) => {
        const isSelected = row.getIsSelected();
        return (
          <tr
            key={row.id}
            className={
              isSelected ? "bg-gray-200 hover:bg-gray-300" : "hover:bg-gray-100"
            }
            style={{
              backgroundColor: isSelected ? "#e5e7eb" : "white",
              transition: "background-color 0.2s ease",
            }}
            onClick={() => {
              if (row.getCanSelect()) {
                row.toggleSelected(!isSelected);
              }
            }}
          >
            {row.getVisibleCells().map((cell) => {
              const isGroupedCell = cell.getIsGrouped();
              const isAggregatedCell = cell.getIsAggregated();
              return (
                <td
                  key={cell.id}
                  className="px-2 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-sm text-gray-500"
                  style={{
                    backgroundColor: isGroupedCell
                      ? "#f3f4f6"
                      : isAggregatedCell
                      ? "#f9fafb"
                      : isSelected
                      ? "#e5e7eb"
                      : "white",
                    fontWeight: isGroupedCell ? "bold" : "normal",
                  }}
                >
                  {cell.getIsGrouped() ? (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          row.getToggleExpandedHandler()();
                        }}
                        className="inline-flex items-center"
                        style={{ cursor: "pointer" }}
                      >
                        {row.getIsExpanded() ? (
                          <BsChevronDown className="inline mr-1 sm:mr-2" />
                        ) : (
                          <BsChevronRight className="inline mr-1 sm:mr-2" />
                        )}
                      </button>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                      <span className="ml-1">({row.subRows.length})</span>
                    </>
                  ) : cell.getIsAggregated() ? (
                    <span>
                      {flexRender(
                        cell.column.columnDef.aggregatedCell ||
                          cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </span>
                  ) : cell.getIsPlaceholder() ? null : (
                    flexRender(cell.column.columnDef.cell, cell.getContext())
                  )}
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default EmployeeTableBody;