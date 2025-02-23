import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
import { LogIn } from "lucide-react";

export default function Main() {
  const navigate = useNavigate();

  return (
    <div
      className="hero bg-base-200 min-h-screen"
      style={{
        backgroundImage: "url(/image/bg.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">SCHOOL MARKS</h1>
          <h3 className="text-white">
            School Marks System (ระบบบันทึกคะแนนนักเรียน)
          </h3>
          <hr className="m-4 text-gray-200" />
          <Button
            title="เริ่มต้นใช้งาน"
            customClass="bg-primary text-white"
            onClick={() => navigate("/dashboard")}
          >
            <LogIn />
          </Button>
        </div>
      </div>
    </div>
  );
}
