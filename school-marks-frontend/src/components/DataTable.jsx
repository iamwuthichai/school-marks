import React, { useState, useEffect } from "react";
import Button from "./Button";

function DataTable({ data }) {
  const [dataSoruce, setDataSoruce] = useState([]);

  useEffect(() => {
    setDataSoruce(data);
  }, [data])
  

  return (
    <div className="overflow-x-auto shadow">
      <table className="table" data-theme="light">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Marks</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataSoruce.length > 0 ? (
            dataSoruce.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="/image/avatar.jpg"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{data.name}</div>
                      <div className="text-sm opacity-50">Age: {data.age}</div>
                    </div>
                  </div>
                </td>
                <td>{data.address}</td>
                <td>{data.marks}</td>
                <td>{data.status}</td>
                <th>{data.action}</th>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center font-bold">
                ไม่พบข้อมูล
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
