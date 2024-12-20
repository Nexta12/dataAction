import React from "react";

// Define the type for column data
export interface Column<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}

// Define the type for the Table props
interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (row: T) => string | number; // Function to extract unique key for each row
}

// Helper function to handle rendering cell values


const renderCellValue = (value: unknown): React.ReactNode => {
  if (React.isValidElement(value)) {
    return value; // If it's a React element, return it directly
  }

  if (typeof value === "string") {
    // Check if the string is an ISO date format
    const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
    if (isoDateRegex.test(value)) {
      const date = new Date(value);
      if (!isNaN(date.getTime())) {
        // Format the date as DD/MM/YY
        return new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true, // 24-hour format
        }).format(date);
      }
    }
    return value; // Return the string as-is if it's not a valid date
  }

  if (typeof value === "number") {
    return value; // Render numbers as-is
  }

  if (value === null || value === undefined) {
    return null; // Render nothing for null/undefined
  }

  // Fallback for other types (e.g., objects, arrays)
  return String(value);
};



// Reusable Table component
const Table = <T,>({ data, columns, keyExtractor }: TableProps<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse table-auto border border-gray-300 ">
        <thead className="bg-dark text-left text-white">
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                className="px-4 py-4 text-sm text-center font-medium text-gray-700 border border-gray-300"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={keyExtractor(row)}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-white"}
            >
              {columns.map((column) => (
                <td
                  key={`${keyExtractor(row)}-${String(column.key)}`}
                  className=" p-4 text-sm text-gray-600 border border-gray-300 text-center"
                >
                  {column.render
                    ? column.render(row[column.key] as T[keyof T], row)
                    : renderCellValue(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
