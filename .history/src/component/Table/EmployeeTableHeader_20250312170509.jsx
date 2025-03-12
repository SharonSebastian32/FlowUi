import { flexRender } from "@tanstack/react-table";

const EmployeeTableHeader = ({ table }) => {
  return (
    <thead className="bg-gray-50">
      {table.getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id} className="">
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              className="px-6 py-3 text-left text-sm font-semibold  text-black-700 tracking-wider cursor-pointer"
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
export default EmployeeTableHeader;
