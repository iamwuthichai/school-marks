import React from "react";

import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";
import DataTable from "../components/DataTable";
// import Minus from "../components/icons/Minus";
// import Trash from "../components/icons/Trash";
// import Pencil from "../components/icons/Pencil";
import Modal from "../components/Modal";
import FormAddStudent from "../components/Form/FormAddStudent";
import { BookOpenText, Pencil, Plus, Trash2 } from "lucide-react";

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
            <BookOpenText />
          </Button>
          <Button customClass="btn-circle text-primary m-2" title="">
            <Pencil />
          </Button>
          <Button customClass="btn-circle text-primary m-2" title="">
            <Trash2 />
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
            <BookOpenText />
          </Button>
          <Button customClass="btn-circle text-primary m-2" title="">
            <Pencil />
          </Button>
          <Button customClass="btn-circle text-primary m-2" title="">
            <Trash2 />
          </Button>
        </>
      ),
    },
  ];
  return (
    <MainLayout>
      <div className="flex justify-end">
        <Button
          customClass="bg-info text-white m-2"
          title="เพิ่มนักเรียนใหม่"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <Plus />
        </Button>
      </div>

      <Modal title="เพิ่มนักเรียนใหม่">
        <FormAddStudent></FormAddStudent>
      </Modal>

      <DataTable data={studentData} />
    </MainLayout>
  );
}

export default Dashboard;
