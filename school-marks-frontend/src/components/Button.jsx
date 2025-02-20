import React from "react";

export default function Button({ title }) {
  return (
    <button className="btn btn-outline btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
      {title}
    </button>
  );
}
