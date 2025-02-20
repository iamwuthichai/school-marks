import React from "react";

export default function Button({ children, title, customClass }) {
  return (
    <button
      className={`${customClass} btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg shadow`}
    >
      {children}
      {title}
    </button>
  );
}
