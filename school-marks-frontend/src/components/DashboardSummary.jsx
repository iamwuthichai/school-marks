import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DashboardSummary({ data }) {
  // State สำหรับเก็บค่าตัวเลขของแต่ละหมวด
  const [studentTotal, setStudentTotal] = useState(0);
  const [passCount, setPassCount] = useState(0);
  const [noPassCount, setNoPassCount] = useState(0);
  const [averagePassNoPass, setAveragePassNoPass] = useState(0);

  // ใช้ useEffect เพื่อทำ Animation ตัวเลขเมื่อโหลดเสร็จ
  useEffect(() => {
    const animateValue = (setter, toValue) => {
      if (typeof toValue !== "number" || isNaN(toValue)) return; // ป้องกัน NaN

      let start = 0;
      const duration = 1000; // ระยะเวลา 1 วินาที (1000ms)
      const stepTime = 10; // ความเร็วอัพเดตทุก 10ms
      const steps = duration / stepTime;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setter(Math.floor(progress * toValue));

        if (currentStep >= steps) {
          setter(toValue); // เซ็ตค่าสุดท้ายให้ตรง
          clearInterval(interval);
        }
      }, stepTime);
    };

    // เรียกใช้ฟังก์ชัน animateValue สำหรับแต่ละค่า
    animateValue(setStudentTotal, parseInt(data.student_total));
    animateValue(setPassCount, parseInt(data.pass_count));
    animateValue(setNoPassCount, parseInt(data.no_pass_count));
    animateValue(setAveragePassNoPass, parseFloat(data.average_pass_nopass));
  }, [data]);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="stats shadow">
          <div className="stat place-items-center">
            <div className="stat-title font-bold">STUDENT</div>
            <motion.div
              className="stat-value"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {studentTotal}
            </motion.div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title font-bold">PASS</div>
            <motion.div
              className="stat-value text-cyan-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {passCount}
            </motion.div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title font-bold">NOPASS</div>
            <motion.div
              className="stat-value text-red-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {noPassCount}
            </motion.div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title font-bold">AVERAGE PASS/NOPASS</div>
            <motion.div
              className="stat-value text-yellow-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {averagePassNoPass}%
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
