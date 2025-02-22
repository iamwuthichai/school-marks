import React, { useState, useEffect } from "react";
import { NotebookTabs } from "lucide-react";

function Navbar() {
  const [menu, setMenu] = useState([]);

  const mockupMenu = [
    {
      id: 1,
      menu: "Dashboard",
      menuPath: "/dashboard",
      menuParent: [],
      menuIcon: "",
    },
  ];

  useEffect(() => {
    setMenu(mockupMenu);
  }, []);

  return (
    <div className="navbar bg-base-200 shadow" data-theme="light">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {menu.map((data) => (
              <li key={data.id}>
                <a href={data.menuPath}>
                  {data.menuIcon} {data.menu}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <NotebookTabs color="#00b3ff" />

        <a className="btn btn-ghost text-xl">School Marks</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menu.map((data) => (
            <li key={data.id}>
              <a href={data.menuPath} className="font-bold">
                {data.menu}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
}

export default Navbar;
