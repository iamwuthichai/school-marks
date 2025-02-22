import React, { useState } from "react";

function ModalConfirm({ children, title }) {
  return (
    <>
      <dialog id="modal_confirm" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>

          {children}
        </div>
      </dialog>
    </>
  );
}

export default ModalConfirm;
