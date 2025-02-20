import React, { useState } from "react";
import Button from "./Button";

function DataTable({ data }) {
  const [dataSoruce, setDataSoruce] = useState(data);
  return (
    <div className="overflow-x-auto shadow">
      <table className="table table-zebra" data-theme="light">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Marks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            dataSoruce.length > 0 ? dataSoruce.map((data) => (
              <tr key={data.id}>
            <td>{data.id}</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{data.name}</div>
                  <div className="text-sm opacity-50">{data.address}</div>
                </div>
              </div>
            </td>
            <td>
            {data.address}
            </td>
            <td>{data.marks}</td>
            <th>
              <button className="btn btn-ghost btn-xs">{data.action}</button>
            </th>
          </tr>
            )) : (
              <tr>
                <td colSpan={5} className="text-center font-bold">ไม่พบข้อมูล</td>
              </tr>
            )
          }
          {/* <tr>
            <td>1</td>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
