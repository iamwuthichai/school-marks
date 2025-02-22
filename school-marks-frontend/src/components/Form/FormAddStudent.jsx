import React, { useState, useEffect } from "react";
import useServiceAPI from "../../services/apiService";
import { paths } from "../../services/apiPath";

import { FileDigit, Heart, MapPinHouse, Save, User } from "lucide-react";
import Button from "../Button";

function FormAddStudent({ children, callback }) {
  const [studentInfo, setStudentInfo] = useState([]);

  useEffect(() => {}, [studentInfo]);

  const handleCreateStudent = (e) => {
    const createStudent = async () => {
      // setLoading(true);
      try {
        const [students] = await Promise.all([
          useServiceAPI.post(paths.pathStudents, studentInfo),
        ]);

        // Close Modal
        document.getElementById("modal_add_student").close();

        if (callback) {
          callback();
        }
      } catch (error) {
        console.log("error", error.message || "เกิดข้อผิดพลาด");
      } finally {
        // setLoading(false);
        console.log("finally");
      }
    };

    createStudent();
    setStudentInfo([]);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center p-4">
        <label className="input input-bordered flex items-center gap-2 m-2">
          <User size={16} />
          <input
            type="text"
            className="grow"
            placeholder="Name"
            onChange={(e) =>
              setStudentInfo((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 m-2">
          <Heart size={16} />
          <input
            type="number"
            className="grow"
            placeholder="Age"
            onChange={(e) =>
              setStudentInfo((prev) => ({
                ...prev,
                age: e.target.value,
              }))
            }
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 m-2">
          <MapPinHouse size={16} />
          <input
            type="text"
            className="grow"
            placeholder="Address/City"
            onChange={(e) =>
              setStudentInfo((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 m-2">
          <FileDigit size={16} />
          <input
            type="number"
            className="grow"
            placeholder="Marks 0"
            onChange={(e) =>
              setStudentInfo((prev) => ({
                ...prev,
                marks: e.target.value,
              }))
            }
          />
        </label>

        <Button
          title="บันทึก"
          customClass="bg-cyan-500 text-white"
          onClick={handleCreateStudent}
        >
          <Save />
        </Button>
      </div>
    </>
  );
}

export default FormAddStudent;
