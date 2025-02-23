import React, { useEffect, useState } from "react";
import useServiceAPI from "../services/apiService";
import { paths } from "../services/apiPath";

import { BookOpenText, Pencil, Plus, Trash2 } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import Button from "../components/Button";
import DataTable from "../components/DataTable";
import ModalAddStudent from "../components/modal/ModalAddStudent";
import FormAddStudent from "../components/form/FormAddStudent";
import ModalCrud from "../components/modal/ModalCrud";
import FormCrudStudent from "../components/form/FormCrudStudent";
import DashboardSummary from "../components/DashboardSummary";
import SearchData from "../components/SearchData";
import ModalConfirm from "../components/modal/ModalConfirm";
import MessageAlert from "../components/MessageAlert";

function Dashboard() {
  const [actionMode, setActionMode] = useState("");
  const [dashboardData, setDashboardData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [studentByIdData, setStudentByIdData] = useState([]);
  const [studentDelete, setStudentDelete] = useState([]);
  const [loadData, setLoadData] = useState("");
  const [searchData, setSearchData] = useState("");
  const [messageAlertData, setMessageAlertData] = useState("");

  useEffect(() => {}, [actionMode]);

  useEffect(() => {
    setLoadData("");
    const loadDataStudents = async () => {
      // setLoading(true);
      try {
        const [students, summary] = await Promise.all([
          useServiceAPI.get(paths.pathStudents, searchData),
          useServiceAPI.get(paths.pathDashboard, searchData),
        ]);

        // Update Data
        const updateStudentData = students.map((item, key) => ({
          ...item,
          id: item.id,
          key: key + 1,
          name: item.name,
          age: item.age,
          address: item.address,
          marks: item.marks,
          status: (
            <div
              className={`font-bold ${
                item.status &&
                (item.status == "PASS"
                  ? "badge badge-accent badge-outline"
                  : "badge badge-error badge-outline")
              }`}
            >
              {item.status}
            </div>
          ),
          action: (
            <>
              <Button
                customClass="btn-circle text-primary m-2"
                title=""
                onClick={(e) => handleModalCrud("read", item)}
              >
                <BookOpenText />
              </Button>
              <Button
                customClass="btn-circle text-primary m-2"
                title=""
                onClick={(e) => handleModalCrud("update", item)}
              >
                <Pencil />
              </Button>
              <Button
                customClass="btn-circle text-primary m-2"
                title=""
                onClick={(e) => handleModalCrud("delete", item)}
              >
                <Trash2 />
              </Button>
            </>
          ),
        }));

        // Set Data
        setStudentData(updateStudentData);
        setDashboardData(summary);
      } catch (error) {
        console.log("error", error.message || "เกิดข้อผิดพลาด");
      } finally {
        // setLoading(false);
        console.log("finally");
      }
    };

    loadDataStudents();
  }, [loadData]);

  const reloadDataSoruce = (data) => {
    setLoadData("OK");
  };

  const handleModalAddStudent = () => {
    document.getElementById("modal_add_student").showModal();
  };

  const handleModalCrud = (mode, data) => {
    setActionMode(mode);
    setStudentByIdData(data);
    setStudentDelete([]);

    if (mode === "read" || mode === "update") {
      document.getElementById("modal_crud_student").showModal();
    } else {
      setStudentDelete(data.id);
      document.getElementById("modal_confirm").showModal();
    }
  };

  const handleDeleteStudent = (mode) => {
    if (mode === "confirm") {
      const deleteStudent = async () => {
        // setLoading(true);
        try {
          const [students] = await Promise.all([
            useServiceAPI.delete(`${paths.pathStudents}/${studentDelete}`, {}),
          ]);

          // Close Modal
          document.getElementById("modal_confirm").close();
          setLoadData("OK");

          // Use Message Alert
          setMessageAlertData({
            messageType: "success",
            messageText: "ลบข้อมูลนักเรียนเรียบร้อย",
          });
        } catch (error) {
          // Use Message Alert
          setMessageAlertData({
            messageType: "error",
            messageText: error.message || "เกิดข้อผิดพลาด",
          });
        } finally {
          // setLoading(false);
          // console.log("finally");
        }
      };

      deleteStudent();
    } else {
      document.getElementById("modal_confirm").close();
    }
  };

  const handleSearchData = (data) => {
    setSearchData({
      name: data
    })

    setLoadData("OK");
  };

  return (
    <MainLayout>
      <DashboardSummary data={dashboardData} />
      <div className="flex justify-between items-center">
        <div className="text-4xl font-bold">STUDENT DETAIL</div>
        <Button
          customClass="bg-info text-white m-2"
          title="เพิ่มนักเรียนใหม่"
          onClick={(e) => handleModalAddStudent()}
        >
          <Plus />
        </Button>
      </div>

      <div className="flex justify-between items-center">
        <SearchData callback={handleSearchData}></SearchData>
      </div>

      <ModalAddStudent title="เพิ่มนักเรียนใหม่">
        <FormAddStudent callback={reloadDataSoruce}></FormAddStudent>
      </ModalAddStudent>

      <ModalCrud title="รายละเอียด" deleteMode={true}>
        <FormCrudStudent
          modalMode={actionMode}
          dataSource={studentByIdData}
          callback={reloadDataSoruce}
        ></FormCrudStudent>
      </ModalCrud>

      <ModalConfirm title="ต้องการลบนักเรียนหรือไม่?">
        <div className="flex justify-center items-center p-4 gap-4">
          <Button
            title="ยกเลิก"
            customClass="bg-primary text-white"
            onClick={() => handleDeleteStudent("cancel")}
          ></Button>

          <Button
            title="ยืนยัน"
            customClass="bg-red-300 text-white"
            onClick={() => handleDeleteStudent("confirm")}
          ></Button>
        </div>
      </ModalConfirm>

      <DataTable data={studentData} />

      <MessageAlert callback={messageAlertData} />
    </MainLayout>
  );
}

export default Dashboard;
