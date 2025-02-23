import React, { useEffect, useState } from "react";
import useServiceAPI from "../../services/apiService";
import { paths } from "../../services/apiPath";

import {
  FileDigit,
  Heart,
  MapPinHouse,
  Pencil,
  Save,
  User,
} from "lucide-react";
import Button from "../Button";
import MessageAlert from "../MessageAlert";

function FormCrudStudent({ children, modalMode, dataSource, callback }) {
  const [mode, setMode] = useState("");
  const [readOnly, setReadOnly] = useState(false);
  const [studenInfo, setStudenInfo] = useState([]);
  const [messageAlertData, setMessageAlertData] = useState("");

  useEffect(() => {
    setMode(modalMode);

    if (modalMode === "read" || modalMode === "delete") {
      setReadOnly(true);
      setStudenInfo(dataSource);
    } else {
      setReadOnly(false);
      setStudenInfo(dataSource);
    }

    // console.log(modalMode);
  }, [modalMode, dataSource]);

  const handleUpdateStudentInfo = () => {
    const updateStudent = async () => {
      // setLoading(true);
      try {
        const [students] = await Promise.all([
          useServiceAPI.put(
            `${paths.pathStudents}/${studenInfo.id}`,
            studenInfo
          ),
        ]);

        // Close Modal
        document.getElementById("modal_crud_student").close();

        if (callback) {
          callback();
        }

        // Use Message Alert
        setMessageAlertData({
          messageType: "success",
          messageText: "อัปเดตข้อมูลนักเรียนเรียบร้อย",
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

    updateStudent();
    setStudenInfo([]);
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
            value={studenInfo.name ?? ""}
            disabled={readOnly}
            onChange={(e) =>
              setStudenInfo((prev) => ({
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
            value={studenInfo.age ?? ""}
            disabled={readOnly}
            onChange={(e) =>
              setStudenInfo((prev) => ({
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
            value={studenInfo.address ?? ""}
            disabled={readOnly}
            onChange={(e) =>
              setStudenInfo((prev) => ({
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
            value={studenInfo.marks ?? ""}
            disabled={readOnly}
            onChange={(e) =>
              setStudenInfo((prev) => ({
                ...prev,
                marks: e.target.value,
              }))
            }
          />
        </label>

        {mode === "update" ? (
          <>
            <div className="flex justify-center items-center p-4 gap-4">
              <div>
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-accent"
                  // defaultChecked
                  onClick={(e) =>
                    setStudenInfo((prev) => ({
                      ...prev,
                      status: "PASS",
                    }))
                  }
                />{" "}
                PASS
              </div>
              <div>
                <input
                  type="radio"
                  name="radio-4"
                  className="radio radio-error"
                  onClick={(e) =>
                    setStudenInfo((prev) => ({
                      ...prev,
                      status: "NO PASS",
                    }))
                  }
                />{" "}
                NO PASS
              </div>
            </div>
            <Button
              title="แก้ไขข้อมูล"
              customClass="bg-cyan-500 text-white"
              onClick={handleUpdateStudentInfo}
            >
              <Pencil />
            </Button>
          </>
        ) : (
          ""
        )}
      </div>

      <MessageAlert callback={messageAlertData} />
    </>
  );
}

export default FormCrudStudent;
