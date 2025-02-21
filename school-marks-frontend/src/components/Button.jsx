import React from "react";

export default function Button({ children, title, customClass, onClick }) {
  return (
    <button
      className={`${customClass} btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg shadow`}
      onClick={onClick}
    >
      {children}
      {title}
    </button>
  );
}
