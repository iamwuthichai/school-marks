import React, { useState, useEffect } from "react";
import Button from "./Button";
import { Search } from "lucide-react";

export default function SearchData({ children, callback }) {
  const [searchData, setSearchData] = useState("");

  useEffect(() => {}, [searchData]);

  const handleSearchConfirm = () => {
    callback(searchData);
  };

  return (
    <>
      <div className="form-control flex items-center p-4">
        <input
          type="text"
          placeholder="Search Name"
          className="input input-bordered w-24 md:w-auto"
          onChange={(e) => setSearchData(e.target.value)}
        />
        <Button
          customClass="bg-info text-white m-2"
          title=""
          onClick={handleSearchConfirm}
        >
          <Search />
        </Button>
      </div>
    </>
  );
}
