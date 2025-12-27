import React, { useEffect, useRef, useState, useMemo } from "react";
import { ChevronDown, Plus, UserRound } from "lucide-react";

function CustomerPicker({ items = [], onSelect, selected }) {
  const [searchText, setSearchText] = useState("");


  const filteredCustomer = useMemo(() => {
    if (!searchText) return items;
    return items.filter(it =>
      it.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [items, searchText]);

  return (
    <div className="w-72 h-full flex flex-col ">

      <div className="sticky top-0 z-10 bg-white p-2 ">
        <input
          type="text"
          value={searchText}
          placeholder="Search customers..."
          className="w-full rounded-lg px-4 py-2.5 text-sm shadow-sm
            focus:outline-none focus:ring-2 focus:ring-gray-300"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {filteredCustomer.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            No customers found
          </div>
        ) : (
          <ul className="py-1">
            {filteredCustomer.map((it, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onSelect(it)}
                  className="flex w-full items-center gap-3 px-4 py-3
                    hover:bg-gray-100 transition"
                >
                  <img
                    className="h-8 w-8 rounded-full"
                    src={
                      it.gender === "male"
                        ? "https://img.freepik.com/free-vector/smiling-man-with-glasses_1308-174409.jpg"
                        : "https://img.freepik.com/free-vector/smiling-woman-with-long-brown-hair_1308-175662.jpg"
                    }
                  />
                  <span className="truncate font-medium">{it.name}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}


export default CustomerPicker;