import React from "react";

function CustomTable({ columns = [], data = [], actions = [] }) {
  const shouldShowActions = actions.length > 0;

  return (
    <div>
      <table className="border border-collapse w-full">
        <thead>
          <tr className="border bg-gray-100">
            {columns.map((col) => (
              <th
                key={col.id}
                className="border p-1 uppercase text-sm font-light text-left">
                {col.label}
              </th>
            ))}
            {shouldShowActions && (
              <th className="border p-1 uppercase text-sm font-light text-left">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="text-center p-4">
                <div className="flex justify-center items-center h-full">
                  <p className="text-sm text-gray-500">No data found</p>
                </div>
              </td>
            </tr>
          )}

          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td className="border p-1 text-sm">
                  {row[column.id] ?? "N/A"}
                </td>
              ))}

              {/* Actions */}
              {shouldShowActions && (
                <td className="border p-1 text-sm flex items-center gap-2">
                  {actions.map((action) => (
                    <div
                      className="cursor-pointer"
                      onClick={() => action.onClick(row)}>
                      {typeof action.icon === "function"
                        ? action.icon(row)
                        : action.icon}
                    </div>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
