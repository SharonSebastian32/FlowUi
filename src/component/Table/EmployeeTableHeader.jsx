import { flexRender } from "@tanstack/react-table";

const EmployeeTableHeader = ({ table }) => {
  return (
    <thead className="bg-gray-50">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              className="px-2 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-black-500 tracking-wider cursor-pointer"
              onClick={header.column.getToggleSortingHandler()}
              title={
                header.column.getCanSort()
                  ? header.column.getNextSortingOrder() === "asc"
                    ? "Sort ascending"
                    : header.column.getNextSortingOrder() === "desc"
                    ? "Sort descending"
                    : "Clear sort"
                  : undefined
              }
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
              {{}[header.column.getIsSorted()] ?? null}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default EmployeeTableHeader;
