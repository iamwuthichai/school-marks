import React from "react";

import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";
import DataTable from "../components/DataTable";
import Plus from "../components/icons/Plus";
import Minus from "../components/icons/Minus";
import Trash from "../components/icons/Trash";
import Pencil from "../components/icons/Pencil";

function Dashboard() {
  const studentData = [
    {
      id: "1",
      name: "Arun Kumar",
      address: "New Delhi",
      marks: 450,
      action: (
        <>
          <Button customClass="btn-circle text-primary m-2" title="">
            <Pencil />
          </Button>
          <Button customClass="btn-circle text-primary m-2" title="">
            <Minus />
          </Button>
          <Button customClass="btn-circle text-primary m-2" title="">
            <Trash />
          </Button>
        </>
      ),
    },
    {
      id: "2",
      name: "Sita Verma",
      address: "Mumbai",
      marks: 500,
      action: (
        <>
          <Button customClass="btn-circle text-primary m-2" title="">
            <Pencil />
          </Button>
          <Button customClass="btn-circle text-primary m-2" title="">
            <Minus />
          </Button>
          <Button customClass="btn-circle text-primary m-2" title="">
            <Trash />
          </Button>
        </>
      ),
    },
  ];
  return (
    <MainLayout>
      <div className="flex justify-end">
        <Button customClass="bg-info text-white m-2" title="เพิ่มนักเรียนใหม่">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Button>
      </div>
      <DataTable data={studentData} />
    </MainLayout>
  );
}

export default Dashboard;
