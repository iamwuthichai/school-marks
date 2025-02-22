import React from "react";
import Button from "./Button";
import { Search } from "lucide-react";

export default function SearchData() {
  return (
    <>
      <div className="form-control flex items-center p-4">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <Button customClass="bg-info text-white m-2" title="">
          <Search />
        </Button>
      </div>
    </>
  );
}
