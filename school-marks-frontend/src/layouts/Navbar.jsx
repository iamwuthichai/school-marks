import React, { useState, useEffect } from "react";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-6 fill-blue-500"
        >
          <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
        </svg>

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
